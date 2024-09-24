import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {firestore} from 'firebase/compat/firestore'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAo0wyirNQZhRX8lKHi9b5-2PgxBrVFV-8",
    authDomain: "online-store-19e86.firebaseapp.com",
    databaseURL: "https://online-store-19e86-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "online-store-19e86",
    storageBucket: "online-store-19e86.appspot.com",
    messagingSenderId: "266488025828",
    appId: "1:266488025828:web:053f4b3e6c5e5c33d992f1"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const firestoreApp = app.firestore()
export const auth = getAuth(app)
