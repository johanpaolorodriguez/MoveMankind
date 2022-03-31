import React from "react";
import ProgressBar from "./ProgressBar";

const InvestmentPreferences = ({ step, onSubmit }) => {
  return (
    <div className="flex items-center justify-center bg-white px-10 py-12 | sm:px-5 | lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <ProgressBar step={step} />
        <h2 className="mt-6 text-[24px] font-extrabold font-tertiary text-slate-900">
          Investment preferences
        </h2>
        <p className="">
          This will help us figure out what investment options may be of
          interest to you.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-9">
            <fieldset className="space-y-2">
              <legend className="text-xl font-bold text-medium font-tertiary">
                What are you interested in?
              </legend>
              <div className="space-x-2">
                <input
                  className="checked:bg-blue-500"
                  type="checkbox"
                  id="aritificialintelligence"
                  name="interest"
                  value="aritificialintelligence"
                />
                <label htmlFor="aritificialintelligence">
                  Aritificial Intelligence
                </label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="biotechnology"
                  name="interest"
                  value="biotechnology"
                />
                <label htmlFor="biotechnology">Biotechnology</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="environment"
                  name="interest"
                  value="environment"
                />
                <label htmlFor="environment">Environment</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="space"
                  name="interest"
                  value="space"
                />
                <label htmlFor="space">Space</label>
              </div>
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="text-xl font-bold text-medium font-tertiary">
                What is your investing experience?
              </legend>

              <div className="space-x-2">
                <input
                  className="checked:bg-blue-500"
                  type="checkbox"
                  id="crowdfunding"
                  name="interest"
                  value="crowdfunding"
                />
                <label htmlFor="crowdfunding">Crowdfunding platforms</label>
              </div>

              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="tokens"
                  name="interest"
                  value="tokens"
                />
                <label htmlFor="tokens">Tokens</label>
              </div>

              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="tokens"
                  name="interest"
                  value="tokens"
                />
                <label htmlFor="tokens">Public Equities</label>
              </div>

              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="angel"
                  name="interest"
                  value="angel"
                />
                <label htmlFor="angel">Angel</label>
              </div>

              <div className="space-x-2">
                <input type="checkbox" id="vc" name="interest" value="vc" />
                <label htmlFor="vc">VC</label>
              </div>

              <div className="space-x-2">
                <input type="checkbox" id="none" name="interest" value="none" />
                <label htmlFor="none">none</label>
              </div>
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="text-xl font-bold text-medium font-tertiary">
                How much are you interested in investing?
              </legend>
              <div className="space-x-2">
                <input
                  className="checked:bg-blue-500"
                  type="checkbox"
                  id="1-100"
                  name="interest"
                  value="1-100"
                />
                <label htmlFor="1-100">US$ 1 - 100</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="101-500"
                  name="interest"
                  value="101-500"
                />
                <label htmlFor="101-500">US$ 101 - 500</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="501-1000"
                  name="interest"
                  value="501-1000"
                />
                <label htmlFor="501-1000">US$ 501 - 1000</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="5000+"
                  name="interest"
                  value="5000+"
                />
                <label htmlFor="5000+">US$ 5001+</label>
              </div>
            </fieldset>

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

export default InvestmentPreferences;
