import React, { useState } from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { useInput } from "../Hooks/input-hook";
import * as ROUTES from "../../constants/routes";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/solid";

const PasswordForgetPage = () => (
	<div>
		<PasswordForgetForm />
	</div>
);

const PasswordForgetFormBase = (props) => {
	const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
	const [error, setError] = useState(null);

	const onSubmit = (event) => {
		props.firebase
			.doPasswordReset(email)
			.then(() => {
				resetEmail();
				customToast();
			})
			.catch((error) => {
				setError(error);
			});

		event.preventDefault();
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
								An email has been sent to you with
								instructions on how to reset your
								password
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
		<div className="flex items-center justify-center bg-white px-10 py-12 | sm:px-5 | lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-[28px] font-extrabold font-tertiary text-slate-900">
						Reset your password
					</h2>
					<p className="font-medium text-gray-400">
						An email will be sent to you
					</p>
					<p className="mt-2 text-sm text-gray-600">
						Or{" "}
						<Link
							to={"/signup"}
							className="font-medium text-blue-600 hover:text-blue-500"
						>
							Sign Up
						</Link>
					</p>
				</div>

				<form onSubmit={onSubmit} className="mt-8 space-y-6">
					<div className="rounded-md shadow-sm space-y-9">
						<div className="space-y-2">
							<label
								htmlFor="email-address"
								className="font-semibold text-blue-800 text-medium"
							>
								Email
							</label>
							<input
								{...bindEmail}
								className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								id="email-address"
								name="email"
								type="email"
								placeholder="Email Address"
								autoComplete="email"
								required
							/>
						</div>

						<button
							className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							// disabled={isInvalid}
							type="submit"
						>
							Reset Password
						</button>
						{error && <p>{error.message}</p>}
					</div>
				</form>
			</div>
		</div>
	);
};

const PasswordForgetLink = () => (
	<Link
		to={ROUTES.PASSWORD_FORGET}
		className="text-xs text-gray-600 hover:text-blue-500"
	>
		Forgot Password?
	</Link>
);

const PasswordForgetForm = compose(withFirebase)(PasswordForgetFormBase);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
