import { TreatmentStrategy } from '../interfaces/treatmentStrategies';

// Emergency Room Strategy
export class EDVisitStrategy implements TreatmentStrategy {
  office_type = 'Emergency room';
  Strat(): string {
    return "Patient should visit the Emergency Room for urgent care.";
  }
}

// General Practitioner Strategy
export class GPVisitStrategy implements TreatmentStrategy {
  office_type = 'Clinic';
  Strat(): string {
    return "Patient should schedule a visit with a General Practitioner for further assessment.";
  }
}

// Home Care Strategy
export class HomeCareStrategy implements TreatmentStrategy {
  office_type = 'Pharmacy';
  Strat(): string {
    return "Patient should take over-the-counter medication and rest at home.";
  }
}

// Hotline Strategy
export class HotlineStrategy implements TreatmentStrategy {
  office_type = 'Call center'
  Strat(): string {
    return "Patient should contact a medical hotline for advice on next steps.";
  }
}
