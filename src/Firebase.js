// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkf3CqVLPM1H8J70H_sczHHgvXwGQajTU",
  authDomain: "arreissem-react.firebaseapp.com",
  projectId: "arreissem-react",
  storageBucket: "arreissem-react.appspot.com",
  messagingSenderId: "380902347740",
  appId: "1:380902347740:web:cec2ecbfc244b8ad7b7519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();