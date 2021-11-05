import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// npm i firebase@^8.10.0
const firebaseConfig = {
    apiKey: "AIzaSyA-2CAmjf20lZup0dmyoPnQSpCDCTLg_Es",
    authDomain: "mvp-pos-12911.firebaseapp.com",
    databaseURL: "https://mvp-pos-12911-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mvp-pos-12911",
    storageBucket: "mvp-pos-12911.appspot.com",
    messagingSenderId: "340716311416",
    appId: "1:340716311416:web:7d6f61cedac282f1a16e8d",
    measurementId: "G-80FZ8W4SK1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
