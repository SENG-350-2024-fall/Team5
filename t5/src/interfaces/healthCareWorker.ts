export interface HEALTH_CARE_WORKER {
  id: Number;
  first_name: String | null;
  last_name: String;
  password: String;
  username: String;
  role: "NURSE" | "DOCTOR" | "ADMIN" | "HOTLINE WORKER" | "PHARMACIST";
}
