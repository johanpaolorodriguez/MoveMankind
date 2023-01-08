import { useRef } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Modal from "../Modal";

const SignInOrUpPrompt = ({ isOpen, setIsOpen }) => {
	const cancelButtonRef = useRef(null);
	const history = useHistory();

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div className="sm:flex sm:items-start">
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<div className="mt-2">
								<p className="text-base">
									Please create an account or sign in
									to register your interest in this
									company.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 py-3 space-y-4 sm:px-6 sm:flex sm:flex-row-reverse md:space-y-0">
					<button
						type="button"
						className="inline-flex justify-center w-full px-4 py-2 text-base font-semibold border border-blue-400 rounded-md appearance-none hover:bg-blue-500 hover:text-white col-span-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
						onClick={() => {
							setIsOpen(false);
							history.push(ROUTES.SIGN_IN);
						}}
					>
						Sign In
					</button>
					<button
						type="button"
						className="inline-flex justify-center w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
						onClick={() => {
							setIsOpen(false);
							history.push(ROUTES.SIGN_UP);
						}}
						ref={cancelButtonRef}
					>
						Create Account
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default SignInOrUpPrompt;
