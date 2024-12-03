"use client";

import { fetchData } from "../../helpers/utilities";

const PatientFile = "src/mockedData/Patients.JSON";

export default class PatientController {
  public static async getAllPatients() {
    try {
      const patients = await fetchData(PatientFile);
      if (!patients) {
        return { message: "No Patients in database", status: 404 };
      }
      return {
        message: "Patients found",
        status: 200,
        data: patients,
      };
    } catch (error: any) {
      console.log(error);
      return { message: error, status: 400 };
    }
  }
}
