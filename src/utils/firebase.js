// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEtyfqaPKL9bVLmKIm9qHfn1OfdMtg1IU",
  authDomain: "berry-web-bot.firebaseapp.com",
  databaseURL: "https://berry-web-bot-default-rtdb.firebaseio.com",
  projectId: "berry-web-bot",
  storageBucket: "berry-web-bot.appspot.com",
  messagingSenderId: "790988796152",
  appId: "1:790988796152:web:806b3d450146ca55934b0d",
  measurementId: "G-XSVPVLDMEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);