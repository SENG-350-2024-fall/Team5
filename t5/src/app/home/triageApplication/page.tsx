"use client";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { OFFICE } from '../../../interfaces/office'; // Adjust path as needed

export default function Page() {
  const [selectedOffice, setSelectedOffice] = useState<OFFICE | null>(null);

  const fetchSelectedOffice = async () => {
    try {
      const response = await fetch('/api/getHelp');
      const data = await response.json();
      setSelectedOffice(data);
    } catch (error) {
      console.error("Failed to fetch office:", error);
    }
  };

  return (
    <div>
      <h1>Triage Application Page</h1>
      <Button onClick={fetchSelectedOffice}>Show Treatment</Button>

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
