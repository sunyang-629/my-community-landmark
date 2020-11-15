import { ActionTypes, NoteAction } from '../actions/actionTypes';

export interface note {
  id: string,
  note: string,
  author: string,
  location: {
    lat: number,
    lng: number
  }
}

const initState = {
  notes: [
    { id: '1', note: 'help me find story bridge', author: 'mario', location: { lat: "-27.4703887", lng: "153.0249142" } },
    { id: '2', note: 'go to shopping', author: 'peach', location: { lat: "-27.47087", lng: "153.0224914" } },
    { id: '3', note: 'wait mario and peach', author: 'luigi', location: { lat: "-27.703887", lng: "153.49142" } },
  ]
}

export const noteReducer = (state = initState, action:NoteAction) => {
  return state;
}