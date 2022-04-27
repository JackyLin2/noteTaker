
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyDsr5cIE52auBCMbnl1G8OTMw1-PFl6E3M",
  authDomain: "notetaker-6e543.firebaseapp.com",
  projectId: "notetaker-6e543",
  storageBucket: "notetaker-6e543.appspot.com",
  messagingSenderId: "814276124113",
  appId: "1:814276124113:web:a9afbb4ca5e42b987454f0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();