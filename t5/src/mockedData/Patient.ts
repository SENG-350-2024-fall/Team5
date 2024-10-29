import { PATIENT } from '../interfaces/patient';

export const PATIENT1: PATIENT = {
    pid: 1,
    first_name: 'John',
    last_name: 'Doe',
    DOB: new Date('September 17, 2002'),
    password: 'password',
    PHN: '1234567890',
    address: '1234 Elm Street',
};

export const PATIENT2: PATIENT = {
    pid: 2,
    first_name: 'Doe',
    last_name: 'John',
    DOB: new Date('January 13, 1982'),
    password: 'password',
    PHN: '0987654321',
    address: '1234 Markham Road',
};

export let REGISTRATIONDEMOPATIENT: PATIENT = {
    pid: 3,
    first_name: '',
    last_name: '',
    DOB: new Date(),
    password: '',
    PHN: '',
    address: '',
};

export let PATIENTS: Array<PATIENT> = [PATIENT1, PATIENT2, REGISTRATIONDEMOPATIENT];