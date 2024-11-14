import { TRIAGE_APPLICATION } from "../interfaces/triageApplication";

export const mockTriageApplication: TRIAGE_APPLICATION = {
  tid: 1,
  pid: 123,
  time_created: new Date("2024-11-01T10:30:00Z"),
  status: "PENDING",
  patient_history: "No previous medical history",
  patient_medication: "Ibuprofen",
  symptoms: [
    {
      sid: 1,
      name: "Headache",
      pain_scale: 5,
      other_info: "Throbbing pain that started an hour ago",
      time_started: new Date("2024-11-01T09:30:00Z"),
      body_location: "HEAD",
    },
    {
      sid: 2,
      name: "Chest Pain",
      pain_scale: 5,
      other_info: "Sharp pain, especially when breathing",
      time_started: new Date("2024-11-01T09:45:00Z"),
      body_location: "CHEST",
    },
    {
      sid: 3,
      name: "Stomach Ache",
      pain_scale: 4,
      other_info: "Cramping pain after eating",
      time_started: new Date("2024-11-01T10:00:00Z"),
      body_location: "ABDOMEN",
    },
  ],
};
