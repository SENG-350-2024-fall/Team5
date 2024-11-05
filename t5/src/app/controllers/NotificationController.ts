import * as fs from 'fs';
import { loadJsonIntoObject } from './interactWithJSONFile';

// Patient Interface
export interface Patient {
    pid: number;
    first_name: string;
    last_name: string;
    DOB: string;
    password: string;
    PHN: string;
    address: string;
}

// Triage Application Interface
export interface TriageApplication {
    tid: number;
    pid: number;
    time_created: string;
    status: "READY" | "PENDING" | string;
    patient_history: string;
    patient_medication: string;
    symptoms: Symptom[];
}

// Symptom Interface
export interface Symptom {
    sid: number;
    name: string;
    pain_scale: number;
    other_info: string;
    time_started: string;
    body_location: string;
}

// Triage Data Interface
export interface TriageData {
    triage_applications: TriageApplication[];
}

// Patient Data Interface
export interface PatientData {
    patients: Patient[];
}

// Observer Interface
export interface Observer {
    update(): void;
}

// Observable Interface (Subject)
export interface Observable {
    addObserver(o: Observer): void;
    deleteObserver(o: Observer): void;
    notifyObserver(): void;
}

// TriageNotification Observable
export class TriageNotification implements Observable {
    private observers: Observer[] = [];

    // Availability Tactic: ping() - simulates sending periodic ping requests to the ED load status external service, checking that it works by retrieving load status data 
    public ping() {
        setInterval(() => {
            // Generate a random wait time between 1 and 3 hours to simulate getting ED load status from external serice
            const waitTime = Math.floor(Math.random() * 3) + 1;
            console.log(`Current ED wait time is approximately ${waitTime} hour(s).`);
        }, 5 * 1000);
    }

    // Will be updated such that when the triage status of an application is changed, observer (patient) will be notified
    public setNotification() {
        this.notifyObserver();
    }

    // Adds observers to notification list
    public addObserver(o: Observer) {
        if(!this.observers.includes(o)) {   // Prevents the same patient from being added again to the observer list
            this.observers.push(o)
        }
    }

    // When user needs to be removed as an oberver
    public deleteObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    // Notifies all observers of status changes
    public notifyObserver() {
        for(let observer of this.observers) {
            observer.update();
        }
    }
}

// Observer class for notifications
export class NotificationDisplay implements Observer {
    private observable: Observable;
    private observerID: number;
    private firstName: string;
    private lastName: string;
    private lastStatus: string | null = null; // Add this to track the last notified status

    // Holds necessary patient info to be an observer
    constructor(triageNotification: Observable, patient: Patient) {
        this.observable = triageNotification;
        this.observerID = patient.pid;
        this.firstName = patient.first_name;
        this.lastName = patient.last_name;
        triageNotification.addObserver(this);
    }
    
    public async update() {
        // Logic to notify patient that their appointment is READY/PENDING
        try {
            const triageData: TriageData = await loadJsonIntoObject('./TriageApplications.json');
                // Iterate through each triage application in application DB
                for(let j = 0; j < triageData.triage_applications.length; j++) {
                    const triage = triageData.triage_applications[j];
                    //Check if observer id matches application pid
                    if(this.observerID == triage.pid) {
                            if (triage.status !== this.lastStatus) {
                                this.lastStatus = triage.status; // Update last known status
                            console.log(`\nHello, ${this.firstName} ${this.lastName}, your triage status is ${triage.status}.`);
                            if (triage.status === 'READY') {
                                console.log('Please visit the emergency department at your convenience or dial 911.\n');
                            } else {
                                console.log('Please wait until your application has been evaluated to receive an appointment time.\n');
                            }
                        }
                        break;
                    }
                }
        } catch (error) {
            console.error('Unable load Json file into object');
        }
    }
}