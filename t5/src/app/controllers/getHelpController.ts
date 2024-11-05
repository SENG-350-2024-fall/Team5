import { offices } from '../../mockedData/offices';
import { EDVisitStrategy, GPVisitStrategy, HomeCareStrategy, HotlineStrategy } from '../../mockedData/treatmentStrategies';
import { OFFICE } from '../../interfaces/office';

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
