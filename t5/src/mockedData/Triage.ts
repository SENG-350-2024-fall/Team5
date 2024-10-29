import { TRIAGE_APPLICATION, SYMPTOM } from "../interfaces/triageApplication";

export let HEADACHE_SYMPTOM: SYMPTOM = {
  sid: 1,
  name: "Headache",
  pain_scale: 5,
  other_info: "I have a headache",
  time_started: new Date("September 17, 2024"),
  body_location: "HEAD",
};

export let STOMACH_ACHE_SYMPTOM: SYMPTOM = {
  sid: 2,
  name: "Stomach ache",
  pain_scale: 7,
  other_info: "I ate purple beef",
  time_started: new Date("October 28, 2024"),
  body_location: "ABDOMEN",
};

export let BROKEN_FINGER_SYMPTOM: SYMPTOM = {
  sid: 3,
  name: "Broken Finger",
  pain_scale: 9,
  other_info: "I fell off my bike",
  time_started: new Date("October 28, 2024"),
  body_location: "FINGER",
};

export let DEMO_SYMPTOM: SYMPTOM = {
  sid: 4,
  name: "",
  pain_scale: 0,
  other_info: "",
  time_started: new Date(),
  body_location: "OTHER",
};

export let TA1: TRIAGE_APPLICATION = {
  tid: 1,
  pid: 1,
  time_created: new Date(),
  status: "PENDING",
  patient_history: "I have a headache",
  patient_medication: "I take paracetamol",
  symptoms: [HEADACHE_SYMPTOM],
};

export let TA2: TRIAGE_APPLICATION = {
  tid: 2,
  pid: 2,
  time_created: new Date(),
  status: "IN_PROGRESS",
  patient_history: "I have a stomach ache and fell off my bike",
  patient_medication: "I took tums and advil. I also take cortisol",
  symptoms: [STOMACH_ACHE_SYMPTOM, BROKEN_FINGER_SYMPTOM],
};

export let TRIAGEDEMOAPPLICATION: TRIAGE_APPLICATION = {
  tid: 3,
  pid: 3,
  time_created: new Date(),
  status: "IN_PROGRESS",
  patient_history: "",
  patient_medication: "",
  symptoms: [],
};

export let TRIAGE_APPLICATIONS: Array<TRIAGE_APPLICATION> = [
  TA1,
  TA2,
  TRIAGEDEMOAPPLICATION,
];
