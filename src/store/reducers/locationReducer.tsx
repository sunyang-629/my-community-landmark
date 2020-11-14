import { ActionTypes, LocationAction } from '../actions/actionTypes';

interface locationState {
  lat: number,
  lon: number,
  err: string | null
}

const initialState:locationState = {
  lat:-27.4703887,
  lon: 153.0249142,
  err: null
}

export const locationReducer = (state=initialState, action:LocationAction) => {
  switch (action.type) {
    case ActionTypes.getCurrentLocation:
      console.log('getcurrentlocation',action.payload,state);
      return { ...state, lat: action.payload.lat, lon: action.payload.lon }
    case ActionTypes.getCurrentLocationError:
      return { ...state, err: action.payload.error }
    default:
      return state
  }
}