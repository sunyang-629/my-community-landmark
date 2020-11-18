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
      ...note,
    lowcaseNote:note.note.toLowerCase(),
  }).then((res:any) => {
    dispatch({ type: ActionTypes.createNote, payload: { note: res } })
  }).catch((err:string) => {
    dispatch({ type: ActionTypes.createNoteError, payload: { err } })
  })
}

export const getAllNotes = () => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();
  dispatch({ type: ActionTypes.loadingStart, payload: { isLoading: true } });
  console.log('getall');
  firestore.get({ collection: 'notes' }).then(() => {
    dispatch({type:ActionTypes.getAllNotes, payload:{isSearching:false,isLoading:false,searchString:''}})
  }).catch();
}

export const searchNotesByUser = (username: string) => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();
  dispatch({ type: ActionTypes.loadingStart, payload: { isLoading: true } });
  console.log('byuser');
  firestore.get({ collection: 'notes', orderBy: ['author'], startAt: username, endAt: username+"\uf8ff"  })
    .then(() => {
      dispatch({type:ActionTypes.searchNotesByUser, payload:{isSearching:true,isLoading:false,searchString:username}})
    }).catch()
}

export const searchNotesByContent = (content: string) => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();
  dispatch({ type: ActionTypes.loadingStart, payload: { isLoading: true } });
  console.log('bycontent',content);
  firestore.get({ collection: 'notes', orderBy: ['lowcaseNote'], startAt: content, endAt: content+"\uf8ff" })
    .then(() => {
      dispatch({type:ActionTypes.searchNotesByContent, payload:{isSearching:true,isLoading:false,searchString:content}})
    }).catch();
}