import React from "react";
import { withFirebase } from "../Firebase";
import HeroSvg from "../../assets/hero_svg.png";
import {
	CurrencyDollarIcon,
	HeartIcon,
	PencilIcon,
	SearchCircleIcon,
} from "@heroicons/react/outline";

const LandingPage = (props) => {
	return (
		<div className="relative overflow-hidden">
			<div className="relative w-full min-h-[calc(100vh_-_5rem)] bg-primary flex justify-center lg:justify-start">
				<div className="max-w-7xl z-10 flex flex-col justify-between mx-auto | lg:w-full">
					<main className=" space-y-12 mt-10 max-w-7xl px-4 | sm:text-center sm:mt-12 sm:px-6 | md:mt-16 |  lg:max-w-4xl lg:mt-20 lg:px-8 lg:text-left | xl:mt-28">
						<h1 className="text-4xl tracking-tight font-semibold font-primary text-white | sm:text-5xl | md:text-6xl">
							Discover and back ventures impacting
							humanity’s existential risks
						</h1>

						<p className="mt-3 text-base text-gray-200 | sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto | md:mt-5 md:text-xl | lg:mx-0">
							Climate, space, AI safety, and biotech
							ventures are seeking funding, talent, advice,
							and more.
						</p>

						<div className="mt-5 space-y-4 rounded-md shadow | sm:mt-8 sm:flex sm:justify-center max-w-[16rem] | md:max-w-none md:space-y-0 md:space-x-4 | lg:justify-start lg:max-w-xl">
							<a
								href={"/signup"}
								className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
							>
								Join For Future
							</a>

							<a
								href={"/directory"}
								className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-white rounded-md bg-none hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
							>
								Explore Directory
							</a>
						</div>
					</main>
				</div>

				<img
					className="absolute right-0 bottom-0 object-cover w-auto h-auto | lg:inset-x-none lg:-right-20"
					src={HeroSvg}
					alt=""
				/>
			</div>

			<div className="w-full bg-white lg:py-32">
				<div className="flex flex-col justify-between py-8 mx-auto max-w-7xl text-center px-4 space-y-16 | sm:px-6 | md:px-8 | lg:justify-evenly lg:flex-row lg:space-y-0 lg:space-x-6">
					<article className="flex basis-1/4 flex-col items-center justify-center space-y-3 | lg:justify-start">
						<SearchCircleIcon className="w-10 h-10" />
						<h3 className="text-xl font-bold tracking-tight text-primary">
							Discover
						</h3>
						<p className="text-sm text-gray-600">
							Discover ventures (including nonprofits,
							think tanks and businesses) working on
							progressing humanity and mitigating
							existential risks such as climate change, AI,
							and biohacking.
						</p>
					</article>

					<article className="flex basis-1/4 flex-col items-center justify-center space-y-3 | lg:justify-start">
						<PencilIcon className="w-10 h-10" />
						<h3 className="text-xl font-bold tracking-tight text-primary">
							Share your talent
						</h3>
						<p className="text-sm text-gray-600">
							Share via full-time work, part-time work,
							freelancing, advisory calls, volunteering,
							and more.
						</p>
					</article>

					<article className="flex basis-1/4 flex-col items-center justify-center space-y-3 | lg:justify-start">
						<CurrencyDollarIcon className="w-10 h-10" />
						<h3 className="text-xl font-bold tracking-tight text-primary">
							Contribute your money
						</h3>
						<p className="text-sm text-gray-600">
							Contribute via reward crowdfunding, equity
							crowdfunding, or donations.
						</p>
					</article>

					<article className="flex basis-1/4 flex-col items-center justify-center space-y-3 | lg:justify-start">
						<HeartIcon className="w-10 h-10" />
						<h3 className="text-xl font-bold tracking-tight text-primary">
							Donate your time
						</h3>
						<p className="text-sm text-gray-600">
							Donate such as through participating in
							research, signing petitions, or sharing them
							to your network.
						</p>
					</article>
				</div>
			</div>
		</div>
	);
};

export default withFirebase(LandingPage);
