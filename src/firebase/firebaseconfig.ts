import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBEz9Sp8cR1rUAjjFQ6jFLX7oO2GfAO79U",
    authDomain: "reenbit-test-8b4bd.firebaseapp.com",
    projectId: "reenbit-test-8b4bd",
    storageBucket: "reenbit-test-8b4bd.appspot.com",
    messagingSenderId: "806301126910",
    appId: "1:806301126910:web:a109ced5ce729f1f2515af"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth, firestore}
