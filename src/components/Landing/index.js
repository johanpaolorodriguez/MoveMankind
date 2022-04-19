import React from "react";
import { withFirebase } from "../Firebase";
import HeroSvg from "../../assets/hero_svg.png";
import {
  CurrencyDollarIcon,
  HeartIcon,
  TrendingUpIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
const hex = {
  //colors defined in tailwind.config.js
  artificialinteligence: "accent1",
  biotechnology: "accent2",
  environment: "accent3",
  space: "accent4",
};

const LandingPage = (props) => {
  return (
    <div className="relative min-h-[calc(100vh_-_5rem)] overflow-hidden bg-stone-900">
      <div className="w-full bg-stone-900">
        <div className="mx-auto max-w-7xl relative z-10 pb-8 flex flex-col justify-between | sm:pb-16 | md:pb-20 | lg:flex-row lg:w-full lg:pb-28 | xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 | sm:mt-12 sm:px-6 | md:mt-16 |  lg:max-w-2xl lg:mt-20 lg:px-8 | xl:mt-28">
            <div className="sm:text-center | lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white | sm:text-5xl | md:text-6xl">
                Discover and back ventures impacting humanity’s existential
                risks
              </h1>
              <p className="mt-3 text-base text-gray-200 | sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto | md:mt-5 md:text-xl | lg:mx-0">
                Climate, space exploration, AI, and longevity ventures are
                seeking funding. Back them via crypto tokens.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href={"/signup"}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Join For Future
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href={"/directory"}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-white rounded-md bg-none hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Directory
                  </a>
                </div>
              </div>
            </div>
          </main>
          <div className="mt-10 mx-auto max-w-7xl px-4 | sm:mt-12 sm:px-6 | md:mt-16 | lg:max-w-2xl lg:mt-20 lg:px-8 | xl:mt-28">
            <img
              className="object-cover w-auto h-auto mx-auto"
              src={HeroSvg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="flex flex-col justify-between py-8 mx-auto max-w-7xl text-center px-4 space-y-16 | sm:px-6 | md:px-8 | lg:justify-evenly lg:flex-row lg:space-y-0 lg:space-x-6">
          <article className="flex basis-1/4 flex-col items-center justify-center space-y-3 | lg:justify-start">
            <CurrencyDollarIcon className="w-10 h-10" />
            <h3 className="text-xl font-bold tracking-tight text-primary">
              Fundraise
            </h3>
            <p className="text-sm text-gray-600">
              Existential risk ventures (e.g. businesses, think tanks,
              nonprofits) can issue tokens representing their equity, debt or
              exclusive product/service usage benefits
            </p>
          </article>

          <article className="flex basis-1/4 flex-col items-center justify-center space-y-3 | lg:justify-start">
            <HeartIcon className="w-10 h-10" />
            <h3 className="text-xl font-bold tracking-tight text-primary">
              Back
            </h3>
            <p className="text-sm text-gray-600">
              Backers can purchase a venture's token. Hit the "I'm Interested"
              button in the directory, and we'll let you know when the token is
              available
            </p>
          </article>

          <article className="flex basis-1/4 flex-col items-center justify-center space-y-3 | lg:justify-start">
            <TrendingUpIcon className="w-10 h-10" />
            <h3 className="text-xl font-bold tracking-tight text-primary">
              Get payouts
            </h3>
            <p className="text-sm text-gray-600">
              All For Future backers get dividend payouts when a venture
              succeeds (have an exit that generates cash) - whether or not the
              backer invested in the successful venture
            </p>
          </article>

          <article className="flex basis-1/4 flex-col items-center justify-center space-y-3 | lg:justify-start">
            <RefreshIcon className="w-10 h-10" />
            <h3 className="text-xl font-bold tracking-tight text-primary">
              Trade
            </h3>
            <p className="text-sm text-gray-600">
              Trade tokens on For Future's exchange
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default withFirebase(LandingPage);
