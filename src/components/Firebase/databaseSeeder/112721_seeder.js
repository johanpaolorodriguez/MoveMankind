import * as DATA from "./11272021_data";
import {
  collection,
  setDoc,
  doc,
  writeBatch,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";

const startupIDs = [];
const categoryIDs = [];
const sectorIDs = [];
const subSectorIDs = [];

function stringClean(string) {
  return string.replace(/[^A-Z0-9]+/gi, "").toLowerCase();
}

async function seedStartupData(db) {
  try {
    for (const startup of DATA.STARTUPS) {
      const docID = stringClean(startup.name);
      const docRef = doc(db, "startups", docID);
      await setDoc(docRef, {
        ...startup,
        uid: docRef.id,
        createdAt: serverTimestamp(),
      });
      startupIDs.push(docRef.id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedCategories(db) {
  try {
    for (const category of DATA.CATEGORIES) {
      const docID = stringClean(category.name);
      const docRef = doc(db, "categories", docID);
      await setDoc(docRef, {
        ...category,
        uid: docRef.id,
        createdAt: serverTimestamp(),
      });
      categoryIDs.push(docRef.id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedSectors(db) {
  try {
    for (const sector of DATA.SECTORS) {
      const docID = stringClean(sector.name);
      const docRef = doc(db, "sectors", docID);
      await setDoc(docRef, {
        ...sector,
        uid: docRef.id,
        createdAt: serverTimestamp(),
      });
      sectorIDs.push(docRef.id);
    }
  } catch (error) {
    console.log(error);
  }
}

async function seedSubSectors(db) {
  try {
    for (const subSector of DATA.SUBSECTORS) {
      const docID = stringClean(subSector.name);
      const docRef = doc(db, "subSectors", docID);
      await setDoc(docRef, {
        ...subSector,
        uid: docRef.id,
        createdAt: serverTimestamp(),
      });
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
      const batch = writeBatch(db);
      //get startup and add the field categories which contains an array of categoryIDs
      const startupRef = doc(db, "startups", startupId);
      batch.update(startupRef, {
        categories: arrayUnion(categoryId),
        [`categoriesMap.${categoryId}`]: true,
      });
      //get categories and add the field startups which contains an array of startupIDs
      const categoryRef = doc(db, "categories", categoryId);
      batch.update(categoryRef, {
        startups: arrayUnion(startupId),
        [`startupsMap.${startupId}`]: true,
      });

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
        const batch = writeBatch(db);
        //get startup and add the field sectors which contains an array of sectorIDs
        const startupRef = doc(db, "startups", startupId);
        batch.update(startupRef, {
          sectors: arrayUnion(sectorId),
          [`sectorsMap.${sectorId}`]: true,
        });
        //get sectors and add the field startups which contains an array of startupIDs
        const categoryRef = doc(db, "sectors", sectorId);
        batch.update(categoryRef, {
          startups: arrayUnion(startupId),
          [`startupsMap.${startupId}`]: true,
        });

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
      let randNum = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i <= randNum; i++) {
        const subSectorId =
          subSectorIDs[Math.floor(Math.random() * subSectorIDs.length)];
        const batch = writeBatch(db);
        //get startup and add the field subSectors which contains an array of sectorIDs
        const startupRef = doc(db, "startups", startupId);
        batch.update(startupRef, {
          subSectors: arrayUnion(subSectorId),
          [`subSectorsMap.${subSectorId}`]: true,
        });
        //get subSectors and add the field startups which contains an array of startupIDs
        const subSectorRef = doc(db, "subSectors", subSectorId);
        batch.update(subSectorRef, {
          startups: arrayUnion(startupId),
          [`startupsMap.${startupId}`]: true,
        });

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
