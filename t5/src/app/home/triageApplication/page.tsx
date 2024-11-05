"use client";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { OFFICE } from '../../../interfaces/office';

export default function Page() {
  const [selectedOffice, setSelectedOffice] = useState<OFFICE | null>(null);
  const [treatment, setTreatment] = useState<string | null>(null);

  const fetchTreatmentAndOffice = async () => {
    try {
      const response = await fetch('/api/getHelp');
      const data = await response.json();
      setTreatment(data.treatment);
      setSelectedOffice(data.office);
    } catch (error) {
      console.error("Failed to fetch treatment and office:", error);
    }
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

