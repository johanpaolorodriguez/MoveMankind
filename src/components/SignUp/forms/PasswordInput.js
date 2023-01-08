import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

export const PasswordInput = React.forwardRef((props, ref) => {
	const [passwordInputType, setPasswordInputType] = useState("password");

	const togglePassword = () => {
		passwordInputType === "password"
			? setPasswordInputType("text")
			: setPasswordInputType("password");
	};
	return (
		<div className="relative flex justify-between w-full h-12 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md bg-blue-50 appearance-no ne focus-within:outline-none focus-within:ring-blue-500 focus-within:border-blue-500 focus-within:z-10 sm:text-sm">
			<input
				ref={ref}
				{...props}
				className="w-full h-full px-3 py-2 text-sm text-blue-600 placeholder-blue-400 bg-transparent autofill:bg-none focus:outline-none "
				type={passwordInputType}
				placeholder="8-20 characters, at least 1 number"
				required
			/>
			<button className="p-2" type="button" onClick={togglePassword}>
				{passwordInputType === "password" ? (
					<EyeIcon className="w-5 h-5" />
				) : (
					<EyeOffIcon className="w-5 h-5" />
				)}
			</button>
		</div>
	);
});
