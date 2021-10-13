import * as DATA from "./data";
import { collection, setDoc, getDocs, doc } from "firebase/firestore";

export function seedStartupData(db) {
  try {
    DATA.STARTUPS.forEach(async (startup) => {
      const docRef = doc(collection(db, "startups"));
      await setDoc(docRef, { ...startup, uid: docRef.id });
    });
  } catch (error) {
    console.log(error);
  }
}
