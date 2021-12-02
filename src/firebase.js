import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdgSUdaSXQRL9hCWpuSCsK33-2c4p2UHQ",
  authDomain: "discord-clone-4d549.firebaseapp.com",
  projectId: "discord-clone-4d549",
  storageBucket: "discord-clone-4d549.appspot.com",
  messagingSenderId: "265058914042",
  appId: "1:265058914042:web:7246d123d8b415e0cc0343",
  measurementId: "G-5NCJWSD7D4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
