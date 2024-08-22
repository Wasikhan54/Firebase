  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAAybZqAQgOqzzMUXLXI8kAf1D-Bi6UIHA",
    authDomain: "hiringmine-e8e45.firebaseapp.com",
    projectId: "hiringmine-e8e45",
    storageBucket: "hiringmine-e8e45.appspot.com",
    messagingSenderId: "431415320587",
    appId: "1:431415320587:web:e8fe55dee9a03e67e1a70e",
    measurementId: "G-HZ078NMBLW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


const auth  = getAuth();
export{ auth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword}