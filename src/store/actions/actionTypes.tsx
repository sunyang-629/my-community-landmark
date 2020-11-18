
export enum ActionTypes  {
  getCurrentLocation = 'GET_CURRENT_LOCATION',
  getCurrentLocationError = 'GET_CURRENT_LOCATION_ERROR',
  
  createNote = 'CREATE_NOTE',
  createNoteError = 'CREATE_NOTE_ERROR',
  loadingStart = 'LOADING_START',
  loadingEnd = 'LOADING_END',
  searchNotesByUser = 'SEARCH_NOTES_BY_USER',
  getAllNotes = 'GET_ALL_NOTES',

  loginSuccess = 'LOGIN_SUCCESS',
  loginError = 'LOGIN_ERROR',
  logoutSuccess = 'LOGOUT_SUCCESS',

  signUpSuccess = 'SIGN_UP_SUCCESS',
  signUpError = 'SIGN_UP_ERROR',
}

export interface GetCurrentLocation {
  type: ActionTypes.getCurrentLocation,
  payload: { lat: number, lng: number }
}

export interface GetCurrentLocationError {
  type: ActionTypes.getCurrentLocationError,
  payload: { error: string }
}

export type LocationAction = GetCurrentLocation | GetCurrentLocationError

export interface note {
  id?: string,
  note: string,
  author: string,
  location: {
    lat: number,
    lng: number
  }
}
export interface CreateNote {
  type: ActionTypes.createNote,
  payload:{note:note}
}
export interface CreateNoteError {
  type: ActionTypes.createNoteError,
  payload:{err:string}
}

export interface SearchNotesByUser {
  type: ActionTypes.searchNotesByUser,
  payload: { isSearching: boolean, isLoading:boolean, searchString:string }
}
export interface GetAllNotes {
  type: ActionTypes.getAllNotes,
  payload: { isSearching: boolean,  isLoading:boolean, searchString:string}
}

export interface LoadingStart {
  type: ActionTypes.loadingStart,
  payload: { isLoading: boolean }
}


export type NoteAction = CreateNote | CreateNoteError | SearchNotesByUser | GetAllNotes | LoadingStart;

export interface LoginSuccess {
  type: ActionTypes.loginSuccess,
  payload: { err: null }
}

export interface LoginError {
  type: ActionTypes.loginError,
  payload:{err:string}
}

export type LoginAction = LoginSuccess | LoginError;

export interface LogoutSuccess {
  type: ActionTypes.logoutSuccess,
  payload: { err: null }
}

export type LogoutAction = LogoutSuccess;

export interface SignUpSuccess {
  type: ActionTypes.signUpSuccess,
  payload: {err:null}
}

export interface SignUpError {
  type: ActionTypes.signUpError,
  payload: { err: string }
}

export type SignUpAction = SignUpSuccess | SignUpError;