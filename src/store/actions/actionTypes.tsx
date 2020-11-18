
export enum ActionTypes  {
  getCurrentLocation = 'GET_CURRENT_LOCATION',
  getCurrentLocationError = 'GET_CURRENT_LOCATION_ERROR',
  
  createNote = 'CREATE_NOTE',
  createNoteError = 'CREATE_NOTE_ERROR',
  loadingStart = 'LOADING_START',
  loadingEnd = 'LOADING_END',
  searchNotesByUser = 'SEARCH_NOTES_BY_USER',
  searchNotesByContent = 'SEARCH_NOTES_BY_CONTENT',
  searchLoginNotes = 'SEARCH_LOGIN_NOTES',
  getAllNotes = 'GET_ALL_NOTES',
  getNotesError = 'GET_NOTES_ERROR',

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
  payload:{ note:note,isSearching: boolean, isLoading: boolean, searchString: string, isMyNotes: boolean}
}
export interface CreateNoteError {
  type: ActionTypes.createNoteError,
  payload:{err:string, isSearching: boolean, isLoading: boolean, searchString: string, isMyNotes: boolean}
}

export interface SearchNotesByUser {
  type: ActionTypes.searchNotesByUser,
  payload: { isSearching: boolean, isLoading: boolean, searchString: string, isMyNotes: boolean }
}
export interface SearchNotesByContent {
  type: ActionTypes.searchNotesByContent,
  payload: { isSearching: boolean, isLoading: boolean, searchString: string, isMyNotes: boolean }
}

export interface SearchLoginNotes {
  type: ActionTypes.searchLoginNotes,
  payload: { isSearching: boolean, isLoading: boolean, searchString: string, isMyNotes: boolean }
}
export interface GetAllNotes {
  type: ActionTypes.getAllNotes,
  payload: { isSearching: boolean, isLoading: boolean, searchString: string, isMyNotes: boolean }
}

export interface GetNotesError {
  type: ActionTypes.getNotesError,
  payload: { isSearching: boolean, isLoading: boolean, searchString: string, isMyNotes: boolean }
}

export interface LoadingStart {
  type: ActionTypes.loadingStart,
  payload: { isLoading: boolean }
}


export type NoteAction = CreateNote | CreateNoteError | SearchNotesByUser | SearchLoginNotes| SearchNotesByContent | GetAllNotes | GetNotesError | LoadingStart;

export interface LoginSuccess {
  type: ActionTypes.loginSuccess,
  payload: { err: string }
}

export interface LoginError {
  type: ActionTypes.loginError,
  payload:{err:string}
}

export type LoginAction = LoginSuccess | LoginError;

export interface LogoutSuccess {
  type: ActionTypes.logoutSuccess,
  payload: { err: string }
}

export type LogoutAction = LogoutSuccess;

export interface SignUpSuccess {
  type: ActionTypes.signUpSuccess,
  payload: { err: string }
}

export interface SignUpError {
  type: ActionTypes.signUpError,
  payload: { err: string }
}

export type SignUpAction = SignUpSuccess | SignUpError;