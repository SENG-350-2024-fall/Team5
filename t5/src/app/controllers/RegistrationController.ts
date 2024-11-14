// src/controllers/RegistrationController.ts
import { PATIENT } from "../../interfaces/patient";
import { LOGIN } from "../../interfaces/login";
import { fetchData, postData } from "../../helpers/utilities";

const patientsFilePath = "src/mockedData/Patients.json";
const loginFilePath = "src/mockedData/Login.json";

export default class RegistrationController {
  private generatePID(existingPatients: PATIENT[]) {
    const maxPid = existingPatients.reduce(
      (max, patient) => Math.max(max, patient.pid),
      0,
    );
    return maxPid + 1; // Increment the max PID by 1
  }

  private async registerPatient(newPatient: PATIENT) {
    const patientsData = await fetchData(patientsFilePath);
    const patients = patientsData.patients || [];
    console.log("patients: ", patients);
    const existingPatient: PATIENT | undefined = patients.find(
      (patient: PATIENT) => patient.PHN === newPatient.PHN,
    );
    if (existingPatient) {
      return false;
    }
    // Generate a new PID for the patient
    newPatient.pid = this.generatePID(patients);

    // Add the new patient to the list
    patients.push(newPatient);
    return patients;
  }

  private async registerLogin(PHN: String, password: String) {
    const loginData = await fetchData(loginFilePath);
    const userLogins = loginData.userLogins || [];
    console.log("registerLogin: ", userLogins);

    // Check if the username already exists in login
    const existingLogin: LOGIN | undefined = userLogins.find(
      (user: LOGIN) => user.username === PHN,
    );
    if (existingLogin) {
      return false;
    }
    const username = PHN;
    // Add new login credentials
    userLogins.push({ username, password });
    return userLogins;
  }

  public async registerUser(
    first_name: String,
    last_name: String,
    DOB: Date,
    password: String,
    PHN: String,
    address: String | null,
  ) {
    try {
      //creating newPatient object
      const newPatient: PATIENT = {
        pid: 0,
        first_name,
        last_name,
        DOB,
        password,
        PHN,
        address,
      };
      const patients = await this.registerPatient(newPatient);
      if (!patients) {
        return { message: "Patient already exists", status: false };
      }
      const userLogins = await this.registerLogin(
        newPatient.PHN,
        newPatient.password,
      );
      if (!userLogins) {
        return { message: "Username already taken", status: false };
      }
      //dont post data until both checks pass
      await postData(patientsFilePath, patients);
      await postData(loginFilePath, userLogins);
      return { message: "Registration successful", status: true };
    } catch (error) {
      console.log(error);
      return { message: "Failed registering user", status: false };
    }
  }
}
