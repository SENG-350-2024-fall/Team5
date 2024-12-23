export interface OFFICE {
  location: String;
  days_open: String | null;
  hours_open: String | null;
  phone_number: String | null;
  ave_wait_time: Date | null;
  name: String;
  office_type:
    | "Call center"
    | "Pharmacy"
    | "Clinic"
    | "Emergency room"
    | "None";
}
