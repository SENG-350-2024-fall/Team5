"use client";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";
import TriageController from "@/app/controllers/TriageController";
import Symptom from "@/components/symptom";

export default function Page() {
  const router = useRouter();
  const [timeCreated, setTimeCreated] = useState<Date | undefined>(undefined);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [patientMedication, setPatientMedication] = useState<
    string | undefined
  >(undefined);
  const [patientHistory, setPatientHistory] = useState<string | undefined>(
    undefined,
  );
  const [sids, setSids] = useState<number[]>([]);
  const [tid, setTid] = useState<number | undefined>(4);

  useEffect(() => {
    async function CreateTriageApplication() {
      const creationDate = new Date();
      setTimeCreated(creationDate);
      setStatus("PENDING");
      const response = await TriageController.createTriageApplication(
        1,
        creationDate,
      );
      if (response.status === 200) {
        setTid(response.data);
      }
    }
    CreateTriageApplication();
  }, []); //Runs once on page load

  async function SubmitTriageApplication() {
    if (tid) {
      const response = await TriageController.updateTriageApplicationById(
        tid,
        patientMedication,
        patientHistory,
      );
      if (response.status === 200) {
        router.push("/home");
      } else {
        alert(response.message);
      }
    } else {
      alert("Triage Application not updated because tid is not set");
    }
  }

  return (
    <div>
      <h1>Triage Application Page</h1>
      <div>
        <label>
          Input any medication you take:
          <input onChange={(e) => setPatientMedication(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Input any relevant medical history:
          <input onChange={(e) => setPatientHistory(e.target.value)} />
        </label>
      </div>
      <div>
        <Button onClick={() => null}>Add Symptom</Button>
      </div>
      <div>
        <Symptom
          tid={tid ?? 4}
          callback={(newSID) => setSids([...sids, newSID])}
        />
      </div>
      <div>
        <Button onClick={SubmitTriageApplication}>
          Submit Triage Application
        </Button>
      </div>
    </div>
  );
}
