import { ActionTypes, LoginAction, LogoutAction, SignUpAction } from './actionTypes';
import { Dispatch } from "redux";

export type LoginState = {
  email: string,
  password: string,
}

export type RegisterState = {
  email: string,
  password: string,
  userName: string,
}

export const login = (credentials: LoginState) => (dispatch: Dispatch<LoginAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firebase = getFirebase();
  
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then(() => {
    dispatch({ type: ActionTypes.loginSuccess, payload: { err: '' } });
  }).catch((err) => {
    dispatch({ type: ActionTypes.loginError, payload: { err:err.message } });
  })
};

export const logout = () => (dispatch: Dispatch<LogoutAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firebase = getFirebase();

  firebase.auth().signOut().then(() => {
    dispatch({ type: ActionTypes.logoutSuccess, payload: { err: '' } });
  })
}

export const register = (newUser: RegisterState) => (dispatch: Dispatch<SignUpAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
  ).then((resp:any) => {
    return firestore.collection('users').doc(resp.user.uid).set({
      userName: newUser.userName.toLowerCase()
    })
  }).then(() => {
    dispatch({ type: ActionTypes.signUpSuccess, payload: { err: '' } })
  }).catch((err) => {
    dispatch({ type: ActionTypes.signUpError, payload: { err: err.message } })
  })
}
