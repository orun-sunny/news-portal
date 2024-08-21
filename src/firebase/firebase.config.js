// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwORqzWTEDqqmRKgJa0JhkuyU0uc-QCZY",
    authDomain: "news-dragon-c7bde.firebaseapp.com",
    projectId: "news-dragon-c7bde",
    storageBucket: "news-dragon-c7bde.appspot.com",
    messagingSenderId: "154014060608",
    appId: "1:154014060608:web:60163a37611e2eac7acfa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;