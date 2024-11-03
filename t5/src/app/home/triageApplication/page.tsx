"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
//import TriageController from "../../controllers/TriageController";
//const triageController = new TriageController();
import { offices } from '../../../mockedData/offices'; // Adjust the path as necessary
import { OFFICE } from '../../../interfaces/office'; // Adjust path as needed



export default function Page() {
  const [selectedOffice, setSelectedOffice] = useState<OFFICE | null>(null);

  const handleOfficeClick = (office: OFFICE) => {
    setSelectedOffice(office);
  };

  return (
    <div>
      <h1>Triage Application Page</h1>
      <h2>Offices</h2>
      <div>
        {offices.map((office, index) => (
          <div key={index}>
            <Button onClick={() => handleOfficeClick(office)}>
              {office.name}
            </Button>
          </div>
        ))}
      </div>

      {selectedOffice && (
        <div>
          <h3>Office Details</h3>
          <p><strong>Name:</strong> {selectedOffice.name}</p>
          <p><strong>Location:</strong> {selectedOffice.location}</p>
          <p><strong>Days Open:</strong> {selectedOffice.days_open || 'N/A'}</p>
          <p><strong>Hours Open:</strong> {selectedOffice.hours_open || 'N/A'}</p>
          <p><strong>Phone Number:</strong> {selectedOffice.phone_number || 'N/A'}</p>
          <p><strong>Average Wait Time:</strong> {selectedOffice.ave_wait_time ? selectedOffice.ave_wait_time.toString() : 'N/A'}</p>
        </div>
      )}
    </div>
  );
}