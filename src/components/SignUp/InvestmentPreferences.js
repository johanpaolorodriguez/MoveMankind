import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const interests = [
  { name: "Artificial Intelligence" },
  { name: "BioTechnology" },
  { name: "Environment" },
  { name: "Space" },
];

const experience = [
  { name: "Crowdfunding Platforms" },
  { name: "Tokens" },
  { name: "Public Equities" },
  { name: "Angel Investing" },
  { name: "Venture Capitalist" },
  { name: "none" },
];

const power = [
  { name: "US$ 1-100" },
  { name: "US$ 101-500" },
  { name: "US$ 501-1000" },
  { name: "US$ 1000+" },
];

const InvestmentPreferences = ({
  step,
  onSubmit,
  getUserInterests,
  getUserExperience,
  getUserPower,
}) => {
  const [checkedStateInterests, setCheckedStateInterests] = useState(
    new Array(interests.length).fill(false)
  );
  const [checkedStateExperience, setCheckedStateEpxerience] = useState(
    new Array(experience.length).fill(false)
  );
  const [selectedOptionPower, setSelectedOptionPower] = useState(null);

  const handleOnChangeInterests = (position) => {
    const updatedCheckedState = checkedStateInterests.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedStateInterests(updatedCheckedState);

    const updatedUserInterests = interests.flatMap(({ name }, index) =>
      updatedCheckedState[index] ? [name] : []
    );
    getUserInterests(updatedUserInterests);
  };

  const handleOnChangeExperience = (position) => {
    const updatedSecondCheckedState = checkedStateExperience.map(
      (item, index) => (index === position ? !item : item)
    );
    setCheckedStateEpxerience(updatedSecondCheckedState);

    const updatedUserExperience = experience.flatMap(({ name }, index) =>
      updatedSecondCheckedState[index] ? [name] : []
    );
    getUserExperience(updatedUserExperience);
  };

  const handleOnChangePower = (value) => {
    setSelectedOptionPower(value);
    getUserPower(value);
  };

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

              {interests.map(({ name }, index) => {
                return (
                  <div className="space-x-2" key={index}>
                    <input
                      type="checkbox"
                      className="checked:bg-blue-500"
                      id={`interests-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedStateInterests[index]}
                      onChange={() => handleOnChangeInterests(index)}
                    />
                    <label htmlFor={`interests-checkbox-${index}`}>
                      {name}
                    </label>
                  </div>
                );
              })}
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="text-xl font-bold text-medium font-tertiary">
                What is your investing experience?
              </legend>

              {experience.map(({ name }, index) => {
                return (
                  <div className="space-x-2" key={index}>
                    <input
                      type="checkbox"
                      className="checked:bg-blue-500"
                      id={`experience-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedStateExperience[index]}
                      onChange={() => handleOnChangeExperience(index)}
                    />
                    <label htmlFor={`experience-checkbox-${index}`}>
                      {name}
                    </label>
                  </div>
                );
              })}
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="text-xl font-bold text-medium font-tertiary">
                How much are you interested in investing?
              </legend>

              {power.map(({ name }, index) => {
                return (
                  <div className="space-x-2" key={index}>
                    <input
                      type="radio"
                      className="checked:bg-blue-500"
                      id={`power-radio-${index}`}
                      name="power-radio"
                      value={name}
                      checked={selectedOptionPower === name}
                      onChange={() => handleOnChangePower(name)}
                    />
                    <label htmlFor={`power-radio-${index}`}>{name}</label>
                  </div>
                );
              })}
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
