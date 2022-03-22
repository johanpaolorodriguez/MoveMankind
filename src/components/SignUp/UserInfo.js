import React from "react";
import ProgressBar from "./ProgressBar";
const UserInfo = ({
  bindName,
  bindCountry,
  bindHeadline,
  bindWebsite,
  bindLinkedin,
  bindTwitter,
  onSubmit,
  step,
}) => {
  return (
    <div className="flex items-center justify-center bg-white px-10 py-12 | sm:px-5 | lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <ProgressBar step={step} />
        <h2 className="mt-6 text-[24px] font-extrabold font-tertiary text-slate-900">
          Tell us about yourself
        </h2>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-9">
            <div className="space-y-2">
              <label
                htmlFor="Full Name"
                className="font-semibold text-blue-800 text-medium"
              >
                Full Name
                <span className="text-orange-500"> *</span>
              </label>
              <input
                {...bindName}
                className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                id="full-name"
                name="full name"
                type="full name"
                placeholder=""
                autoComplete="name"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="country"
                className="font-semibold text-blue-800 text-medium"
              >
                Country
                <span className="text-orange-500"> *</span>
              </label>
              <input
                {...bindCountry}
                className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                id="country"
                name="Country"
                type="country"
                placeholder=""
                autoComplete="country"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="headline"
                className="font-semibold text-blue-800 text-medium"
              >
                Please introduce yourself in one sentence
                <span className="text-orange-500"> *</span>
              </label>
              <input
                {...bindHeadline}
                className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                id="headline"
                name="headline"
                type="headline"
                placeholder=""
                autoComplete="headline"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="Personal Website"
                className="font-semibold text-blue-800 text-medium"
              >
                Personal Website
              </label>
              <input
                {...bindWebsite}
                className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                id="Personal Website"
                name="Personal Website"
                type="Personal Website"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="LinkedIn"
                className="font-semibold text-blue-800 text-medium"
              >
                LinkedIn URL
              </label>
              <input
                {...bindLinkedin}
                className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                id="LinkedIn"
                name="LinkedIn"
                type="LinkedIn"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="twitter"
                className="font-semibold text-blue-800 text-medium"
              >
                Twitter Handle
              </label>
              <input
                {...bindTwitter}
                className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                id="twitter"
                name="twitter"
                type="twitter"
                placeholder=""
                autoComplete="twitter"
              />
            </div>

            <button
              className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              // disabled={isInvalid}
              type="submit"
            >
              Next
            </button>
            {/* {error && <p>{error.message}</p>} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
