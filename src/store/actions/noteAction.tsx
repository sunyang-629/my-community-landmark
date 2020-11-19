import { ActionTypes, NoteAction } from './actionTypes';
import { Dispatch } from "redux";
import "firebase/database";
import "firebase/firestore";

export type NoteState = {
  id?: string,
  note: string,
  author: string,
  location: {
    lat: number,
    lng: number
  }
}

export const createNote = (note:NoteState) => (dispatch:Dispatch<NoteAction>,getState:Function,{ getFirebase, getFirestore }:{getFirebase:Function,getFirestore:Function}) => {
  const firestore = getFirestore();

  firestore.add({
    collection: 'notes'
  },{
      ...note,
    lowcaseNote:note.note.toLowerCase(),
  }).then((res:any) => {
    dispatch({ type: ActionTypes.createNote, payload: { note: res, isSearching: false, isLoading: false, searchString: '', isMyNotes: false, } })
  }).catch((err:string) => {
    dispatch({ type: ActionTypes.createNoteError, payload: { isSearching: false, isLoading: false, searchString: '', isMyNotes: false, err } })
  })
}

export const getAllNotes = () => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();

  dispatch({ type: ActionTypes.loadingStart, payload: { isLoading: true } });
  firestore.get({ collection: 'notes' }).then(() => {
    dispatch({type:ActionTypes.getAllNotes, payload:{isSearching:false,isLoading:false,searchString:'',isMyNotes:false}})
  }).catch(() => {
    dispatch({type:ActionTypes.getNotesError, payload:{isSearching:false,isLoading:false,searchString:'',isMyNotes:false}})
  });
}

export const searchNotesByUser = (username: string) => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();

  dispatch({ type: ActionTypes.loadingStart, payload: { isLoading: true } });
  firestore.get({ collection: 'notes', orderBy: ['author'], startAt: username, endAt: username + "\uf8ff" })
    .then(() => {
      dispatch({ type: ActionTypes.searchNotesByUser, payload: { isSearching: true, isLoading: false, searchString: username, isMyNotes: false } })
    }).catch(() => {
      dispatch({type:ActionTypes.getNotesError, payload:{isSearching:false,isLoading:false,searchString:'',isMyNotes:false}})
    });
}

export const searchLoginNotes = (username: string) => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();

  dispatch({ type: ActionTypes.loadingStart, payload: { isLoading: true } });
  firestore.get({ collection: 'notes', where: ['author', '==', username]  })
    .then(() => {
      dispatch({type:ActionTypes.searchNotesByUser, payload:{isSearching:true,isLoading:false,searchString:username,isMyNotes:true}})
    }).catch(() => {
      dispatch({type:ActionTypes.getNotesError, payload:{isSearching:false,isLoading:false,searchString:'',isMyNotes:false}})
    })
}

export const searchNotesByContent = (content: string) => (dispatch: Dispatch<NoteAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firestore = getFirestore();
  
  dispatch({ type: ActionTypes.loadingStart, payload: { isLoading: true } });
  firestore.get({ collection: 'notes', orderBy: ['lowcaseNote'], startAt: content, endAt: content+"\uf8ff" })
    .then(() => {
      dispatch({type:ActionTypes.searchNotesByContent, payload:{isSearching:true,isLoading:false,searchString:content,isMyNotes:false}})
    }).catch(() => {
      dispatch({type:ActionTypes.getNotesError, payload:{isSearching:false,isLoading:false,searchString:'',isMyNotes:false}})
    });
}