import React from "react";
import { withFirebase } from "../Firebase";
import hero_desktop from "../../assets/hero_desktop.svg";
import hero_tablet from "../../assets/hero_tablet.svg";
import hero_mobile from "../../assets/hero_mobile.svg";
import background from "../../assets/background.svg";
import {
	CurrencyDollarIcon,
	HeartIcon,
	PencilIcon,
	SearchCircleIcon,
} from "@heroicons/react/outline";

const LandingPage = () => {
	return (
		<div className="relative overflow-hidden">
			<div className="bg-[url('./assets/background.svg')] w-full bg-primary flex justify-center flex-col | lg:justify-start py-6">
				<div className="max-w-7xl z-10 flex flex-col justify-between mx-auto | lg:flex-row lg:w-full">
					<picture className="flex justify-center">
						<source
							media="(min-width:1024px)"
							srcSet={hero_desktop}
						/>
						<source
							media="(min-width:768px)"
							srcSet={hero_tablet}
						/>
						<img
							className="w-auto h-auto"
							src={hero_mobile}
							alt=""
						/>
					</picture>

					<main className=" space-y-12 mt-10 px-6 | sm:mt-12 sm:px-6 | md:mt-16 |  lg:max-w-xl lg:mt-20 lg:px-0 lg:text-left lg:order-first">
						<h1 className="text-3xl tracking-tight font-semibold font-primary text-white | md:text-4xl | lg:font-extrabold">
							Discover and back the ventures impacting
							humanity’s existential risks
						</h1>

						<p className="mt-3 text-xl text-gray-200 | sm:mt-5 sm:text-lg | md:mt-5 md:text-2xl | lg:mx-0">
							Climate, space, AI safety, and biotech
							ventures are seeking funding, talent, advice,
							and more. Join us to back the future.
						</p>

						<div className="mt-5 space-y-4 rounded-md shadow | sm:mt-8 sm:flex sm:justify-center | md:mx-auto md:max-w-sm md:flex-col | lg:space-y-0 lg:space-x-4 lg:flex-row lg:justify-start lg:max-w-xl">
							<a
								href={"/signup"}
								className="flex items-center justify-center w-full px-8 py-3 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
							>
								Join For Future
							</a>

							<a
								href={"/directory"}
								className="flex items-center justify-center w-full px-8 py-3 text-lg font-medium text-white border border-white rounded-md bg-none hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
							>
								Explore Directory
							</a>
						</div>
					</main>
				</div>
			</div>

			<div className="pt-16 pb-32 w-full bg-gradient-to-b from-primary to-[#4661FF] lg:py-32">
				<div className="flex flex-col justify-between py-8 mx-auto max-w-7xl text-center px-6 space-y-8 | md:px-8 | lg:px-0 lg:py-0 lg:justify-evenly lg:flex-row lg:space-y-0 lg:space-x-6">
					<article className="bg-white rounded-xl px-6 py-8 flex basis-1/4 flex-col items-center justify-center space-y-3 | md:rounded-xl md:min-h-[220px] lg:justify-start">
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

					<article className="bg-white rounded-xl px-6 py-8 flex basis-1/4 flex-col items-center justify-center space-y-3 | md:rounded-xl md:min-h-[220px] lg:justify-start">
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

					<article className="bg-white rounded-xl px-6 py-8 flex basis-1/4 flex-col items-center justify-center space-y-3 | md:rounded-xl md:min-h-[220px] lg:justify-start">
						<CurrencyDollarIcon className="w-10 h-10" />
						<h3 className="text-xl font-bold tracking-tight text-primary">
							Contribute your money
						</h3>
						<p className="text-sm text-gray-600">
							Contribute via reward crowdfunding, equity
							crowdfunding, or donations.
						</p>
					</article>

					<article className="bg-white rounded-xl px-6 py-8 flex basis-1/4 flex-col items-center justify-center space-y-3 | md:rounded-xl md:min-h-[220px] lg:justify-start">
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
