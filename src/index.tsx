import React, {FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { rootReducer, RootState } from './store/reducers/rootReducer';

//firebase
import firebase from 'firebase/app';
import fbConfig from './config/fbConfig';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase,isLoaded } from 'react-redux-firebase'
import 'firebase/firestore';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    // @ts-ignore: Unreachable code error
    reduxFirestore(fbConfig),
  ));
   
  const rrfConfig = { 
    userProfile: 'users',
    useFirestoreForProfile: true
  }

  const rffProps = {
    firebase,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }

const AuthIsLoaded: FunctionComponent = ({ children }: any) => {
   // @ts-ignore: Unreachable code error
    const auth = useSelector((state: RootState) => state.firebase.auth)
    if (!isLoaded(auth)) return null;
        return children
  }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
