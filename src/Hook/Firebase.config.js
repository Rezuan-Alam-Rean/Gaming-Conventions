// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb76B7Aou_Y2JtQfjTV5sQlxmjYGtkKyQ",
  authDomain: "assingment-gaming-conventions.firebaseapp.com",
  projectId: "assingment-gaming-conventions",
  storageBucket: "assingment-gaming-conventions.appspot.com",
  messagingSenderId: "341392348367",
  appId: "1:341392348367:web:1ce32cb58de70809bbd3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
