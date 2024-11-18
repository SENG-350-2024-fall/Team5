
import { offices } from '../../mockedData/offices';
import { EDVisitStrategy, GPVisitStrategy, HomeCareStrategy, HotlineStrategy } from '../../mockedData/treatmentStrategies';
import { OFFICE } from '../../interfaces/office';
import { TRIAGE_APPLICATION } from '../../interfaces/triageApplication';
import { strategies } from '../../constants/strategies';

export default class getHelpController {
  public static async getTreatmentAndOffice(triageApplication: TRIAGE_APPLICATION): Promise<{ treatment: string; office: OFFICE; }> {
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

    // Randomly select an office from matching ones, or provide a default if none match
    const selectedOffice = matchingOffices.length
      ? matchingOffices[Math.floor(Math.random() * matchingOffices.length)]
      : {
          name: "No matching office available",
          type: selectedStrategy.strategy.office_type,
          location: "",
          days_open: "",
          hours_open: "",
          phone_number: "",
          ave_wait_time: 0,
        };

    return {
      treatment: selectedStrategy.strategy.Strat(),
      office: selectedOffice as OFFICE,
    };
  }
}
