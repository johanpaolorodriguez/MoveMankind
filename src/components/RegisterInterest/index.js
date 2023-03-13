import { useContext } from "react";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/solid";

const RegisterInterestButton = ({
	firebase,
	setIsOpen,
	startupUid,
	userData,
}) => {
	const { authUser } = useContext(AuthUserContext);

	const userIsInterestedInStartup = () => {
		if (userData && userData.interestedIn) {
			return userData.interestedIn.includes(startupUid);
		} else {
			return false;
		}
	};

	const handleOnClick = async () => {
		if (authUser === null) {
			setIsOpen(true);
			return;
		}
		try {
			if (userIsInterestedInStartup()) {
				await firebase.doUnregisterStartupAsUser(
					authUser.authUser.uid,
					startupUid
				);
			} else {
				await firebase.doRegisterStartupAsUser(
					authUser.authUser.uid,
					startupUid
				);
				customToast();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const customToast = () => {
		return toast.custom((t) => (
			<div
				className={`${
					t.visible ? "animate-enter" : "animate-leave"
				} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
			>
				<div className="flex-1 w-0 p-4">
					<div className="flex items-start">
						<div className="flex-shrink-0 pt-0.5">
							<CheckCircleIcon className="w-10 h-10 text-green-500 rounded-full" />
						</div>
						<div className="flex-1 ml-3">
							<p className="text-sm font-medium text-gray-900">
								Thanks for registering your interest in
								this company! We’ll let you know when
								you can purchase a token.
							</p>
						</div>
					</div>
				</div>
				<div className="flex border-l border-gray-200">
					<button
						onClick={() => toast.dismiss(t.id)}
						className="flex items-center justify-center w-full p-4 text-sm font-medium text-indigo-600 border border-transparent rounded-none rounded-r-lg hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						Close
					</button>
				</div>
			</div>
		));
	};

	return (
		<>
			<button
				onClick={() => handleOnClick()}
				className={`${
					userIsInterestedInStartup()
						? "text-white bg-primary"
						: "text-gray-700"
				} w-full p-1  border border-black rounded-sm hover:bg-blue-700 hover:text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 hover:border-none focus:border-none | md:w-32 md:h-8`}
			>
				{userIsInterestedInStartup()
					? "Interested"
					: "I'm Interested"}
			</button>
		</>
	);
};

export default withFirebase(RegisterInterestButton);
