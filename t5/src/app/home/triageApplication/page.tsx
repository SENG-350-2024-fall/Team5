"use client";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { OFFICE } from "../../../interfaces/office";
import getHelpController from "../../controllers/getHelpController";
import { TRIAGE_APPLICATION } from "@/interfaces/triageApplication";
import TriageController from "@/app/controllers/TriageController";

export default function Page() {


  return (
    <div>
      <h1>Triage Application Page</h1>
      <Button onClick={()=>null}>
        Show Treatment and Office
      </Button>
    </div>
  );
}
