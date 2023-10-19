// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaQVtQn7AgDhyBCo67J5NBtEzrRYMeAkU",
  authDomain: "to-do-app-cb459.firebaseapp.com",
  projectId: "to-do-app-cb459",
  storageBucket: "to-do-app-cb459.appspot.com",
  messagingSenderId: "696646647811",
  appId: "1:696646647811:web:649a84a741428198a00e36",
  measurementId: "G-ZMPWVWZWTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
