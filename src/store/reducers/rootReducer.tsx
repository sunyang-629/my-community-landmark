import { Reducer, combineReducers } from 'redux';
import { locationReducer, locationState } from './locationReducer';
import { noteReducer, note } from './noteReducer';
import { authReducer } from './authReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';



export const rootReducer = combineReducers({
  location: locationReducer,
  note: noteReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export type RootState = ReturnType<typeof rootReducer>