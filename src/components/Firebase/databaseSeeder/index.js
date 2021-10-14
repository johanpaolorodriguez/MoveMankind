import * as DATA from "./data";
import { collection, setDoc, doc, writeBatch } from "firebase/firestore";

const startupIDs = [];
const categoryIDs = [];
const sectorIDs = [];
const subSectorIDs = [];

async function seedStartupData(db) {
  try {
    for (const startup of DATA.STARTUPS) {
      const docRef = doc(collection(db, "startups"));
      await setDoc(docRef, { ...startup, uid: docRef.id });
      startupIDs.push(docRef.id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedCategories(db) {
  try {
    for (const category of DATA.CATEGORIES) {
      const docRef = doc(collection(db, "categories"));
      await setDoc(docRef, { ...category, uid: docRef.id });
      categoryIDs.push(docRef.id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedSectors(db) {
  try {
    for (const sector of DATA.SECTORS) {
      const docRef = doc(collection(db, "sectors"));
      await setDoc(docRef, { ...sector, uid: docRef.id });
      sectorIDs.push(docRef.id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedSubSectors(db) {
  try {
    for (const subSector of DATA.SUBSECTORS) {
      const docRef = doc(collection(db, "subSectors"));
      await setDoc(docRef, { ...subSector, uid: docRef.id });
      subSectorIDs.push(docRef.id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedStartupCategories(db) {
  try {
    for (const startupId of startupIDs) {
      const categoryId =
        categoryIDs[Math.floor(Math.random() * categoryIDs.length)];
      const startupRef = doc(
        db,
        `categories/${categoryId}/startups/${startupId}`
      );
      const categoryRef = doc(
        db,
        `startups/${startupId}/categories/${categoryId}`
      );
      //attach category subcollection to startups and vice versa
      const batch = writeBatch(db);
      batch.set(startupRef, {});
      batch.set(categoryRef, {});
      await batch.commit();
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedStartupSectors(db) {
  try {
    for (const startupId of startupIDs) {
      let randNum = Math.floor(Math.random() * 2) + 1;
      for (let i = 0; i <= randNum; i++) {
        const sectorId =
          sectorIDs[Math.floor(Math.random() * sectorIDs.length)];
        const startupRef = doc(db, `sectors/${sectorId}/startups/${startupId}`);
        const sectorRef = doc(db, `startups/${startupId}/sectors/${sectorId}`);
        //attach sector subcollection to startups and vice versa
        const batch = writeBatch(db);
        batch.set(startupRef, {});
        batch.set(sectorRef, {});
        await batch.commit();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedStartupSubsectors(db) {
  try {
    for (const startupId of startupIDs) {
      let randNum = Math.floor(Math.random() * 3);
      for (let i = 0; i <= randNum; i++) {
        const subSectorId =
          subSectorIDs[Math.floor(Math.random() * subSectorIDs.length)];
        const startupRef = doc(
          db,
          `subSectors/${subSectorId}/startups/${startupId}`
        );
        const subSectorRef = doc(
          db,
          `startups/${startupId}/subSectors/${subSectorId}`
        );
        //attach subSector subcollection to startups and vice versa
        const batch = writeBatch(db);
        batch.set(startupRef, {});
        batch.set(subSectorRef, {});
        await batch.commit();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export async function seedAllCollections(db) {
  await seedStartupData(db);
  await seedCategories(db);
  await seedSectors(db);
  await seedSubSectors(db);
  seedStartupCategories(db);
  seedStartupSectors(db);
  seedStartupSubsectors(db);
}
