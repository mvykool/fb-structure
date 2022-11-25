// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUt40ensOMQaLD28fkWV3Lp9dCYFWaNxA",
  authDomain: "facebook-clone-3f34e.firebaseapp.com",
  projectId: "facebook-clone-3f34e",
  storageBucket: "facebook-clone-3f34e.appspot.com",
  messagingSenderId: "36770236918",
  appId: "1:36770236918:web:a97dd3539eaceffe119fd7"
};

// Initialize Firebase
const app = !getApps.lenght ? initializeApp(firebaseConfig) : app();

const database = getFirestore();

const storage = getStorage(app);

export { database, storage };