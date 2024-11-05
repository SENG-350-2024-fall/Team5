// app/api/getTreatment/route.ts
import { NextResponse } from 'next/server';
import { offices } from '../../../mockedData/offices'; // Adjust path as necessary
import { EDVisitStrategy, GPVisitStrategy, HomeCareStrategy, HotlineStrategy } from '../../../mockedData/treatmentStrategies';

// Define the available strategies
const strategies = [
  { type: 'Emergency Room', strategy: new EDVisitStrategy() },
  { type: 'Clinic', strategy: new GPVisitStrategy() },
  { type: 'Pharmacy', strategy: new HomeCareStrategy() },
  { type: 'Call Center', strategy: new HotlineStrategy() }
];

export async function GET() {
  // Choose a random strategy
  const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];

  // Filter offices by the selected strategy type
  const matchingOffices = offices.filter(office => office.office_type === randomStrategy.type);

  // Select a random office from matching offices
  const selectedOffice = matchingOffices.length
    ? matchingOffices[Math.floor(Math.random() * matchingOffices.length)]
    : null;

  return NextResponse.json({
    treatment: randomStrategy.strategy.determineAction(),
    office: selectedOffice || { name: 'No matching office available', type: randomStrategy.type }
  });
}
