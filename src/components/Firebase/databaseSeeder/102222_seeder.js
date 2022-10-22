import * as DATA from "./102222_data";
import {
	setDoc,
	doc,
	writeBatch,
	serverTimestamp,
	arrayUnion,
} from "firebase/firestore";

import { ref, listAll, getDownloadURL } from "firebase/storage";

function stringClean(string) {
	return string.replace(/[^A-Z0-9]+/gi, "").toLowerCase();
}

function stringToArray(string) {
	return string.split(", ");
}

function removeExtFromName(string) {
	return string.split(".").shift();
}

const tagIDs = [];
const pathsOfImages = {};
const sectors = [];
const subsectors = [];

async function seedStartupData(db, storage) {
	try {
		const listRef = ref(storage, "/");
		const storageList = await listAll(listRef);

		storageList.items.forEach((itemRef) => {
			getDownloadURL(itemRef).then((url) => {
				pathsOfImages[removeExtFromName(itemRef.name)] = url;
			});
		});

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
					let category = "";

					if (
						[
							"artificialintelligence",
							"biotechnology",
							"climate",
							"space",
						].includes(tagDocID)
					) {
						sectors.push(tagDocID);
						category = "sector";
					} else {
						subsectors.push(tagDocRef.id);
						category = "subsector";
					}

					setDoc(tagDocRef, {
						name: tag,
						uid: tagDocRef.id,
						[category]: true,
						createdAt: serverTimestamp(),
					});

					tagIDs.push(tagDocRef.id);
				}
			});

			//for the tags field which contain an array of tagIDs
			const tagsMapObj = Object.fromEntries(
				startupTagIDs.map((startupTagID) => [
					[`tagsMap.${startupTagID}`],
					true,
				])
			);
			await setDoc(startupDocRef, {
				...startupWithoutTags,
				uid: startupDocRef.id,
				createdAt: serverTimestamp(),
			});

			//get startups and add tags
			const batch = writeBatch(db);
			const startupLogo = pathsOfImages[startupDocID]
				? pathsOfImages[startupDocID]
				: null;
			batch.update(startupDocRef, {
				logo: startupLogo,
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

		//create category document and add sectors and subsectors
		const sectorsMapsObj = Object.fromEntries(
			sectors.map((sector) => [[sector], true])
		);

		const subsectorsMapsObj = Object.fromEntries(
			subsectors.map((subsector) => [[subsector], true])
		);

		await setDoc(doc(db, "categories", "sectors"), {
			uid: "sectors",
			tags: arrayUnion(...sectors),
			tagsMap: sectorsMapsObj,
			createdAt: serverTimestamp(),
		});

		await setDoc(doc(db, "categories", "subsectors"), {
			uid: "subsectors",
			tags: arrayUnion(...subsectors),
			tagsMap: subsectorsMapsObj,
			createdAt: serverTimestamp(),
		});
	} catch (error) {
		console.log(error);
	}
}

export async function seedAllCollections(db, storage) {
	await seedStartupData(db, storage);
}
