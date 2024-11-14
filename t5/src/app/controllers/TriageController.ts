"use client";

import { TRIAGEAPPLICATIONSTATUS } from "../../constants/globals";
import {
  TRIAGE_APPLICATION,
  SYMPTOM,
} from "../../interfaces/triageApplication";

import { fetchData, postData } from "../../helpers/utilities";

const TriageApplicationFile = "triageApplication.json";

export default class TriageController {
  private static async generateTID(
    existingTriageApplications: TRIAGE_APPLICATION[],
  ) {
    const maxTid = existingTriageApplications.reduce(
      (max, triageApplication) => Math.max(max, triageApplication.tid),
      0,
    );
    return maxTid + 1; // Increment the max TID by 1
  }

  public static async getTriageApplicationById(tid: number) {
    try {
      const triageApplications = await fetchData(TriageApplicationFile);
      let triageApplication;
      if (!triageApplications) {
        return { message: "No Triage Applications in database", status: 404 };
      }
      for (const TA of triageApplications.triage_applications) {
        if (TA.tid === tid) {
          triageApplication = TA;
          break;
        }
      }
      if (!triageApplication) {
        return { message: "Triage Application not found", status: 404 };
      }
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
    TID: number,
    pid: number,
    time_created: Date,
    patient_history?: string | null,
    patient_medication?: string | null,
  ) {
    const status = TRIAGEAPPLICATIONSTATUS;
    try {
      let existingData = await fetchData(TriageApplicationFile);
      const TID = await this.generateTID(existingData.triage_applications);
      const triageApplicationData: TRIAGE_APPLICATION = {
        tid: TID,
        pid: pid,
        time_created: time_created,
        status: status,
        patient_history: patient_history,
        patient_medication: patient_medication,
        symptoms: [],
      };
      if (existingData) {
        existingData.triage_applications.push(triageApplicationData);
        await postData(TriageApplicationFile, existingData);
      } else {
        await postData(TriageApplicationFile, {
          triage_applications: triageApplicationData,
        });
      }
      return {
        message: "Triage Application created",
        status: 200,
        data: triageApplicationData,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }

  public static async updateSymptom(
    sid: number,
    name?: string,
    pain_scale?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    other_info?: string,
    time_started?: Date,
    body_location?:
      | "HEAD"
      | "NECK"
      | "SHOULDER"
      | "ARM"
      | "ELBOW"
      | "FOREARM"
      | "HAND"
      | "FINGER"
      | "CHEST"
      | "ABDOMEN"
      | "HIP"
      | "THIGH"
      | "KNEE"
      | "LEG"
      | "FOOT"
      | "TOE"
      | "OTHER",
  ) {
    try {
      let triageApplications = await fetchData(TriageApplicationFile);
      let symptom;
      for (let TA of triageApplications.triage_applications) {
        if (TA.symptoms) {
          for (let s of TA.symptoms) {
            if (s.sid === sid) {
              symptom = s;
              s.sid = sid;
              s.name = name ? name : s.name;
              s.pain_scale = pain_scale ? pain_scale : s.pain_scale;
              s.other_info = other_info ? other_info : s.other_info;
              s.time_started = time_started ? time_started : s.time_started;
              s.body_location = body_location ? body_location : s.body_location;
              break;
            }
          }
          if (symptom) {
            break;
          }
        }
      }
      if (!symptom) {
        return { message: "Symptom not found", status: 404 };
      }
      await postData(TriageApplicationFile, triageApplications);
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
      const symptomData = { ...symptom, time_started: time_started };
      let triageApplications = await fetchData(TriageApplicationFile);
      let triageApplication;
      for (let TA of triageApplications.triage_applications) {
        if (TA.tid === tid) {
          if (!TA.symptoms) {
            TA.symptoms = [];
          }
          TA.symptoms.push(symptomData);
          triageApplication = TA;
          break;
        }
      }
      if (!triageApplication) {
        return { message: "Triage Application not found", status: 404 };
      }
      await postData(TriageApplicationFile, triageApplications);
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
      let triageApplications = await fetchData(TriageApplicationFile);
      let triageApplication;
      for (let TA of triageApplications.triage_applications) {
        if (TA.tid === tid) {
          TA.status = status;
          triageApplication = TA;
          break;
        }
      }
      if (!triageApplication) {
        return { message: "Triage Application not found", status: 404 };
      }
      await postData(TriageApplicationFile, triageApplications);
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
      let triageApplications = await fetchData(TriageApplicationFile);
      let symptom;
      for (let TA of triageApplications.triage_applications) {
        if (TA.symptoms) {
          for (let s of TA.symptoms) {
            if (s.sid === sid) {
              symptom = s;
              break;
            }
          }
          if (symptom) {
            break;
          }
        }
      }
      if (!symptom) {
        return { message: "Symptom not found", status: 404 };
      }
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
      let triageApplications = await fetchData(TriageApplicationFile);
      let symptom;
      for (let TA of triageApplications.triage_applications) {
        if (TA.symptoms) {
          for (let s of TA.symptoms) {
            if (s.sid === sid) {
              symptom = s;
              break;
            }
          }
          const newSymptoms: SYMPTOM[] = TA.symptoms.filter(
            (s: SYMPTOM) => s.sid !== sid,
          );
          TA.symptoms = newSymptoms;
          if (symptom) {
            break;
          }
        }
      }
      if (!symptom) {
        return { message: "Symptom not found", status: 404 };
      }
      await postData(TriageApplicationFile, triageApplications);
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
      const triageApplications = (
        await TriageController.getTriageApplicationById(tid)
      ).data as TRIAGE_APPLICATION;
      if (!triageApplications) {
        return { message: "No Triage Applications in database", status: 404 };
      }

      const symptoms = triageApplications.symptoms;
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
      let triageApplications = await fetchData(TriageApplicationFile);
      let triageApplication;
      for (let TA of triageApplications.triage_applications) {
        if (TA.tid === tid) {
          triageApplication = TA;
          break;
        }
      }
      if (!triageApplication) {
        return { message: "Triage Application not found", status: 404 };
      }
      const newTriageApplications: TRIAGE_APPLICATION[] =
        triageApplications.triage_applications.filter(
          (TA: TRIAGE_APPLICATION) => TA.tid !== tid,
        );
      await postData(TriageApplicationFile, {
        triage_applications: newTriageApplications,
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
