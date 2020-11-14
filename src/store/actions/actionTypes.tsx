import { type } from "os";
import { getCurrentLocation } from "./locationAction";

export enum ActionTypes  {
  getCurrentLocation = 'GET_CURRENT_LOCATION',
  getCurrentLocationError= 'GET_CURRENT_LOCATION_ERROR'
}

export interface GetCurrentLocation {
  type: ActionTypes.getCurrentLocation;
  payload: { lat: number, lng: number }
}

export interface GetCurrentLocationError {
  type: ActionTypes.getCurrentLocationError;
  payload: { error: string }
}

export type LocationAction = GetCurrentLocation | GetCurrentLocationError