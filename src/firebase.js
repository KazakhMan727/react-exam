// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFvuzWIbg7Jf9ayMm2gTtbqHbBzjOmBb4",
  authDomain: "react-exam-d4525.firebaseapp.com",
  projectId: "react-exam-d4525",
  storageBucket: "react-exam-d4525.appspot.com",
  messagingSenderId: "523119964968",
  appId: "1:523119964968:web:dcaed3eaf8d65c3fa2d61d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);