"use client";
import React, { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import { SYMPTOMBODYLOCATIONS, SYMPTOMPAINSCALE } from "../constants/globals";
import TriageController from "@/app/controllers/TriageController";

interface SymptomProps {
  tid: number;
  callback: (sid: number) => void;
}

const Symptom = ({ tid, callback }: SymptomProps) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [painScale, setPainScale] = useState<
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
  >(undefined);
  const [otherInfo, setOtherInfo] = useState<string | undefined>(undefined);
  const [bodyLocation, setBodyLocation] = useState<
    | "HEAD"
    | "NECK"
    | "SHOULDER"
    | "ARM"
    | "ELBOW"
    | "FOREARM"
    | "HAND"
    | "FINGER"
    | "CHEST"
    | "ABDOMEN"
    | "HIP"
    | "THIGH"
    | "KNEE"
    | "LEG"
    | "FOOT"
    | "TOE"
    | "OTHER"
    | undefined
  >(undefined);
  const [timeStarted, setTimeStarted] = useState<string | undefined>(undefined);
  const [disabeled, setDisabeled] = useState<boolean>(true);

  useEffect(() => {
    if (name && bodyLocation && timeStarted) {
      setDisabeled(false);
    } else {
      setDisabeled(true);
    }
  }, [name, painScale, bodyLocation, timeStarted]);

  const createSymptom = async (
    name: string | undefined,
    painScale: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined,
    timeStarted: string | undefined,
    bodyLocation:
      | "HEAD"
      | "NECK"
      | "SHOULDER"
      | "ARM"
      | "ELBOW"
      | "FOREARM"
      | "HAND"
      | "FINGER"
      | "CHEST"
      | "ABDOMEN"
      | "HIP"
      | "THIGH"
      | "KNEE"
      | "LEG"
      | "FOOT"
      | "TOE"
      | "OTHER"
      | undefined,
    otherInfo?: string,
  ) => {
    try {
      if (name && painScale && timeStarted && bodyLocation) {
        const timeStartedDate = timeStarted
          ? new Date(timeStarted)
          : new Date();
        const response = await TriageController.addSymptomToTriageApplication(
          tid,
          name,
          painScale,
          otherInfo,
          timeStartedDate,
          bodyLocation,
        );
        if (response.status === 200) {
          console.log(response.message);
          if (response.data) {
            console.log(response.data);
            callback(response.data.sid);
          }
        } else {
          alert(response.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Symptom</h1>
      <label>
        Symptom Name:
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
      </label>
      <div>
        <Dropdown
          className="absolute"
          label={
            painScale
              ? `Selected Pain: ${painScale} (0 no pain 10 unbearable pain)`
              : "Select Pain Scale (0 no pain 10 unbearable pain)"
          }
          dismissOnClick={true}
        >
          {SYMPTOMPAINSCALE.map((item, index) => (
            <Dropdown.Item
              key={index}
              onClick={() =>
                setPainScale(item as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10)
              }
            >
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
      <div>
        <Dropdown
          className="absolute"
          label={bodyLocation || "Select Body Location"}
          dismissOnClick={true}
        >
          {SYMPTOMBODYLOCATIONS.map((item, index) => (
            <Dropdown.Item
              key={index}
              onClick={() =>
                setBodyLocation(
                  item as
                    | "HEAD"
                    | "NECK"
                    | "SHOULDER"
                    | "ARM"
                    | "ELBOW"
                    | "FOREARM"
                    | "HAND"
                    | "FINGER"
                    | "CHEST"
                    | "ABDOMEN"
                    | "HIP"
                    | "THIGH"
                    | "KNEE"
                    | "LEG"
                    | "FOOT"
                    | "TOE"
                    | "OTHER",
                )
              }
            >
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
      <div>
        <label>
          Date Started (YYYY-MM-DD):
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setTimeStarted(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Other Information:
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setOtherInfo(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <button
          disabled={disabeled}
          onClick={() =>
            createSymptom(name, painScale, otherInfo, bodyLocation, timeStarted)
          }
        >
          Confirm Symptom
        </button>
      </div>
    </div>
  );
};

export default Symptom;
