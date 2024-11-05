"use client";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { OFFICE } from '../../../interfaces/office';
import { getTreatmentAndOffice } from '../../controllers/getHelpController'; // Import the controller
import { mockTriageApplication } from "../../../mockedData/TriageApplication";


export default function Page() {
  const [selectedOffice, setSelectedOffice] = useState<OFFICE | null>(null);
  const [treatment, setTreatment] = useState<string | null>(null);

  const fetchTreatmentAndOffice = () => {
    const { treatment, office } = getTreatmentAndOffice();
    setTreatment(treatment);
    setSelectedOffice(office);
  };

  return (
    <div>
      <h1>Triage Application Page</h1>
      <Button onClick={fetchTreatmentAndOffice}>Show Treatment and Office</Button>

      {treatment && (
        <div>
          <h3>Recommended Treatment</h3>
          <p>{treatment}</p>
        </div>
      )}

      {selectedOffice && (
        <div>
          <h3>Office Details</h3>
          <p><strong>Name:</strong> {selectedOffice.name}</p>
          <p><strong>Type:</strong> {selectedOffice.office_type}</p>
          <p><strong>Location:</strong> {selectedOffice.location}</p>
          <p><strong>Days Open:</strong> {selectedOffice.days_open || 'N/A'}</p>
          <p><strong>Hours Open:</strong> {selectedOffice.hours_open || 'N/A'}</p>
          <p><strong>Phone Number:</strong> {selectedOffice.phone_number || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

/*
export default function Page() {
  const [selectedOffice, setSelectedOffice] = useState<OFFICE | null>(null);
  const [treatment, setTreatment] = useState<string | null>(null);

  // Fetch treatment and office based on mock data
  const fetchTreatmentAndOffice = () => {
    const { treatment, office } = getTreatmentAndOffice(mockTriageApplication); // Pass mock data
    setTreatment(treatment);
    setSelectedOffice(office);
  };

  return (
    <div>
      <h1>Triage Application Page</h1>
      <Button onClick={fetchTreatmentAndOffice}>Show Treatment and Office</Button>

      {treatment && (
        <div>
          <h3>Recommended Treatment</h3>
          <p>{treatment}</p>
        </div>
      )}

      {selectedOffice && (
        <div>
          <h3>Office Details</h3>
          <p><strong>Name:</strong> {selectedOffice.name}</p>
          <p><strong>Type:</strong> {selectedOffice.office_type}</p>
          <p><strong>Location:</strong> {selectedOffice.location}</p>
          <p><strong>Days Open:</strong> {selectedOffice.days_open || 'N/A'}</p>
          <p><strong>Hours Open:</strong> {selectedOffice.hours_open || 'N/A'}</p>
          <p><strong>Phone Number:</strong> {selectedOffice.phone_number || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}
  */