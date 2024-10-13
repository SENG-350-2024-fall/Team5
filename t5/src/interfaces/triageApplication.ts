import { PATIENT } from "./patient";

export interface TRIAGE_APPLICATION {
  tid: Number;
  time_created: Date;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  patient: PATIENT;
  patient_history: String | null;
  patient_medication: String | null;
  symptoms: Array<SYMPTOM>;
}

export interface SYMPTOM {
  sid: Number;
  name: String;
  pain_scale: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  description: String | "" | null;
  time_started: Date | null;
  body_location:
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
    | ""
    | null;
}
