import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { useInput } from "../Hooks/input-hook";

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const SignUpFormBase = (props) => {
  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername,
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: passwordOne,
    bind: bindPasswordOne,
    reset: resetPasswordOne,
  } = useInput("");
  const {
    value: passwordTwo,
    bind: bindPasswordTwo,
    reset: resetPasswordTwo,
  } = useInput("");
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const authUser = await props.firebase.doCreateUserWithEmailAndPassword(
        email,
        passwordOne
      );
      //add user to firestore database
      await props.firebase.doAddNewUserToDB(authUser.user.uid, {
        username: username,
        email: email,
      });
      resetUsername();
      resetEmail();
      resetPasswordOne();
      resetPasswordTwo();
      props.history.push(ROUTES.HOME);
    } catch (event) {
      setError(error);
      console.log(error);
    }
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 | sm:px-5 | lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img
            className="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign Up
          </h2>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div className="space-y-2">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                {...bindUsername}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                autoComplete="username"
                required
              />
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                {...bindEmail}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                required
              />
              <label htmlFor="passwordOne" className="sr-only">
                Password
              </label>
              <input
                {...bindPasswordOne}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                id="passwordOne"
                name="passwordOne"
                type="password"
                placeholder="Password"
                required
              />
              <label htmlFor="passwordTwo" className="sr-only">
                Confirm Password
              </label>
              <input
                {...bindPasswordTwo}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                id="passwordTwo"
                name="passwordTwo"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md group hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              disabled={isInvalid}
              type="submit"
            >
              Sign Up
            </button>
            {error && <p>{error.message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

const SignUpLink = () => (
  <p className="mt-2 text-sm text-center text-gray-600">
    <span class="text-gray-600 font-medium">
      Don't have an account?{" "}
      <Link className="hover:gray-indigo-500" to={ROUTES.SIGN_UP}>
        Sign Up
      </Link>
    </span>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
