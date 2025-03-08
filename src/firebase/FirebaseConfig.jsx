// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZLVfr6rWz3rTwwSJOoWi5V2a3c4yiJsk",
  authDomain: "myecom-2b39c.firebaseapp.com",
  projectId: "myecom-2b39c",
  storageBucket: "myecom-2b39c.firebasestorage.app",
  messagingSenderId: "577800398838",
  appId: "1:577800398838:web:6f0dc443a3d879ab39c9d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);
export {fireDB,auth};