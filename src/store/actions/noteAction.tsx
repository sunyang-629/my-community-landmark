import { ActionTypes, NoteAction, note } from './actionTypes';
import { Dispatch } from "redux";
import "firebase/database";

// type createNoteAction = {
//   readonly type: ActionTypes.createNote,
//   readonly payload: {
//     lat: number,
//     lng: number
//   }
// }

export const createNote = (note:note) => (dispatch:Dispatch<NoteAction>,getState:Function,{ getFirebase, getFirestore }:{getFirebase:Function,getFirestore:Function}) => {
  //
  const firestore = getFirestore();
  console.log('note:',note,firestore);
  firestore.add({
    collection: 'notes'
  },{
      ...note
  }).then(() => {
    dispatch({ type: ActionTypes.createNote, payload: { note: note } })
  }).catch((err:string) => {
    dispatch({ type: ActionTypes.createNoteError, payload: { err } })
  })
}