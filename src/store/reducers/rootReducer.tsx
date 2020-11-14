import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';

export const rootReducer = combineReducers({
  location: locationReducer,
  // project: projectReducer,
  // firestore: firestoreReducer,
  // firebase: firebaseReducer
})

export type RootState = ReturnType<typeof rootReducer>