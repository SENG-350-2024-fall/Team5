<<<<<<< HEAD
=======

>>>>>>> origin/main
import { offices } from '../../mockedData/offices';
import { OFFICE } from '../../interfaces/office';
<<<<<<< HEAD
import { SYMPTOM, TRIAGE_APPLICATION } from '../../interfaces/triageApplication';
import { strategies } from '../../constants/painLevels';
//import { getTriageApplicationById } from './TriageController';
=======
import { TRIAGE_APPLICATION } from '../../interfaces/triageApplication';
import { strategies } from '../../constants/strategies';
>>>>>>> origin/main

const TriageApplicationFile = "triageApplication.json";

<<<<<<< HEAD
// Helper function to calculate max pain level
function getMaxPainLevel(symptoms: Array<SYMPTOM> | undefined): number {
  if (!symptoms || symptoms.length === 0) return 0;
  return Math.max(...symptoms.map((symptom) => symptom.pain_scale));
}

// Helper function to find the corresponding strategy based on the max pain level
function getStrategyForPainLevel(maxPainLevel: number) {
  return (
    strategies.find((strategy) => maxPainLevel >= strategy.minPainLevel) ||
    strategies[strategies.length - 1] // Default to the last strategy if none match
  );
}
=======
export function getTreatmentAndOffice(triageApplication: TRIAGE_APPLICATION): { treatment: string; office: OFFICE } {
  // Calculate the highest pain level reported in symptoms
  const maxPainLevel = triageApplication.symptoms
    ? Math.max(
        ...triageApplication.symptoms.map((symptom) => symptom.pain_scale),
      )
    : 0;

  // Select the first strategy where `maxPainLevel` is greater than or equal to `minPainLevel`
  const selectedStrategy = strategies.find(strategy => maxPainLevel >= strategy.minPainLevel) || strategies[strategies.length - 1];

  // Filter for offices that match the selected strategy's `office_type`
  const matchingOffices = offices.filter((office) => office.office_type === selectedStrategy.strategy.office_type);
>>>>>>> origin/main

// Helper function to filter offices based on the selected strategy
function getMatchingOffices(strategy: typeof strategies[0]) {
  return offices.filter((office) => office.office_type === strategy.strategy.office_type);
}

// Helper function to select a random office or provide a default if none match
function selectRandomOffice(matchingOffices: OFFICE[], strategy: typeof strategies[0]): OFFICE {
  if (matchingOffices.length === 0) {
    return {
      name: "No matching office available",
      office_type: "None",
      location: "",
      days_open: "",
      hours_open: "",
      phone_number: "",
      ave_wait_time: null,
    };
  }
  return matchingOffices[Math.floor(Math.random() * matchingOffices.length)];
}

// Main function to get treatment and office
export function getTreatmentAndOffice(triageApplication: TRIAGE_APPLICATION): { treatment: string; office: OFFICE } {
  const maxPainLevel = getMaxPainLevel(triageApplication.symptoms); // Calculate max pain level
  const selectedStrategy = getStrategyForPainLevel(maxPainLevel); // Get the corresponding strategy
  const matchingOffices = getMatchingOffices(selectedStrategy); // Get offices that match the strategy
  const selectedOffice = selectRandomOffice(matchingOffices, selectedStrategy); // Select random office

  return {
    treatment: selectedStrategy.strategy.Strat(), // Get the treatment from the strategy
    office: selectedOffice, // Return the selected office
  };
}
