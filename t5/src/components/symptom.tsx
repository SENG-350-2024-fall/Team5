"use client";
import React, { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import { SYMPTOMBODYLOCATIONS } from "../constants/globals";

interface SymptomProps {}

const Symptom = () => {
  const [name, setName] = useState<string>("");
  const [painScale, setPainScale] = useState<number>(0);
  const [otherInfo, setOtherInfo] = useState<string>("");
  const [bodyLocation, setBodyLocation] = useState<string>("");
  const [timeStarted, setTimeStarted] = useState<string>("");

  return (
    <div>
      <h1>Symptom</h1>
      <Dropdown
        className="absolute"
        label={bodyLocation || "Select Body Location"}
        dismissOnClick={true}
      >
        {SYMPTOMBODYLOCATIONS.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => setBodyLocation(item)}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default Symptom;
