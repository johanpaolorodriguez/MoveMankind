import React from "react";
import { useLocation } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Footer = () => {
	let location = useLocation();

	const isSignupLocation = () => {
		if (
			[
				// ROUTES.SIGN_UP,
				ROUTES.SIGN_UP_ABOUT,
				ROUTES.SIGN_UP_CONTRIBUTIONS,
				ROUTES.SIGN_UP_TALENT,
				ROUTES.SIGN_UP_INTERESTS,
				// ROUTES.SIGN_UP + "/",
				ROUTES.SIGN_UP_ABOUT + "/",
				ROUTES.SIGN_UP_CONTRIBUTIONS + "/",
				ROUTES.SIGN_UP_TALENT + "/",
				ROUTES.SIGN_UP_INTERESTS + "/",
			].includes(location.pathname)
		) {
			return true;
		} else {
			return false;
		}
	};

	if (isSignupLocation()) {
		return null;
	}

	return (
		<div className="absolute bottom-0 flex items-center w-full h-20 bg-primary">
			<div className="w-full px-6 mx-auto max-w-7xl flex flex-col justify-center text-center | md:justify-between md:flex-row">
				<a
					className="flex items-center justify-center space-x-2 text-sm text-white | md:order-last"
					href="https://www.instagram.com/forfuture.ventures/"
				>
					<span>Follow Us</span>
					<svg
						className="w-5 h-5 text-white icon"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
					</svg>
				</a>

				<p className="text-sm text-white font-base">
					© 2022 For Future. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
