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

export interface Coordinate {
  lat: number;
  lng: number;
}

export const generateTrip = async (input: TripGenerationInputs) => {
  return await makeRequest<Trip>(
    'POST',
    `${Params.SERVER}/trip/new`,
    'Could not generate trip',
    undefined,
    JSON.stringify(input)
  );
};

// please just use the enum for status codes
export enum StatusCode {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  Conflict = 409,
  ImATeapot = 418,
  TooManyRequests = 429,
  InternalServerError = 500,
  NotImplemented = 501,
}

export const statusCodeIsSuccessful = (code: number) => {
  switch (code) {
    case StatusCode.OK:
    case StatusCode.Created:
    case StatusCode.NoContent:
      return true;
    default:
      return false;
  }
};

type RequestMethod = 'GET' | 'POST';

export interface BasicResponse {
  status: StatusCode;
  message?: string;
}

export async function makeRequest<T>(
  method: RequestMethod,
  url: string,
  errorMessage?: string,
  headers?: HeadersInit,
  body?: BodyInit
) {
  let error: any;
  let status = StatusCode.BadRequest;
  try {
    // try fetch the data
    const response = await fetch(url, { method, headers, body });

    // cast the json into the proper type if successful
    if (statusCodeIsSuccessful(response.status))
      return (await response.json()) as T;
    else {
      try {
        error = (await response.json()) as any;
      } catch (e) {}
    }
    // if it fails, we'll take note of the status code
    status = response.status;
  } catch (e) {
    // if we got an error, let's track that too
    console.error(e);
    error = e;
  }

  // we'll be here if either the status code wasn't 2**, or if some exception was thrown :/
  if (errorMessage == null) errorMessage = `Request to ${url} failed.`;
  return MakeErrorResponse(status, errorMessage, error);
}

export interface BasicResponse {
  status: StatusCode;
  message?: string;
}

export function MakeErrorResponse(
  status: StatusCode,
  errorMessage?: string,
  error?: any
): ErrorResponse {
  return { status, errorMessage, error, isError: true };
}

export interface ErrorResponse extends BasicResponse {
  errorMessage?: string;
  error?: any; // yeah idk what type this is going to be... ¯\_(ツ)_/¯
  isError: true;
}
