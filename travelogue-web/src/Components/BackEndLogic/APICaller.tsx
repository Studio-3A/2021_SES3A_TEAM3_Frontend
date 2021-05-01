import Params from "./params.json";
import { generateNewTrip, setBaseBackendUrl, TripGenerationInputs } from "travelogue-utility";

setBaseBackendUrl(Params.SERVER);

export const generateTrip = (input: TripGenerationInputs) => {
  return generateNewTrip(input);
};
