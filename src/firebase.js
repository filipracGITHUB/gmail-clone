import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2MJTT32Bm50_mFi-d5pNLCmEZpcOH4bA",
  authDomain: "clone-789ea.firebaseapp.com",
  projectId: "clone-789ea",
  storageBucket: "clone-789ea.appspot.com",
  messagingSenderId: "1058537467144",
  appId: "1:1058537467144:web:81b59d7f3eee38e0e190bd",
  measurementId: "G-M6Z4H6427J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
