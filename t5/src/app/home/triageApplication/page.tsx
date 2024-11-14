"use client";

import { Button } from "flowbite-react";
import React, { useState } from "react";

export default function Page() {
  const [pidInput, setPidInput] = useState<string>(""); // State for the input field
  const [treatment, setTreatment] = useState<string | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<any | null>(null); // Replace `any` with your actual office type
  const [error, setError] = useState<string | null>(null);

  const fetchTreatmentAndOffice = async () => {
    const pid = Number(pidInput);
    if (isNaN(pid) || pid <= 0) {
      setError("Please enter a valid numeric PID.");
      return;
    }
  
    console.log("Making API call with PID:", pid); // Log to see if the function is being triggered
    try {
      const response = await fetch(`/api/getAppByPid?pid=${pid}`);
      console.log("API response:", response); // Log the response object
      const result = await response.json();
      console.log("API result:", result); // Log the parsed result
  
      if (response.ok) {
        setTreatment(result.data.treatment);
        setSelectedOffice(result.data.office);
        setError(null);
      } else {
        setError(result.message || "Failed to fetch data.");
        setTreatment(null);
        setSelectedOffice(null);
      }
    } catch (err) {
      console.error("Error fetching treatment and office:", err);
      setError("An error occurred while fetching data.");
      setTreatment(null);
      setSelectedOffice(null);
    }
  };
  
  return (
    <div>
      <h1>Triage Application Page</h1>

      {/* PID input field */}
      <div>
        <label htmlFor="pidInput">Enter PID:</label>
        <input
          type="text"
          id="pidInput"
          value={pidInput}
          onChange={(e) => setPidInput(e.target.value)}
          placeholder="Enter Patient ID"
        />
      </div>

      {/* Fetch data button */}
      <Button onClick={fetchTreatmentAndOffice}>
        Fetch Treatment and Office
      </Button>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Treatment display */}
      {treatment && (
        <div>
          <h3>Recommended Treatment</h3>
          <p>{treatment}</p>
        </div>
      )}

      {/* Office details display */}
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
            <strong>Phone Number:</strong> {selectedOffice.phone_number || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
}
