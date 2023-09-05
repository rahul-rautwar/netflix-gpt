// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRshPMiHkMrBG6L3P78kG-T0uZRA7w2Hg",
  authDomain: "netflixgpt-1db09.firebaseapp.com",
  projectId: "netflixgpt-1db09",
  storageBucket: "netflixgpt-1db09.appspot.com",
  messagingSenderId: "881149018881",
  appId: "1:881149018881:web:327d256e75963706f65100",
  measurementId: "G-NW90YYNCT3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
