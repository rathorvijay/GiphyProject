// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0_SQKfU0Ykwcj1CyavH8YedfGNLOglYI",
  authDomain: "giphyproject-b28bf.firebaseapp.com",
  projectId: "giphyproject-b28bf",
  storageBucket: "giphyproject-b28bf.appspot.com",
  messagingSenderId: "575733410756",
  appId: "1:575733410756:web:a6a57aca5d9bd7fa885291",
  measurementId: "G-BSQGT0RMCF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app,auth};