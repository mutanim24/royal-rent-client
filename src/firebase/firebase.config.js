// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDa3IQa1z_P5tzvtA3ZSjmJC00LmjGGI9I",
  authDomain: "royal-rent-acb9d.firebaseapp.com",
  projectId: "royal-rent-acb9d",
  storageBucket: "royal-rent-acb9d.appspot.com",
  messagingSenderId: "1091782834786",
  appId: "1:1091782834786:web:5d892e2868689abf0caf3b"
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

// Initialize Firebase authentication

const app = initializeApp(firebaseConfig);
export default app;