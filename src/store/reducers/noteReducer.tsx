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
  notes: [],
  isSearching: false,
  searchValue: ''
}

export const noteReducer = (state = initState, action: NoteAction) => {
  switch (action.type) {
    case ActionTypes.createNote:
      return state;
    case ActionTypes.searchNotesByUser:
      console.log('action.pay:',action);
      return {
        ...state,
        isSearching: action.payload.isSearching,
        searchValue: action.payload.searchValue,
      }
    case ActionTypes.getAllNotes:
      console.log('action.pay:',action);
      return {
        ...state,
        isSearching: action.payload.isSearching,
        searchValue: action.payload.searchValue,
      }
  }
  return state;
}