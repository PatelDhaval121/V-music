// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ1JgF1Oil5u7xmlemRJQMjrDG-0Rpql0",
  authDomain: "wind-music-3a480.firebaseapp.com",
  projectId: "wind-music-3a480",
  storageBucket: "wind-music-3a480.appspot.com",
  messagingSenderId: "622734512062",
  appId: "1:622734512062:web:7c026ff55bd84c77a973ef"
};
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const UserRef=collection(db,"user");
 export const PostRef=collection(db,"posts");
//const analytics = getAnalytics(app);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
