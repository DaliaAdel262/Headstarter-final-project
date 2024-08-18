// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "final-project-8ec7a.firebaseapp.com",
  projectId: "final-project-8ec7a",
  storageBucket: "final-project-8ec7a.appspot.com",
  messagingSenderId: "327626366869",
  appId: "1:327626366869:web:3f385ae52b49a7b3b9609c",
  measurementId: "G-YRE4D9EYQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);