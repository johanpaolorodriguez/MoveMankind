import app from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore, connectFirestoreEmulator } from "@firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { seedStartupData } from "./databaseSeeder";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = getFirestore();
    // eslint-disable-next-line no-restricted-globals
    if (location.hostname === "localhost") {
      connectFirestoreEmulator(this.db, "localhost", 8080);
      this.auth.useEmulator("http://localhost:9099");
    }
    // seedStartupData(this.db);
  }
  // *** AUTH API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** USER API ***
  doAddNewUserToDB = (uid, data) => {
    setDoc(doc(this.db, "users", uid), data);
  };
  getAllUsers = () => getDocs(collection(this.db, "users"));

  // *** STARTUP API ***
  addStartup = (data) => {
    const docRef = doc(collection(this.db, "startups"));
    setDoc(docRef, { ...data, uid: docRef.id });
  };
  getStartupByID = (uid) => getDoc(doc(this.db, "startups", uid));
  getAllStartups = () => getDocs(collection(this.db, "startups"));
}

export default Firebase;
