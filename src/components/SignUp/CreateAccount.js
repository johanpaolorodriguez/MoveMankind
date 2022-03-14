import React from "react";
import SignInWithGroup from "../SignIn/SigninWiithGroup";
import ProgressBar from "./ProgressBar";

const CreateAccount = ({
  bindUsername,
  bindEmail,
  bindPasswordOne,
  bindPasswordTwo,
  onSubmit,
  isInvalid,
  error,
  step,
}) => {
  return (
    <div className="flex items-center justify-center bg-white px-10 py-12 | sm:px-5 | lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <ProgressBar step={step} />
        <div>
          <h2 className="mt-6 text-[28px] font-extrabold font-tertiary text-slate-900">
            Welcome!
          </h2>
          <p className="font-medium text-gray-400">
            Let's get started by creating an account
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
              <input
                {...bindPasswordOne}
                className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md bg-blue-50 appearance-no ne focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                id="passwordOne"
                name="passwordOne"
                type="password"
                placeholder="8-20 characters, at least 1 number"
                required
              />
            </div>

            <button
              className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              // disabled={isInvalid}
              type="submit"
            >
              Create account
            </button>
            {error && <p>{error.message}</p>}
          </div>
        </form>

        <SignInWithGroup />
      </div>
    </div>
  );
};

export default CreateAccount;