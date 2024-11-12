"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const navigateToTriageApplication = () => {
    router.push("/home/triageApplication"); // Path to the Triage Application page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={navigateToTriageApplication}>Go to Triage Applications</Button>
    </div>
  );

}
