import { ActionTypes, LocationAction } from '../actions/actionTypes';

export interface locationState {
  lat: number,
  lng: number,
  err: string | null
}

const location = localStorage.getItem('location') || '{"lat":-27.4703887,"lng":153.0249142,"err":null}';

const initialState:locationState = JSON.parse(location)

export const locationReducer = (state=initialState, action:LocationAction) => {
  switch (action.type) {
    case ActionTypes.getCurrentLocation:
      return { ...state, lat: action.payload.lat, lng: action.payload.lng }
    case ActionTypes.getCurrentLocationError:
      return { ...state, err: action.payload.error }
    default:
      return state
  }
}