import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { useInput } from "../Hooks/input-hook";
import { PasswordForgetLink } from "../PasswordForget";
import logo from "../../assets/move_mankind_logo.svg";
import SigninWiithGroup from "./SigninWiithGroup";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const SignInPage = () => (
	<div>
		<SignInForm />
	</div>
);

const SignInFormBase = (props) => {
	const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
	const {
		value: password,
		bind: bindPassword,
		reset: resetPassword,
	} = useInput("");
	const [error, setError] = useState(null);

	const onSubmit = (event) => {
		props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then((authUser) => {
				resetEmail();
				resetPassword();
				props.history.push(ROUTES.STARTUPS);
			})
			.catch((error) => {
				setError(error);
			});
		event.preventDefault();
	};

	const [passwordInputType, setPasswordInputType] = useState("password");

	const togglePassword = () => {
		passwordInputType === "password"
			? setPasswordInputType("text")
			: setPasswordInputType("password");
	};

	return (
		<div className="flex items-center justify-center bg-white px-10 py-12 | sm:px-5 | lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-[28px] font-extrabold font-tertiary text-slate-900">
						Welcome!
					</h2>
					<p className="font-medium text-gray-400">
						Sign in to your account
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

						<div className="space-y-2">
							<label
								htmlFor="passwordOne"
								className="font-semibold text-blue-800 text-medium"
							>
								Password
							</label>
							<div className="relative flex justify-between w-full h-12 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md bg-blue-50 appearance-no ne focus-within:outline-none focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:z-10 sm:text-sm">
								<input
									{...bindPassword}
									className="w-full h-full px-3 py-2 text-sm text-blue-600 placeholder-blue-400 bg-transparent autofill:bg-none focus:outline-none "
									id="passwordOne"
									name="passwordOne"
									type={passwordInputType}
									placeholder="8-20 characters, at least 1 number"
									required
								/>
								<button
									className="p-2"
									type="button"
									onClick={togglePassword}
								>
									{passwordInputType ===
									"password" ? (
										<EyeIcon className="w-5 h-5" />
									) : (
										<EyeOffIcon className="w-5 h-5" />
									)}
								</button>
							</div>
							<div className="flex justify-end w-full">
								{PasswordForgetLink()}
							</div>
						</div>

						<button
							className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							// disabled={isInvalid}
							type="submit"
						>
							Sign In
						</button>
						{error && <p>{error.message}</p>}
					</div>
				</form>

				{/* <SigninWiithGroup /> */}
			</div>
		</div>
	);
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
