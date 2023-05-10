import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChX7myPTh5Xo3lyZRCAmBURov4lkP09t8",
  authDomain: "pessano-react.firebaseapp.com",
  projectId: "pessano-react",
  storageBucket: "pessano-react.appspot.com",
  messagingSenderId: "193963238811",
  appId: "1:193963238811:web:04f6993067544148d76d3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)