import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDKgw8MHWBSkzb_idlGkhXofRyMvZUVhik",
  authDomain: "klassportal.firebaseapp.com",
  projectId: "klassportal",
  storageBucket: "klassportal.appspot.com",
  messagingSenderId: "281805199662",
  appId: "1:281805199662:web:141ab4067203ceca5d02bf",
  measurementId: "G-FG7JTFR541"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider };
export default getFirestore();