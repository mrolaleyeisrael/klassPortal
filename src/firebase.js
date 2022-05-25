import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


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
const auth = getAuth();
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async (e) => {
  e.preventDefault
  const SignInWithGoogle = (e) =>{
  e.preventDefault();
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
};


  // try {
  //   e.preventDefault
  //   const res = await signInWithPopup(auth, googleProvider);
  //   const user = res.user;
  //   const q = query(collection(db, "users"), where("uid", "==", user.uid));
  //   const docs = await getDocs(q);
  //   if (docs.docs.length === 0) {
  //     await addDoc(collection(db, "users"), {
  //       uid: user.uid,
  //       name: user.displayName,
  //       authProvider: "google",
  //       email: user.email,
  //     });
  //   }
  // } catch (err) {
  //   console.error(err);
  //   alert(err.message);
  // }
};


// login with Email&Password 

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// logout function 

const logout = () => {
  signOut(auth);
};


export {
  auth,
  signInWithGoogle,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  logout,
};