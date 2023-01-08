import { useForm } from "react-hook-form";
import { useSignUp } from "../context";
import { Form } from "../forms/Form";
import { Field } from "../forms/Field";
import { Input } from "../forms/Input";
import { PasswordInput } from "../forms/PasswordInput";
import { Button } from "../forms/Button";
import ProgressBar from "../ProgressBar";
import { Link } from "react-router-dom";
import { withFirebase } from "../../Firebase";
import { useState, useEffect } from "react";

function getRefinedFirebaseAuthErrorMessage(errorMesssage) {
	return errorMesssage
		.replace("Firebase: ", "")
		.replace(/\(auth.*\)\.?/, "");
}

const CreateAccountBase = (props) => {
	const [firebaseError, setFirebaseError] = useState(null);
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm({ mode: "onSubmit" });
	const history = props.history;

	const saveData = async (data) => {
		try {
			const newUser =
				await props.firebase.doCreateUserWithEmailAndPassword(
					data.email,
					data.password
				);
			//add user to firestore database
			await props.firebase.doAddNewUserToDB(newUser.user.uid, {
				email: data.email,
			});

			history.push("/signup/about");
		} catch (error) {
			const refinedError = getRefinedFirebaseAuthErrorMessage(
				error.message
			);
			setFirebaseError(refinedError);
		}
	};

	return (
		<div className="flex items-center justify-center bg-white px-10 py-12 | sm:px-5 | lg:px-8">
			<div className="w-full max-w-md space-y-8">
				{/* <ProgressBar step={step} /> */}
				<div>
					<h2 className="mt-6 text-[28px] font-extrabold font-tertiary text-slate-900">
						Welcome!
					</h2>
					<p className="font-medium text-gray-400">
						Let's get started by creating an account
					</p>
					<p className="mt-2 text-sm text-gray-600">
						Or{" "}
						<Link
							to={"/signin"}
							className="font-medium text-blue-600 hover:text-blue-500"
						>
							Sign In
						</Link>
					</p>
				</div>
				<Form onSubmit={handleSubmit(saveData)}>
					<fieldset className="space-y-9">
						<legend className="sr-only">
							Create Account
						</legend>
						<Field label="Email" error={errors?.email}>
							<Input
								{...register("email", {
									required: "Email is required",
								})}
								type="email"
								id="email"
								placeholder="Email Address"
								autoComplete="email"
							/>
						</Field>

						<Field label="Password" error={errors?.password}>
							<PasswordInput
								{...register("password", {
									required: "Password is required",
								})}
								type="password"
								id="password"
							/>
						</Field>

						{firebaseError && (
							<small className="pt-6 text-sm font-medium text-red-500">
								{firebaseError}
							</small>
						)}

						<Button className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
							Create Account
						</Button>
					</fieldset>
				</Form>
			</div>
		</div>
	);
};

const CreateAccount = withFirebase(CreateAccountBase);

export default CreateAccount;
