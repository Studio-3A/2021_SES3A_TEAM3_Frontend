import { Coordinate, postContent } from 'travelogue-utility';
import Params from './params.json';

export interface Trip {
  trip: Activity[];
}

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

export const generateTrip = async (input: TripGenerationInputs) => {
  return await postContent<Trip>({
    url: `${Params.SERVER}/trip/new`,
    errorMessage: 'Could not generate trip',
    body: JSON.stringify(input),
  });
};
