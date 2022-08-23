
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMD2J4bACey4EgBJDiKGxJetC0CzdS1GU",
  authDomain: "coderhouse-2a100.firebaseapp.com",
  projectId: "coderhouse-2a100",
  storageBucket: "coderhouse-2a100.appspot.com",
  messagingSenderId: "39279286916",
  appId: "1:39279286916:web:576fcf722ed9705e4700d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db