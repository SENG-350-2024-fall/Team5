import { offices } from '../../mockedData/offices';
import { EDVisitStrategy, GPVisitStrategy, HomeCareStrategy, HotlineStrategy } from '../../mockedData/treatmentStrategies';
import { OFFICE } from '../../interfaces/office';
import { TRIAGE_APPLICATION } from '../../interfaces/triageApplication';

export function getTreatmentAndOffice(): { treatment: string; office: OFFICE } {
  const strategies = [
    { type: 'Emergency room', strategy: new EDVisitStrategy() },
    { type: 'Clinic', strategy: new GPVisitStrategy() },
    { type: 'Pharmacy', strategy: new HomeCareStrategy() },
    { type: 'Call center', strategy: new HotlineStrategy() }
  ];

  const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
  const matchingOffices = offices.filter((office) => office.office_type === randomStrategy.type);

  const selectedOffice = matchingOffices.length
    ? matchingOffices[Math.floor(Math.random() * matchingOffices.length)]
    : { name: 'No matching office available', type: randomStrategy.type, location: '', days_open: '', hours_open: '', phone_number: '', ave_wait_time: 0 };

  return {
    treatment: randomStrategy.strategy.determineAction(),
    office: selectedOffice as OFFICE
  };
}

/*
import { offices } from '../../../mockedData/offices'; // Adjust path as necessary
import { EDVisitStrategy, GPVisitStrategy, HomeCareStrategy, HotlineStrategy } from '../../../strategies/TreatmentStrategies';
import { TRIAGE_APPLICATION } from '../../../interfaces/triageApplication'; // Adjust path as necessary

export function getTreatmentAndOffice(triageApplication: TRIAGE_APPLICATION): { treatment: string; office: OFFICE } {
  // Define strategies based on pain levels
  const strategies = [
    { minPainLevel: 8, strategy: new EDVisitStrategy() },  // Severe pain
    { minPainLevel: 5, strategy: new GPVisitStrategy() },   // Moderate pain
    { minPainLevel: 3, strategy: new HomeCareStrategy() },  // Mild pain
    { minPainLevel: 0, strategy: new HotlineStrategy() }     // No pain
  ];

  // Extract the maximum pain level from the symptoms
  const maxPainLevel = triageApplication.symptoms
    ? Math.max(...triageApplication.symptoms.map(symptom => symptom.pain_scale))
    : 0;

  // Find the appropriate strategy based on maxPainLevel
  const selectedStrategy = strategies.find(strategy => maxPainLevel >= strategy.minPainLevel) || strategies[strategies.length - 1];

  // Filter offices by the selected strategy type
  const matchingOffices = offices.filter((office) => office.office_type === selectedStrategy.strategy.officeType);

  // Select a random office from matching offices
  const selectedOffice = matchingOffices.length
    ? matchingOffices[Math.floor(Math.random() * matchingOffices.length)]
    : { name: 'No matching office available', type: selectedStrategy.strategy.officeType, location: '', days_open: '', hours_open: '', phone_number: '', ave_wait_time: 0 };

  return {
    treatment: selectedStrategy.strategy.determineAction(),
    office: selectedOffice as OFFICE
  };
}
*/