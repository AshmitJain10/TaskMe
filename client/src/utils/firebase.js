// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskme-b4997.firebaseapp.com",
  projectId: "taskme-b4997",
  storageBucket: "taskme-b4997.appspot.com",
  messagingSenderId: "625458251392",
  appId: "1:625458251392:web:316f6457372867e53c0865",
  measurementId: "G-C3C9CD62VE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
