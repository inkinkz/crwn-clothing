import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjvajs9iSr49TiHUxBVpMcvIbHgOkyPeY",
  authDomain: "crwn-clothing-5c521.firebaseapp.com",
  databaseURL: "https://crwn-clothing-5c521.firebaseio.com",
  projectId: "crwn-clothing-5c521",
  storageBucket: "crwn-clothing-5c521.appspot.com",
  messagingSenderId: "69561790225",
  appId: "1:69561790225:web:829c4a32d7b5dae781e6b0",
  measurementId: "G-2QL2KTBT6Q",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
