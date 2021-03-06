// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCYPAv6SsYhgLtz432Dwt0ubI3rc1w9Ss",
  authDomain: "pos-restaurant-1d5c6.firebaseapp.com",
  projectId: "pos-restaurant-1d5c6",
  storageBucket: "pos-restaurant-1d5c6.appspot.com",
  messagingSenderId: "728297657383",
  appId: "1:728297657383:web:3ec8e6ee2c4d22baf9aa02",
  measurementId: "G-JVHTQ3X1SH",
};
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);
export { db, auth };
