// import { note } from '../reducers/rootReducer';
import { getCurrentLocation } from "./locationAction";

export enum ActionTypes  {
  getCurrentLocation = 'GET_CURRENT_LOCATION',
  getCurrentLocationError = 'GET_CURRENT_LOCATION_ERROR',
  
  createNote = 'CREATE_NOTE',
  createNoteError = 'CREATE_NOTE_ERROR',
}

export interface GetCurrentLocation {
  type: ActionTypes.getCurrentLocation,
  payload: { lat: number, lng: number }
}

export interface GetCurrentLocationError {
  type: ActionTypes.getCurrentLocationError,
  payload: { error: string }
}

export type LocationAction = GetCurrentLocation | GetCurrentLocationError

export interface note {
  id?: string,
  note: string,
  author: string,
  location: {
    lat: number,
    lng: number
  }
}
export interface CreateNote {
  type: ActionTypes.createNote;
  payload:{note:note}
}

export type NoteAction = CreateNote;