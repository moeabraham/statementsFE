import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAVr-wXoS2v9wxPf1fbZMszDK14Unr5uC8",
  authDomain: "statements-85d67.firebaseapp.com",
  projectId: "statements-85d67",
  storageBucket: "statements-85d67.appspot.com",
  messagingSenderId: "53473493610",
  appId: "1:53473493610:web:b35b5966063bdecbcf0013"
};

// Initialize Firebase
firebase.initializeApp(config);


// module.exports = default;

const googleProvider = new firebase.auth.GoogleAuthProvider();

// Reference to firebase auth
// factory function , returns an object
const auth = firebase.auth();

// Set up auth functions
function login() {
    auth.signInWithPopup(googleProvider);
    // firebase.auth().signInWithPopup(googleProvider)
    console.log("logged")

}

function logout() {
    auth.signOut();
    // firebase.auth().signOut
    console.log("logged out")

}

// Export auth functions
export {
    login,
    logout,
    auth
}
