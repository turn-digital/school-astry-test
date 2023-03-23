// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFR7BR5qdMFOhZzZFMckqJg1Hpso0t7Jg",
  authDomain: "form-fa296.firebaseapp.com",
  projectId: "form-fa296",
  storageBucket: "form-fa296.appspot.com",
  messagingSenderId: "832703643467",
  appId: "1:832703643467:web:d1e643732800bd5102f2ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
