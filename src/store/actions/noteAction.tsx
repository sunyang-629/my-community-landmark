import { ActionTypes, NoteAction, note } from './actionTypes';
import { Dispatch } from "redux";
import "firebase/database";
import firebase from 'firebase/app';
import "firebase/firestore";

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
  firestore.add({
    collection: 'notes'
  },{
      ...note
  }).then((res:any) => {
    dispatch({ type: ActionTypes.createNote, payload: { note: res } })
  }).catch((err:string) => {
    dispatch({ type: ActionTypes.createNoteError, payload: { err } })
  })
}

export const getAllNotes = () => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();
  console.log('getall');
  firestore.get({ collection: 'notes' }).then(() => {
    dispatch({type:ActionTypes.getAllNotes, payload:{isSearching:false,searchValue:''}})
  }).catch();
}

export const searchNotesByUser = (username: string) => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();
  console.log('username:',username);
  firestore.get({ collection: 'notes',where: ['author', '==', username] })
    .then(() => {
      dispatch({type:ActionTypes.searchNotesByUser, payload:{isSearching:true,searchValue:username}})
    }).catch()
}