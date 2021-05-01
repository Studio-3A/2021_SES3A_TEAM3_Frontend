import { generateNewTrip, TripGenerationInputs, setBaseBackendUrl } from 'travelogue-utility';
import Params from './params.json';

setBaseBackendUrl(Params.SERVER);

export const generateTrip = (input: TripGenerationInputs) => {
  return generateNewTrip(input);
};
