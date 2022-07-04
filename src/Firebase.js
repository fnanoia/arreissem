import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUi2xjas070TN7Cs4otSLF-IWaqKlK9gk",
  authDomain: "arreissem.firebaseapp.com",
  projectId: "arreissem",
  storageBucket: "arreissem.appspot.com",
  messagingSenderId: "663363313761",
  appId: "1:663363313761:web:80b0a3afdf4001d9ce4a20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const collectionProducts = collection(db, "products");