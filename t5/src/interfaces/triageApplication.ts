
export interface TRIAGE_APPLICATION {
  tid?: number;
  pid: number;
  time_created: Date;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  patient_history: string | null | undefined;
  patient_medication: string | null | undefined;
  symptoms?: Array<SYMPTOM>;
}

export interface SYMPTOM {
  sid: number;
  name: string;
  pain_scale: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  description: string | "" | null;
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
