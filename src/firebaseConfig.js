// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Arglc2UfifJGr6WvQgt9nbIdBNW_7Qw",
  authDomain: "my-functionalty-site.firebaseapp.com",
  projectId: "my-functionalty-site",
  storageBucket: "my-functionalty-site.firebasestorage.app",
  messagingSenderId: "16248870825",
  appId: "1:16248870825:web:8e1ee2e8e56b0d570716b8",
  measurementId: "G-4JMKLJ00MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);