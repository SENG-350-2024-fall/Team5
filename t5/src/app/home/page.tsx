"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { OFFICE } from "../../interfaces/office";
import getHelpController from "../controllers/getHelpController";
import { TRIAGE_APPLICATION } from "@/interfaces/triageApplication";
import TriageController from "@/app/controllers/TriageController";

export default function Page() {
  const router = useRouter();
  const [selectedOffice, setSelectedOffice] = useState<OFFICE | null>(null);
  const [treatment, setTreatment] = useState<string | null>(null);

  const navigateToTriageApplication = () => {
    router.push("/home/triageApplication"); // Path to the Triage Application page
  };

  const fetchTreatmentAndOffice = async () => {
    const triageApplication = await TriageController.getAllTriageApplications(); // Call the controller method
    const { treatment, office } = await getHelpController.getTreatmentAndOffice(
      triageApplication.data as TRIAGE_APPLICATION,
    ); // Pass mock data
    setTreatment(treatment);
    setSelectedOffice(office);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={navigateToTriageApplication}>
        Go to Triage Applications
      </Button>
      <div>
        <h1>Triage Application Page</h1>
        <Button onClick={fetchTreatmentAndOffice}>
          Show Treatment and Office
        </Button>

        {treatment && (
          <div>
            <h3>Recommended Treatment</h3>
            <p>{treatment}</p>
          </div>
        )}

        {selectedOffice && (
          <div>
            <h3>Office Details</h3>
            <p>
              <strong>Name:</strong> {selectedOffice.name}
            </p>
            <p>
              <strong>Type:</strong> {selectedOffice.office_type}
            </p>
            <p>
              <strong>Location:</strong> {selectedOffice.location}
            </p>
            <p>
              <strong>Days Open:</strong> {selectedOffice.days_open || "N/A"}
            </p>
            <p>
              <strong>Hours Open:</strong> {selectedOffice.hours_open || "N/A"}
            </p>
            <p>
              <strong>Phone Number:</strong>{" "}
              {selectedOffice.phone_number || "N/A"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
