import { ActionTypes, LoginAction, LogoutAction, SignUpAction } from './actionTypes';
import { Dispatch } from "redux";

type signInState = {
  email: string,
  password: string,
}

type SignUpState = {
  email: string,
  password: string,
  userName: string,
}

export const signIn = (credentials: signInState) => (dispatch: Dispatch<LoginAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then(() => {
    dispatch({ type: ActionTypes.loginSuccess, payload:{err:null} });
  }).catch((err: string) => {
    dispatch({ type: ActionTypes.loginError, payload: { err } });
  })
};

export const signOut = () => (dispatch: Dispatch<LogoutAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
  const firebase = getFirebase();
  firebase.auth().signOut().then(() => {
    dispatch({ type: ActionTypes.logoutSuccess,payload:{err:null} });
  })
}

export const signUp = (newUser:SignUpState) => (dispatch: Dispatch<SignUpAction>, getState: Function, { getFirebase, getFirestore }: { getFirebase: Function, getFirestore: Function }) => {
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
    dispatch({ type: ActionTypes.signUpSuccess, payload:{err:null} })
  }).catch((err: string) => {
    dispatch({ type: ActionTypes.signUpError, payload: { err } })
  })
}
