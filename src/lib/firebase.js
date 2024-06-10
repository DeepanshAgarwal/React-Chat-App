import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchatapp-deepansh.firebaseapp.com",
    projectId: "reactchatapp-deepansh",
    storageBucket: "reactchatapp-deepansh.appspot.com",
    messagingSenderId: "731505984199",
    appId: "1:731505984199:web:957565fd9796c33aa1f4e2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
