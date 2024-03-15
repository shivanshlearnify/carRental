// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmeQtTCBbhIzglRaxtOD75_uOfhvfBWFI",
    authDomain: "carrental-e3c80.firebaseapp.com",
    projectId: "carrental-e3c80",
    storageBucket: "carrental-e3c80.appspot.com",
    messagingSenderId: "588464000596",
    appId: "1:588464000596:web:05f8b541c50f97e13da7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }