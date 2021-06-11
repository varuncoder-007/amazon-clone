import firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBzxmWfQJewVXALBgLqbT-klK8SlB5AJHw",
    authDomain: "e-clone-c8890.firebaseapp.com",
    projectId: "e-clone-c8890",
    storageBucket: "e-clone-c8890.appspot.com",
    messagingSenderId: "280506899361",
    appId: "1:280506899361:web:47e094df51c9462a66c9e0",
    measurementId: "G-FEXSNS7J2D"
  });

  const db = firebase.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, db, provider}