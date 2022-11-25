

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUt40ensOMQaLD28fkWV3Lp9dCYFWaNxA",
  authDomain: "facebook-clone-3f34e.firebaseapp.com",
  projectId: "facebook-clone-3f34e",
  storageBucket: "facebook-clone-3f34e.appspot.com",
  messagingSenderId: "36770236918",
  appId: "1:36770236918:web:a97dd3539eaceffe119fd7"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };