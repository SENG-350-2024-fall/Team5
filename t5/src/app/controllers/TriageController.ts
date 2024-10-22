"use client";

import React from "react";
import Prisma from "../../../prisma/prisma";
//import the database object used. The singleton
import { TRIAGEAPPLICATIONSTATUS } from "../../constants/globals";
import {
  TRIAGE_APPLICATION,
  SYMPTOM,
} from "../../interfaces/triageApplication";

export default class TriageController {
  public static async getTriageApplicationById(tid: number) {
    try {
      const triageApplication = await Prisma.triageApplication.findUnique({
        where: {
          tid: tid,
        },
      });
      return {
        message: "Triage Application found",
        status: 200,
        data: triageApplication,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }
  public static async createTriageApplication(
    pid: number,
    time_created: Date,
    patient_history?: string | null,
    patient_medication?: string | null,
  ) {
    const status = TRIAGEAPPLICATIONSTATUS;
    try {
      const triageApplicationData: TRIAGE_APPLICATION = {
        pid: pid,
        time_created: time_created,
        status: status,
        patient_history: patient_history,
        patient_medication: patient_medication,
      };
      const triageApplication = await Prisma.triageApplication.create({
        data: {
          status: triageApplicationData.status,
          time_created: triageApplicationData.time_created,
          patient: {
            connect: {
              pid: triageApplicationData.pid,
            },
          },
          patient_history: triageApplicationData.patient_history,
          patient_medication: triageApplicationData.patient_medication,
        },
      });
      return {
        message: "Triage Application created",
        status: 200,
        data: triageApplication,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }

  public static async updateSymptom(
    sid: number,
    name?: string,
    pain_scale?: number,
    other_info?: string,
    time_started?: Date,
    body_location?: string,
  ) {
    try {
      const symptom = await Prisma.symptom.update({
        where: {
          sid: sid,
        },
        data: {
          name: name,
          pain_scale: pain_scale,
          other_info: other_info,
          time_started: time_started,
          body_location: body_location,
        },
      });
      return {
        message: "Symptom updated",
        status: 200,
        data: symptom,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }

  public static async addSymptomToTriageApplication(
    tid: number,
    symptom: SYMPTOM,
  ) {
    try {
      const time_started = symptom.time_started
        ? symptom.time_started
        : new Date();
      const triageApplication = await Prisma.triageApplication.update({
        where: {
          tid: tid,
        },
        data: {
          symptoms: {
            create: {
              name: symptom.name,
              pain_scale: symptom.pain_scale,
              other_info: symptom.other_info,
              time_started: time_started,
              body_location: symptom.body_location,
            },
          },
        },
      });
      return {
        message: "Symptom added to Triage Application",
        status: 200,
        data: triageApplication,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }

  public static async updateTriageApplicationStatus(
    tid: number,
    status: string,
  ) {
    if (
      status !== "PENDING" &&
      status !== "IN_PROGRESS" &&
      status !== "COMPLETED"
    ) {
      return { message: "Invalid status", status: 400 };
    }
    try {
      const triageApplication = await Prisma.triageApplication.update({
        where: {
          tid: tid,
        },
        data: {
          status: status,
        },
      });
      return {
        message: "Triage Application status updated",
        status: 200,
        data: triageApplication,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }

  public static async getSymptomById(sid: number) {
    try {
      const symptom = await Prisma.symptom.findUnique({
        where: {
          sid: sid,
        },
      });
      return {
        message: "Symptom found",
        status: 200,
        data: symptom,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }

  public static async deleteSymptom(sid: number) {
    try {
      const symptom = await Prisma.symptom.delete({
        where: {
          sid: sid,
        },
      });
      return {
        message: "Symptom deleted",
        status: 200,
        data: symptom,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }

  public static async getSymptomsByTriageApplication(tid: number) {
    try {
      const symptoms = await Prisma.symptom.findMany({
        where: {
          triage_application_id: tid,
        },
        select: {
          sid: true
        }
      });
      return {
        message: "Symptoms found",
        status: 200,
        data: symptoms,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }

  public static async deleteTriageApplication(tid: number) {
    try {
      const triageApplication = await Prisma.triageApplication.delete({
        where: {
          tid: tid,
        },
      });
      return {
        message: "Triage Application deleted",
        status: 200,
        data: triageApplication,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }
}
