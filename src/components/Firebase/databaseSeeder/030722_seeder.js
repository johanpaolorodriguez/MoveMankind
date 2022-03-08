import * as DATA from "./030722_data";
import {
  setDoc,
  doc,
  writeBatch,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";

function stringClean(string) {
  return string.replace(/[^A-Z0-9]+/gi, "").toLowerCase();
}

function stringToArray(string) {
  return string.split(", ");
}

const tagIDs = [];

async function seedStartupData(db) {
  try {
    for (const startup of DATA.STARTUPS) {
      const startupDocID = stringClean(startup.name);
      const startupDocRef = doc(db, "startups", startupDocID);
      const tags = stringToArray(startup.Tags);
      const startupTagIDs = [];
      const { Tags, ...startupWithoutTags } = startup;

      //create a doc for a tag if it doesn't exist
      await tags.forEach((tag) => {
        const tagDocID = stringClean(tag);
        startupTagIDs.push(tagDocID);

        if (!tagIDs.includes(tagDocID)) {
          const tagDocRef = doc(db, "tags", tagDocID);
          setDoc(tagDocRef, {
            name: tag,
            uid: tagDocRef.id,
            createdAt: serverTimestamp(),
          });
          tagIDs.push(tagDocRef.id);
        }
      });

      //for the tags field which contain an array of tagIDs
      const tagsMapObj = Object.fromEntries(
        startupTagIDs.map((startupTagID) => [[`tagsMap.${startupTagID}`], true])
      );

      await setDoc(startupDocRef, {
        ...startupWithoutTags,
        uid: startupDocRef.id,
        createdAt: serverTimestamp(),
      });

      //get startups and add tags
      const batch = writeBatch(db);

      batch.update(startupDocRef, {
        tags: arrayUnion(...startupTagIDs),
        ...tagsMapObj,
      });

      //iterate over the startup's tags and add the startup field as an array and a map
      for (const startupTagID of startupTagIDs) {
        const tagDocRef = doc(db, "tags", startupTagID);
        batch.update(tagDocRef, {
          startups: arrayUnion(startupDocRef.id),
          [`startupsMap.${startupDocRef.id}`]: true,
        });
      }

      await batch.commit();
    }
  } catch (error) {
    console.log(error);
  }
}

export async function seedAllCollections(db) {
  await seedStartupData(db);
}
