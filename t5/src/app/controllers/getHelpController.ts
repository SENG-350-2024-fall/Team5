
import { offices } from '../../mockedData/offices';
import { OFFICE } from '../../interfaces/office';

export function getHelp(): OFFICE {
  //add logic here
  const randomIndex = Math.floor(Math.random() * offices.length);
  return offices[randomIndex];
}
