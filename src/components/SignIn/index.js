import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../SignUp";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { useInput } from "../Hooks/input-hook";
import { PasswordForgetLink } from "../PasswordForget";
import logo from "../../assets/move_mankind_logo.svg";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 | sm:px-5 | lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="w-auto h-12 mx-auto" src={logo} alt="Workflow" />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign In
          </h2>
          <SignUpLink />
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                {...bindEmail}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email Address"
                required
              />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...bindPassword}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <PasswordForgetLink />
              </div>
            </div>

            <button
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primary group hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              type="submit"
            >
              Sign In
            </button>
            {error && <p>{error.message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
