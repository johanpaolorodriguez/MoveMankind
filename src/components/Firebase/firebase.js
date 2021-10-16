import app from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore, connectFirestoreEmulator } from "@firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { seedAllCollections } from "./databaseSeeder";

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
    this.storage = getStorage();
    // eslint-disable-next-line no-restricted-globals
    if (location.hostname === "localhost") {
      this.auth.useEmulator("http://localhost:9099");
      connectFirestoreEmulator(this.db, "localhost", 8080);
      // connectStorageEmulator(this.storage, "localhost", 9199);
    }
    // seedAllCollections(this.db);
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
  getAllStartups = () => getDocs(collection(this.db, "startups"));
  getStartupByID = (uid) => getDoc(doc(this.db, "startups", uid));
  getStartupSubsectors = async (uid) => {
    const subSectorIDs = [];
    const querySnapshot = await getDocs(
      collection(this.db, `startups/${uid}/subSectors`)
    );
    await querySnapshot.forEach((doc) => {
      subSectorIDs.push(doc.id);
    });
    const subSectorDocs = await Promise.all(
      subSectorIDs.map(async (id) => {
        const docSnap = await getDoc(doc(this.db, "subSectors", id));
        return docSnap.data();
      })
    );
    console.log(subSectorDocs);
    return subSectorDocs;
  };
}

export default Firebase;
