import app from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore, connectFirestoreEmulator } from "@firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { seedAllCollections } from "./databaseSeeder";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";

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
      connectStorageEmulator(this.storage, "localhost", 9199);
    }
    // seedAllCollections(this.db).then(console.log("Seed successful."));
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
    //get all the documents under the startup's subsector subcollection
    const querySnapshot = await getDocs(
      collection(this.db, `startups/${uid}/subSectors`)
    );
    //push the IDs of the documents into an array
    await querySnapshot.forEach((doc) => {
      subSectorIDs.push(doc.id);
    });
    const subSectorDocs = await Promise.all(
      //retrieve the subSector document by ID
      subSectorIDs.map(async (subSectorID) => {
        const docSnap = await getDoc(doc(this.db, "subSectors", subSectorID));
        return docSnap.data();
      })
    );
    return subSectorDocs;
  };

  getAllStartupsInCategory = async (CategoryUID, filters) => {
    let startups = [];
    //map the filters to a where clause
    const constraints = filters.map((filter) => where(filter, "==", true));
    //get all startups in a category
    const startupsRef = collection(this.db, "startups");
    //query the categories array in strartups for a match in category id
    const categories = query(
      startupsRef,
      where("categories", "array-contains", CategoryUID),
      //destructure the constraints to be included in the query
      ...constraints
    );

    const querySnapshot = await getDocs(categories);
    querySnapshot.forEach((doc) => {
      startups = [...startups, doc.data()];
    });
    return startups;
  };

  getMostRecentStartup = async () => {
    let startup;
    const startupsRef = collection(this.db, "startups");
    const q = query(startupsRef, orderBy("createdAt"), limit(1));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      startup = doc.data();
    });
    return startup;
  };

  //*** CATEGORY API ***
  getAllCategories = async () => {
    let categories = [];
    const querySnaphshot = await getDocs(collection(this.db, "categories"));
    querySnaphshot.forEach((doc) => {
      categories = [...categories, doc.data()];
    });
    return categories;
  };

  getCategoryByID = async (uid) => {
    let category = await getDoc(doc(this.db, "categories", uid));
    return category.data();
  };

  //*** SECTOR API ***
  getAllSectors = async () => {
    let sectors = [];
    const querySnaphshot = await getDocs(collection(this.db, "sectors"));
    querySnaphshot.forEach((doc) => {
      sectors = [...sectors, doc.data()];
    });
    return sectors;
  };

  //*** SUBSECTOR API ***
  getAllSubSectors = async () => {
    let subSectors = [];
    const querySnaphshot = await getDocs(collection(this.db, "subSectors"));
    querySnaphshot.forEach((doc) => {
      subSectors = [...subSectors, doc.data()];
    });
    return subSectors;
  };
}

export default Firebase;
