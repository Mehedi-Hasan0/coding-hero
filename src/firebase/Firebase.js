// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq77P2eQHKrQK6ZX95dKw_Bn_1NP8CbF4",
    authDomain: "coding-hero-dc5ea.firebaseapp.com",
    projectId: "coding-hero-dc5ea",
    storageBucket: "coding-hero-dc5ea.appspot.com",
    messagingSenderId: "986920312246",
    appId: "1:986920312246:web:64067675b3d1293f9c7517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;