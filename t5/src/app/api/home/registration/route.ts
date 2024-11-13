// src/app/api/home/register/route.ts
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import {PATIENT} from '../../../../interfaces/patient';



const patientsFilePath = "src/mockedData/Patients.json";
const loginFilePath = "src/mockedData/Login.json"

// Utility function to generate a new PID
const generatePID = (existingPatients: PATIENT[]) => {
  const maxPid = existingPatients.reduce((max, patient) => Math.max(max, patient.pid), 0);
  return maxPid + 1; // Increment the max PID by 1
};

export async function POST(req: Request) {
  try {
    const newPatient: PATIENT = await req.json();
    const { PHN, password } = newPatient;

    // Read the existing patients data
    const patientsData = await fs.promises.readFile(patientsFilePath, 'utf8');
    const parsedPatientsData = JSON.parse(patientsData);
    const patients = parsedPatientsData.patients || [];

    // Check for duplicate PHN in patients
    const existingPatient = patients.find(patient => patient.PHN === newPatient.PHN);
    if (existingPatient) {
      return NextResponse.json({ message: 'User with this PHN already exists' }, { status: 400 });
    }

    // Generate a new PID for the patient
    newPatient.pid = generatePID(patients);

    // Add the new patient to the list
    patients.push(newPatient);

    // Write the updated patients data back to the JSON file
    await fs.promises.writeFile(patientsFilePath, JSON.stringify({ patients }, null, 2), 'utf8');

    // Now update Login.json with the username and password
    const loginData = await fs.promises.readFile(loginFilePath, 'utf8');
    const parsedLoginData = JSON.parse(loginData);
    const userLogins = parsedLoginData.userLogins || [];

    // Check if the username already exists in login
    const existingLogin = userLogins.find(user => user.username === PHN);
    if (existingLogin) {
      return NextResponse.json({ message: 'Username already taken' }, { status: 400 });
    }
    const username = PHN;
    // Add new login credentials
    userLogins.push({ username, password });

    // Write the updated login data back to the JSON file
    await fs.promises.writeFile(loginFilePath, JSON.stringify({ userLogins }, null, 2), 'utf8');

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 });
  } catch (error) {
    console.error('Error writing data:', error);
    return NextResponse.json({ message: 'Error writing data' }, { status: 500 });
  }
}
