import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDizLQOMbsrsy1OkP3ENhU8SN9aDBVnhww",
  authDomain: "quickeats-hackill.firebaseapp.com",
  projectId: "quickeats-hackill",
  storageBucket: "quickeats-hackill.appspot.com",
  messagingSenderId: "201887629317",
  appId: "1:201887629317:web:3afd67300898b25896dc6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
