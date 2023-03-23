import { useEffect, useContext, useState } from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconFilled } from "@heroicons/react/solid";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";
import { onSnapshot, doc } from "@firebase/firestore";

const FollowButton = ({ firebase, setIsOpen, startupUid }) => {
	const { authUser } = useContext(AuthUserContext);
	const [snapshotData, setSnapshotData] = useState(null);

	const userIsFollowingStartup = () => {
		if (snapshotData && snapshotData?.following?.includes(startupUid)) {
			return true;
		} else {
			return false;
		}
	};
	useEffect(() => {
		const getUserData = () => {
			if (authUser) {
				try {
					const unsubscribe = onSnapshot(
						doc(firebase.db, "users", authUser.authUser.uid),
						(doc) => {
							setSnapshotData(doc.data());
						}
					);
				} catch (error) {
					console.log(error);
				}
			}
		};
		getUserData();
	}, [authUser, firebase.db]);

	const handleOnClick = async () => {
		if (authUser === null) {
			setIsOpen(true);
			return;
		}

		try {
			if (userIsFollowingStartup()) {
				await firebase.doUnfollowStartupAsUser(
					authUser.authUser.uid,
					startupUid
				);
			} else {
				await firebase.doFollowStartupAsUser(
					authUser.authUser.uid,
					startupUid
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<button
			onClick={() => handleOnClick()}
			className="flex justify-center w-full px-8 py-4 text-blue-500 bg-white border border-blue-500 rounded-md text-button font-primary space-x-2 items-center | md:order-first"
		>
			{userIsFollowingStartup() ? (
				<>
					<BookmarkIconFilled className="w-6 h-6 text-blue-500" />
					<span className="">Keep me updated</span>
				</>
			) : (
				<>
					<BookmarkIcon className="w-6 h-6 text-blue-500" />
					<span className="">Keep me updated</span>
				</>
			)}
		</button>
	);
};

export default withFirebase(FollowButton);
