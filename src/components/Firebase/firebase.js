import app from "firebase/compat/app";
import "firebase/compat/auth";
import {
	getFirestore,
	connectFirestoreEmulator,
	writeBatch,
	arrayUnion,
	arrayRemove,
	deleteField,
} from "@firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { seedAllCollections } from "./databaseSeeder/102222_seeder";
import {
	collection,
	doc,
	setDoc,
	getDoc,
	updateDoc,
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
		this.auth_ = app.auth;
		this.db = getFirestore();
		this.storage = getStorage();
		this.functions = getFunctions();

		// connectFirestoreEmulator(this.db, "localhost", 8080);
		// connectStorageEmulator(this.storage, "localhost", 9199);

		// try {
		// 	seedAllCollections(this.db, this.storage).then(
		// 		console.log("seeding successful")
		// 	);
		// } catch (error) {
		// 	console.log(error);
		// }

		// const addDefaultAdmin = httpsCallable(this.functions, "addAdminRole");

		// addDefaultAdmin({ email: "testing@test.com" })
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	}

	// *** AUTH API ***
	doSignInWithGoogle = () => {
		this.auth.signInWithPopup(new this.auth_.GoogleAuthProvider());
	};

	doSignInWithFacebook = () => {
		this.auth.signInWithPopup(new this.auth_.FacebookAuthProvider());
	};

	doSignInWithTwitter = () => {
		this.auth.signInWithPopup(new this.auth_.TwitterAuthProvider());
	};

	doSignInWithGithub = () => {
		this.auth.signInWithPopup(new this.auth_.GithubAuthProvider());
	};

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

	doAddUserInfo = (data) => {
		const user = this.auth.currentUser.uid;
		updateDoc(doc(this.db, "users", user), {
			...data,
		});
	};

	doInvestAsUser = (db, userId, startupId) => {
		const batch = writeBatch(db);
		//get startup and add the field investors which contains an array of userIds
		const startupRef = doc(db, "startups", startupId);
		batch.update(startupRef, {
			investors: arrayUnion(userId),
			// [`investorsMap.${userId}`]: true,
		});
		//get users and add the field investedIn which contains an array of startupIds
		const userRef = doc(db, "users", userId);
		batch.update(userRef, {
			investedIn: arrayUnion(userId),
			// [`investedInMap.${userId}`]: true,
		});
	};

	doFollowStartupAsUser = async (userId, startupId) => {
		try {
			const batch = writeBatch(this.db);
			//get startup and add the field following which contains an array of userIds
			const startupRef = doc(this.db, "startups", startupId);
			batch.update(startupRef, {
				followers: arrayUnion(userId),
				[`followersMap.${userId}`]: true,
			});
			//get user and add the field investedIn which contains an array of startupIds
			const userRef = doc(this.db, "users", userId);
			batch.update(userRef, {
				following: arrayUnion(startupId),
				[`followingMap.${startupId}`]: true,
			});

			await batch.commit();
		} catch (error) {
			console.log(error);
		}
	};

	doEditPageIndexAsAdmin = async (startupId, data) => {
		const startupRef = doc(this.db, "startups", startupId);

		try {
			await updateDoc(startupRef, {
				pageIndex: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	doEditStartupPageAsAdmin = async (startupId, data) => {
		try {
			const startupRef = doc(this.db, "startups", startupId);
			const key = Object.keys(data)[0];

			await updateDoc(startupRef, {
				[`page.${key}`]: data[key],
				pageIndex: arrayUnion(key),
			});
		} catch (error) {
			console.log(error);
		}
	};

	doDeleteStartupPageFieldAsAdmin = async (startupId, title) => {
		try {
			const startupRef = doc(this.db, "startups", startupId);

			await updateDoc(startupRef, {
				[`page.${title}`]: deleteField(),
				pageIndex: arrayRemove(title),
			});
		} catch (error) {
			console.log(error);
		}
	};

	doRegisterStartupAsUser = async (userId, startupId) => {
		try {
			const batch = writeBatch(this.db);
			//get startup and add the field following which contains an array of userIds
			const startupRef = doc(this.db, "startups", startupId);
			batch.update(startupRef, {
				interested: arrayUnion(userId),
				[`interestedMap.${userId}`]: true,
			});
			//get user and add the field investedIn which contains an array of startupIds
			const userRef = doc(this.db, "users", userId);
			batch.update(userRef, {
				interestedIn: arrayUnion(startupId),
				[`interestedInMap.${startupId}`]: true,
			});

			await batch.commit();
		} catch (error) {
			console.log(error);
		}
	};

	doUnfollowStartupAsUser = async (userId, startupId) => {
		try {
			const batch = writeBatch(this.db);
			//get startup and add the field following which contains an array of userIds
			const startupRef = doc(this.db, "startups", startupId);
			batch.update(startupRef, {
				followers: arrayRemove(userId),
				[`followersMap.${userId}`]: deleteField(),
			});
			//get user and add the field investedIn which contains an array of startupIds
			const userRef = doc(this.db, "users", userId);
			batch.update(userRef, {
				following: arrayRemove(startupId),
				[`followingMap.${startupId}`]: deleteField(),
			});

			await batch.commit();
		} catch (error) {
			console.log(error);
		}
	};

	doUnregisterStartupAsUser = async (userId, startupId) => {
		try {
			const batch = writeBatch(this.db);
			//get startup and add the field following which contains an array of userIds
			const startupRef = doc(this.db, "startups", startupId);
			batch.update(startupRef, {
				interested: arrayRemove(userId),
				[`interestedMap.${userId}`]: deleteField(),
			});
			//get user and add the field investedIn which contains an array of startupIds
			const userRef = doc(this.db, "users", userId);
			batch.update(userRef, {
				interestedIn: arrayRemove(startupId),
				[`interestedInMap.${startupId}`]: deleteField(),
			});

			await batch.commit();
		} catch (error) {
			console.log(error);
		}
	};

	getUserByID = async (uid) => {
		let user = await getDoc(doc(this.db, "users", uid));
		return user.data();
	};

	// getUserSnapshotByID = (uid) => {
	//   const unsub = onSnapshot(doc(this.db, "users", uid), (doc) => {
	//     if (doc.exists()) {
	//       return doc.data();
	//     }
	//   });
	// };

	getAllUsers = () => getDocs(collection(this.db, "users"));

	// *** STARTUP API ***
	addStartup = (data) => {
		const docRef = doc(collection(this.db, "startups"));
		setDoc(docRef, { ...data, uid: docRef.id });
	};

	getAllStartups = async () => {
		let startups = [];
		const querySnaphshot = await getDocs(collection(this.db, "startups"));
		querySnaphshot.forEach((doc) => {
			startups = [...startups, doc.data()];
		});
		return startups;
	};

	getStartupByID = async (uid) => {
		let startup = await getDoc(doc(this.db, "startups", uid));
		return startup.data();
	};

	getStartupSubsectors = async (uid) => {
		const subSectorIDs = [];
		//get all the documents under the startup's subsector subcollection
		const querySnapshot = await getDocs(
			collection(this.db, `startups/${uid}/subSectors`)
		);
		//push the IDs of the documents into an array
		querySnapshot.forEach((doc) => {
			subSectorIDs.push(doc.id);
		});
		const subSectorDocs = await Promise.all(
			//retrieve the subSector document by ID
			subSectorIDs.map(async (subSectorID) => {
				const docSnap = await getDoc(
					doc(this.db, "subSectors", subSectorID)
				);
				return docSnap.data();
			})
		);
		return subSectorDocs;
	};

	getAllStartupsWithFilters = async (filters, limitBy) => {
		let startups = [];
		//map the filters to a where clause
		const constraints = filters.map((filter) =>
			where(filter, "==", true)
		);
		if (limitBy) {
			constraints.push(limit(limitBy));
		}
		const startupsRef = collection(this.db, "startups");
		const data = query(
			startupsRef,
			//destructure the constraints to be included in the query
			...constraints
		);

		const querySnapshot = await getDocs(data);
		querySnapshot.forEach((doc) => {
			startups = [...startups, doc.data()];
		});
		return startups;
	};

	// getRelatedStartups = async();

	getAllStartupsWithID = async (startupIDs) => {
		// const startups = startupIDs.map((id) => this.getStartupByID(id));
		const startups = await Promise.all(
			startupIDs.map((id) => this.getStartupByID(id))
		);
		return startups;
	};

	getAllStartupsInCategory = async (CategoryUID, filters) => {
		let startups = [];
		//map the filters to a where clause
		const constraints = filters.map((filter) =>
			where(filter, "==", true)
		);
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
		const querySnaphshot = await getDocs(
			collection(this.db, "categories")
		);
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
		const q = query(
			collection(this.db, "tags"),
			where("sector", "==", true)
		);
		const querySnaphshot = await getDocs(q);
		querySnaphshot.forEach((doc) => {
			sectors = [...sectors, doc.data()];
		});
		return sectors;
	};

	//*** SUBSECTOR API ***
	getAllSubSectors = async () => {
		let subSectors = [];
		const q = query(
			collection(this.db, "tags"),
			where("subsector", "==", true)
		);
		const querySnaphshot = await getDocs(q);
		querySnaphshot.forEach((doc) => {
			subSectors = [...subSectors, doc.data()];
		});
		return subSectors;
	};
}

export default Firebase;
