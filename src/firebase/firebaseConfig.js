
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,FacebookAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzlwFLNpE-M4QvkfEIJlfgogubP1nh_JA",
  authDomain: "pruebafinal-c106b.firebaseapp.com",
  projectId: "pruebafinal-c106b",
  storageBucket: "pruebafinal-c106b.appspot.com",
  messagingSenderId: "15369324732",
  appId: "1:15369324732:web:a5e3363f14c400e7e4a8b9"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore() //esto es para ear el crud
const facebook = new FacebookAuthProvider();

export {app, google,db,facebook}