"use client";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { OFFICE } from "../../../interfaces/office";
import getHelpController from "../../controllers/getHelpController";
import { TRIAGE_APPLICATION } from "@/interfaces/triageApplication";
import TriageController from "@/app/controllers/TriageController";
import Symptom from "@/components/symptom";

export default function Page() {
  const [timeCreated, setTimeCreated] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [patientMedication, setPatientMedication] = useState<string | null>(
    null,
  );
  const [patientHistory, setPatientHistory] = useState<string | null>(null);

  return (
    <div>
      <h1>Triage Application Page</h1>
      <Button onClick={() => null}>Add Symptom</Button>
      <Symptom />
    </div>
  );
}
