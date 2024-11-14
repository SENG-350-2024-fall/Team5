// Import the OFFICE interface from its location
import { OFFICE } from "../interfaces/office"; // Adjust the path as necessary

// Create an array of offices
export const offices: OFFICE[] = [
  {
    location: "123 Health St",
    days_open: "Monday to Friday",
    hours_open: "9 AM - 5 PM",
    phone_number: "555-1234",
    ave_wait_time: null,
    name: "Main Clinic",
    office_type: "Clinic", // Specify type
  },
  {
    location: "456 Care Rd",
    days_open: "24/7",
    hours_open: null,
    phone_number: "555-5678",
    ave_wait_time: new Date(), // Example date
    name: "City Emergency Room",
    office_type: "Emergency room", // Specify type
  },
  {
    location: "789 Pharmacy Ave",
    days_open: "Monday to Saturday",
    hours_open: "8 AM - 8 PM",
    phone_number: "555-9876",
    ave_wait_time: null,
    name: "Downtown Pharmacy",
    office_type: "Pharmacy", // Specify type
  },
  {
    location: "321 Call Center Blvd",
    days_open: "Monday to Sunday",
    hours_open: "8 AM - 10 PM",
    phone_number: "555-1111",
    ave_wait_time: null,
    name: "Health Call Center",
    office_type: "Call center", // Specify type
  },
];
