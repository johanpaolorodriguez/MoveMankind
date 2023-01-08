import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const ProgressBar = ({ step, size = null }) => {
	switch (size) {
		case "lg":
			return (
				<div className="mt-24 flex flex-col justify-between mr-24 min-h-[330px] w-[300px]">
					<Link to={"/"}>
						<div className="flex items-center flex-shrink-0 mb-24">
							<img
								src={logo}
								alt="Move Mankind Logo"
								className="block w-14 h-14"
							/>
						</div>
					</Link>

					<span className="flex space-x-4">
						{step === 0 ? <Checked /> : <Unchecked />}
						<span
							className={clsx(
								"text-lg",
								step === 0
									? "text-white font-semibold"
									: "text-gray-400"
							)}
						>
							Create Account
						</span>
					</span>

					<span className="flex-grow border-r-[3px] border-gray-300 shrink-0 min-h-[50px] w-[14px]"></span>

					<span className="flex space-x-4">
						{step === 1 ? <Checked /> : <Unchecked />}
						<span
							className={clsx(
								"text-lg",
								step === 1
									? "text-white font-semibold"
									: "text-gray-400"
							)}
						>
							Set up profile
						</span>
					</span>

					<span className="flex-grow border-r-[3px] border-gray-300 shrink-0 min-h-[50px] w-[14px]"></span>
					<span className="flex space-x-4">
						{step === 2 ? <Checked /> : <Unchecked />}
						<span
							className={clsx(
								"text-lg",
								step === 2
									? "text-white font-semibold"
									: "text-gray-400"
							)}
						>
							Interests
						</span>
					</span>

					<span className="flex-grow border-r-[3px] border-gray-300 shrink-0 min-h-[50px] w-[14px]"></span>
					<span className="flex space-x-4">
						{step === 3 ? <Checked /> : <Unchecked />}
						<span
							className={clsx(
								"text-lg",
								step === 3
									? "text-white font-semibold"
									: "text-gray-400"
							)}
						>
							Talent Contributions
						</span>
					</span>

					<span className="flex-grow border-r-[3px] border-gray-300 shrink-0 min-h-[50px] w-[14px]"></span>
					<span className="flex space-x-4">
						{step === 4 ? <Checked /> : <Unchecked />}
						<span
							className={clsx(
								"text-lg",
								step === 4
									? "text-white font-semibold"
									: "text-gray-400"
							)}
						>
							Financial contributions
						</span>
					</span>
				</div>
			);

		default:
			return (
				<div className="flex items-center justify-between w-full mx-auto">
					{step === 1 ? <Checked /> : <Unchecked />}

					<span className="flex-grow border-b-[3px] border-gray-300 shrink"></span>

					{step === 2 ? <Checked /> : <Unchecked />}

					<span className="flex-grow border-b-[3px] border-gray-300 shrink"></span>

					{step === 3 ? <Checked /> : <Unchecked />}

					<span className="flex-grow border-b-[3px] border-gray-300 shrink"></span>

					{step === 4 ? <Checked /> : <Unchecked />}
				</div>
			);
	}
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
			x="26.5"
			y="1.5"
			width="25"
			height="25"
			rx="12.5"
			transform="rotate(90 26.5 1.5)"
			stroke="#CACACA"
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
			x="26.5"
			y="1.5"
			width="25"
			height="25"
			rx="12.5"
			transform="rotate(90 26.5 1.5)"
			fill="#4661FF"
			stroke="#4661FF"
			strokeWidth="3"
		/>
		<rect
			x="19.75"
			y="8"
			width="11.7505"
			height="11.7505"
			rx="5.87524"
			transform="rotate(90 19.75 8)"
			fill="#FAFBFF"
		/>
	</svg>
);

export default ProgressBar;
