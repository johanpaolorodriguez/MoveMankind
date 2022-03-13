import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <span className="flex items-center mx-auto justify-evenly w-44">
      {[1, 2, 3].includes(step) ? <Checked /> : <Unchecked />}
      {[2, 3].includes(step) ? <Tracked /> : <Untracked />}
      {[2, 3].includes(step) ? <Checked /> : <Unchecked />}
      {[3].includes(step) ? <Tracked /> : <Untracked />}
      {[3].includes(step) ? <Checked /> : <Unchecked />}
    </span>
  );
};
const Unchecked = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.5"
      y="26.5"
      width="25"
      height="25"
      rx="2.5"
      transform="rotate(-90 1.5 26.5)"
      stroke="#91929A"
      strokeWidth="3"
    />
  </svg>
);

const Checked = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="27.5"
      width="27"
      height="27"
      rx="3.5"
      transform="rotate(-90 0.5 27.5)"
      fill="#4661FF"
    />
    <rect
      x="1.5"
      y="26.5"
      width="25"
      height="25"
      rx="2.5"
      transform="rotate(-90 1.5 26.5)"
      stroke="#23253!5"
      strokeWidth="3"
    />
    <rect
      x="8.40015"
      y="19.5999"
      width="11.2"
      height="11.2"
      rx="2"
      transform="rotate(-90 8.40015 19.5999)"
      fill="#232535"
    />
    <rect
      x="0.5"
      y="27.5"
      width="27"
      height="27"
      rx="3.5"
      transform="rotate(-90 0.5 27.5)"
      stroke="black"
    />
  </svg>
);

const Untracked = () => (
  <svg
    width="24"
    height="4"
    viewBox="0 0 24 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="4"
      width="4"
      height="9"
      rx="1"
      transform="rotate(-90 0 4)"
      fill="#91929A"
    />
    <rect
      x="15"
      y="4"
      width="4"
      height="9"
      rx="1"
      transform="rotate(-90 15 4)"
      fill="#91929A"
    />
  </svg>
);

const Tracked = () => (
  <svg
    width="24"
    height="4"
    viewBox="0 0 24 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="4"
      width="4"
      height="9"
      rx="1"
      transform="rotate(-90 0 4)"
      fill="#333"
    />
    <rect
      x="15"
      y="4"
      width="4"
      height="9"
      rx="1"
      transform="rotate(-90 15 4)"
      fill="#333"
    />
  </svg>
);
export default ProgressBar;
