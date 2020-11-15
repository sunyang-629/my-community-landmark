import { ActionTypes, CreateNote, note } from './actionTypes';
import { Dispatch } from "redux";

// type createNoteAction = {
//   readonly type: ActionTypes.createNote,
//   readonly payload: {
//     lat: number,
//     lng: number
//   }
// }

export const createNote = (note:note) => (dispatch:Dispatch<CreateNote>) => {
  //
  console.log('note action fired');
  dispatch({ type: ActionTypes.createNote, payload:{note:note} });
}