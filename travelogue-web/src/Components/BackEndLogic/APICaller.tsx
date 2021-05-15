import Params from "./params.json";
import { Coordinate, generateNewTrip, setBaseBackendUrl } from "travelogue-utility";

setBaseBackendUrl(Params.SERVER);

export const generateTrip = (input: TripGenerationInputs) => {
  return generateNewTrip(input);
};


export interface Trip {
  trip: Activity[];
}
export interface Trip {}
export interface Activity {
  types?: string[];
  name?: string;
  price?: number;
  location?: string;
  description?: string;
  time?: number;
  rating?: number;
  people?: string;
  duration?: number;
}

export interface TripGenerationInputs {
  numberOfPeople?: number; // optional bc we dont use them right now
  budget?: number;
  startDate: number;
  endDate: number;
  startLocation: Coordinate;
  endLocation: Coordinate;
}
