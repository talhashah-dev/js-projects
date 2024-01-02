// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyD8oraQLWEYSpqqXyaWoeSWew-rCLvYmPE",
    authDomain: "todo-app-a4936.firebaseapp.com",
    projectId: "todo-app-a4936",
    storageBucket: "todo-app-a4936.appspot.com",
    messagingSenderId: "700777034834",
    appId: "1:700777034834:web:8a6320a66880ca79469b8b",
    measurementId: "G-SWP9WSGS7N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);