import React, { Fragment } from "react";
import { withFirebase } from "../Firebase";
import hero_desktop from "../../assets/hero_desktop.svg";
import hero_tablet from "../../assets/hero_tablet.svg";
import hero_mobile from "../../assets/hero_mobile.svg";
import background from "../../assets/background.svg";
import Banner from "../Banner/index";
import {
	CurrencyDollarIcon,
	HeartIcon,
	PencilIcon,
	SearchCircleIcon,
	ArrowRightIcon,
} from "@heroicons/react/outline";

const LandingPage = () => {
	return (
		<div className="relative">
			<div className="relative">
				<Banner className="sticky top-0">
					<p className="flex flex-col text-left | md:flex-row md:space-x-3">
						<span>
							Connect with us on Instagram for updates and
							exciting content
						</span>
						<a
							href="https://www.instagram.com/forfuture.ventures/"
							className="flex flex-row items-center font-bold text-blue-500"
						>
							Give us a follow{" "}
							<ArrowRightIcon className="w-5 h-5 ml-2" />
						</a>
					</p>
				</Banner>
			</div>

			<div className="bg-[url('./assets/background.svg')] w-full bg-primary flex justify-center flex-col | lg:justify-start py-32">
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
								className="flex items-center justify-center w-full px-8 py-3 text-lg font-medium text-white border border-white rounded-md bg-indigo-500/10 bg-none hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
							>
								Explore Directory
							</a>
						</div>
					</main>
				</div>
			</div>

			<div className="w-full px-6 py-10 text-xl bg-blue-500">
				<p className="pb-10 text-white mx-auto | lg:max-w-7xl">
					Existential Risks are events that could cause human
					extinction or permanently and drastically curtail
					humanity's potential, such as climate change,
					pandemics, and artificial intelligence.
				</p>

				<p className="text-white mx-auto | lg:max-w-7xl">
					You can help safeguard the long-term future of humanity
					by working with ventures that are finding solutions.
				</p>
			</div>

			<div className="pt-16 pb-32 w-full bg-gradient-to-b from-primary to-[#4661FF] lg:py-32">
				<p className="w-full py-4 text-3xl font-semibold text-center text-white lg:pb-16">
					How You Can Help
				</p>
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
			<div className="w-full bg-primary">
				<div className="flex flex-col items-center mx-auto justify-center px-6 py-6 mb-16 space-y-16 | lg:py-32 lg:flex-row max-w-7xl lg:space-x-10">
					<div className="flex flex-col space-y-6 text-white">
						<span className="py-4 text-3xl font-semibold">
							Our Mission
						</span>
						<p className="">
							People are increasingly aware of various
							existential risks, but feel that their
							efforts to meaningfully address these threats
							are limited to volunteering, donating, and
							lifestyle changes.
						</p>
						<p className="">
							Meanwhile, private companies, research
							institutions, and government bodies have made
							significant progress in this space but need
							help achieving their goals.
						</p>
						<p className="">
							{" "}
							For Future helps people contribute their
							talent/money/time by connecting them with
							ventures and individuals working to solve
							existential risks. We’re like a LinkedIn for
							your social impact life.
						</p>
					</div>
					<div className=" px-4 py-6 mr-8 text-2xl font-extrabold tracking-tight bg-white rounded-md  font-primary text-primary shadow-box-primary | md:text-4xl | lg:text-[2.625rem]">
						<p className="leading-[50px]">
							<span className="text-[#4661FF] tracking-tight">
								Connect people with existential risk
								ventures
							</span>{" "}
							to combat humanity’s greatest threats
							together
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withFirebase(LandingPage);
