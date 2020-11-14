import { ActionTypes } from './actionTypes';
import { Dispatch } from "redux"

type GetCurrentLocationAction = {
  readonly type: ActionTypes.getCurrentLocation,
  readonly payload: {
    lat: number,
    lng: number
  }
}

interface GetCurrentLocationErrorAction {
  readonly type: ActionTypes.getCurrentLocationError,
  readonly payload: {
    error:string
  }
}


export const getCurrentLocation = () => (dispatch: Dispatch<GetCurrentLocationAction | GetCurrentLocationErrorAction>) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat: number = position.coords.latitude;
        const lng: number = position.coords.longitude;
        console.log('position:',lat,lng);
        return dispatch({
          type: ActionTypes.getCurrentLocation,
          payload: {
            lat,
            lng
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