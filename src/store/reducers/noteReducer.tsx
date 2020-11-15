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
  notes: []
}

export const noteReducer = (state = initState, action: NoteAction) => {
  switch (action.type) {
    case ActionTypes.createNote:
      console.log('created note',action.payload);
  }
  return state;
}