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
  // searchValue: '',
  isLoading: false
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
        // searchValue: action.payload.searchValue,
        isLoading: action.payload.isLoading,
      }
    case ActionTypes.getAllNotes:
      console.log('action.pay:',action);
      return {
        ...state,
        isSearching: action.payload.isSearching,
        // searchValue: action.payload.searchValue,
        isLoading: action.payload.isLoading,
      }
    case ActionTypes.loadingStart:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
  }
  return state;
}