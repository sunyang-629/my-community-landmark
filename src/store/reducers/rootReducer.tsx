import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { noteReducer } from './noteReducer';

export const rootReducer = combineReducers({
  location: locationReducer,
  note: noteReducer,
  // firestore: firestoreReducer,
  // firebase: firebaseReducer
})

export type RootState = ReturnType<typeof rootReducer>