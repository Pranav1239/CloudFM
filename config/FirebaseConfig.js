// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "cloudfm1-bf467.firebaseapp.com",
    projectId: "cloudfm1-bf467",
    storageBucket: "cloudfm1-bf467.appspot.com",
    messagingSenderId: "223224132212",
    appId: "1:223224132212:web:68d765230916af81c19721",
    measurementId: "G-LWHMJRMS1D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
