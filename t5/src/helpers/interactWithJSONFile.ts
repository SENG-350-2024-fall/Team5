import fs from "fs";

import { TRIAGE_APPLICATION, SYMPTOM } from "../interfaces/triageApplication";
import { PATIENT } from "../interfaces/patient";
import { HEALTH_CARE_WORKER } from "../interfaces/healthCareWorker";
import { OFFICE } from "../interfaces/office";

interface Data {
  [key: string]: any;
}

export const writeToJsonFile = (filePath: string, data: Data): void => {
  const jsonData = JSON.stringify(data, null, 2); // Pretty-print with 2-space indentation
  fs.writeFile(filePath, jsonData, "utf8", (err) => {
    if (err) {
      console.error("Error writing to JSON file", err);
      return;
    }
    console.log("Successfully wrote to JSON file");
  });
};

/*
    Usage:
    const data: Data = {
    name: "John Doe",
    age: 30,
    location: "New York"
    };
    writeToJsonFile("data.json", data);
*/

export const loadJsonIntoObject = (
  filePath: string,
):
  | Array<TRIAGE_APPLICATION>
  | Array<SYMPTOM>
  | Array<HEALTH_CARE_WORKER>
  | Array<OFFICE>
  | Array<PATIENT>
  | null => {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8"); // Synchronously read file content
    const data = JSON.parse(jsonData) as
      | Array<TRIAGE_APPLICATION>
      | Array<SYMPTOM>
      | Array<HEALTH_CARE_WORKER>
      | Array<OFFICE>
      | Array<PATIENT>; // Parse JSON content into an object
    return data;
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    return null;
  }
};

/*
Usage:
const filePath = "data.json";
const dataObject = loadJsonIntoObject(filePath);

if (dataObject) {
  console.log("Data loaded into object:", dataObject);
}
*/
