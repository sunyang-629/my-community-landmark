import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD46sAGP0c8HzLnqbp5c22wKSkgbY7VPeI",
    authDomain: "yansen-mario-plan.firebaseapp.com",
    databaseURL: "https://yansen-mario-plan.firebaseio.com",
    projectId: "yansen-mario-plan",
    storageBucket: "yansen-mario-plan.appspot.com",
    messagingSenderId: "697362074657",
    appId: "1:697362074657:web:f7196b2bf088fdfd2a6760"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshot: true });

export default firebase;