import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB-MexN2aBInnjVTn1sNrPjz1xys_yMYzc",
    authDomain: "project-4cb77.firebaseapp.com",
    projectId: "project-4cb77",
    storageBucket: "project-4cb77.appspot.com",
    messagingSenderId: "447367301140",
    appId: "1:447367301140:web:27f62b2e79e50d6368ff01"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};