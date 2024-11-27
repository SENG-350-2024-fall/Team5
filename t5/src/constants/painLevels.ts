import { EDVisitStrategy, GPVisitStrategy, HomeCareStrategy, HotlineStrategy } from './treatmentStrategies';

export const strategies = [
  { minPainLevel: 8, strategy: new EDVisitStrategy() }, // Severe pain
  { minPainLevel: 5, strategy: new GPVisitStrategy() }, // Moderate pain
  { minPainLevel: 3, strategy: new HomeCareStrategy() }, // Mild pain
  { minPainLevel: 0, strategy: new HotlineStrategy() }, // No pain
];
