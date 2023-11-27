import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA10TVPi8dGeOBfuE3Y6ZpIxiJ8CilB6Hc",
  authDomain: "pa-ago23-feb24-a10cb.firebaseapp.com",
  projectId: "pa-ago23-feb24-a10cb",
  storageBucket: "pa-ago23-feb24-a10cb.appspot.com",
  messagingSenderId: "177518304699",
  appId: "1:177518304699:web:148f5730a871d1a134389e"
};


export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);