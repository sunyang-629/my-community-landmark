import { ActionTypes, GetCurrentLocationError } from './actionTypes';
import { Dispatch, Action } from "redux"

type GetCurrentLocationAction = {
  readonly type: ActionTypes.getCurrentLocation,
  readonly payload: {
    lat: number,
    lon: number
  }
}

interface GetCurrentLocationErrorAction {
  readonly type: ActionTypes.getCurrentLocationError,
  readonly payload: {
    error:string
  }
}


export const getCurrentLocation = () => (dispatch: Dispatch<GetCurrentLocationAction | GetCurrentLocationError>) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat: number = position.coords.latitude;
        const lon: number = position.coords.longitude;
        console.log('position:',lat,lon);
        return dispatch({
          type: ActionTypes.getCurrentLocation,
          payload: {
            lat,
            lon
          }
        })
      },
      err => {
        const error: string = err.message;
        return ({
          type: ActionTypes.getCurrentLocationError,
          payload: {
            error
          }
        })
      })
  }
};