import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBhS9iryQRkNuW4r8yjkhpdNVet-vEsgrg",
  authDomain: "clone-d1af3.firebaseapp.com",
  projectId: "clone-d1af3",
  storageBucket: "clone-d1af3.appspot.com",
  messagingSenderId: "895009559127",
  appId: "1:895009559127:web:3afe708224a118d8fe0912",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export {db ,auth, provider};