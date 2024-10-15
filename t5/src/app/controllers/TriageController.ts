"use client";

import React from "react";
import Prisma from "../../../prisma/prisma";
//import the database object used. The singleton
import { TRIAGE_APPLICATION_STATUS } from "../../constants/globals";
import { TRIAGE_APPLICATION } from "../../interfaces/triageApplication";

export default class TriageController {

  public static async getTriageApplicationById(tid: number) {
    try {
      const triageApplication = await Prisma.triageApplication.findUnique({
        where: {
          tid: tid
        }
      });
      return {message: "Triage Application found", status: 200, data: triageApplication};
    } catch (error: any) {
      console.log(error);
      return {message: error, status: 400};
    }
  }
  public static async createTriageApplication(pid: number, time_created: Date, patient_history? : string | null, patient_medication?: string | null) {
    const status = TRIAGE_APPLICATION_STATUS;
    try {
      const triageApplicationData: TRIAGE_APPLICATION = {
        pid: pid,
        time_created: time_created,
        status: status,
        patient_history: patient_history,
        patient_medication: patient_medication,
      }
      const triageApplication = await Prisma.triageApplication.create({
        data: {
          status: triageApplicationData.status,
          time_created: triageApplicationData.time_created,
          patient: {
            connect: {
              pid: triageApplicationData.pid
            }
          },
          patient_history: triageApplicationData.patient_history,
          patient_medication: triageApplicationData.patient_medication
        }
      });
      return {message: "Triage Application created", status: 200, data: triageApplication};
    } catch (error: any) {
      console.log(error);
      return {message: error, status: 400};
    }
  }
};