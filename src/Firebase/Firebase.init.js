// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvOaJfy-1HyMbXUmyObuj05E7D3PJs4CM",
  authDomain: "genius-car-services-b39e8.firebaseapp.com",
  projectId: "genius-car-services-b39e8",
  storageBucket: "genius-car-services-b39e8.appspot.com",
  messagingSenderId: "762604214926",
  appId: "1:762604214926:web:ab40a26a0c8acb241507df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;