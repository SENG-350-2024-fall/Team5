// Import the interface
import { TreatmentStrategy } from '../interfaces/treatmentStrategies';

// Emergency Room Strategy
export class EDVisitStrategy implements TreatmentStrategy {
  determineAction(): string {
    return "Patient should visit the Emergency Room for urgent care.";
  }
}

// General Practitioner Strategy
export class GPVisitStrategy implements TreatmentStrategy {
  determineAction(): string {
    return "Patient should schedule a visit with a General Practitioner for further assessment.";
  }
}

// Home Care Strategy
export class HomeCareStrategy implements TreatmentStrategy {
  determineAction(): string {
    return "Patient should take over-the-counter medication and rest at home.";
  }
}

// Hotline Strategy
export class HotlineStrategy implements TreatmentStrategy {
  determineAction(): string {
    return "Patient should contact a medical hotline for advice on next steps.";
  }
}
