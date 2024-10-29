"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TriageController from "../../controllers/TriageController";
const triageController = new TriageController();

export default function Page() {
  return <h1>Triage Application Page</h1>;
}
