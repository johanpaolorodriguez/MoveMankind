import { useRef } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Modal from "../Modal";

const ContributePrompt = ({ isOpen, setIsOpen }) => {
	const cancelButtonRef = useRef(null);
	const history = useHistory();

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div className="justify-center sm:flex">
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<div className="mt-2 space-y-4">
								<p className="text-xl">
									Please enter your email address
								</p>
								<p className="text-sm">
									We will contact you with more
									information.
								</p>

								<input
									className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none autofill:bg-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
									id="email-address"
									name="email"
									type="email"
									placeholder="Email Address"
									autoComplete="email"
									required
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="justify-center px-4 py-3 space-y-4 sm:px-6 sm:flex md:space-y-0">
					<button
						type="button"
						className="inline-flex justify-center w-full px-8 py-2 mb-8 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
						onClick={() => {
							setIsOpen(false);
						}}
						ref={cancelButtonRef}
					>
						Submit
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ContributePrompt;
