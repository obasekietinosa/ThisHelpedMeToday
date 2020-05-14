import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA70gGzCEQJ8-24JucLVHhviFax8HNOOSg",
  authDomain: "thishelpedme-today.firebaseapp.com",
  databaseURL: "https://thishelpedme-today.firebaseio.com",
  projectId: "thishelpedme-today",
  storageBucket: "thishelpedme-today.appspot.com",
  messagingSenderId: "887351272192",
  appId: "1:887351272192:web:c12e81779e95ab12ab49e5"
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
