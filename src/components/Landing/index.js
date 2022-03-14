import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import HeroSvg from "../../assets/hero_svg.svg";

const hex = {
  //colors defined in tailwind.config.js
  artificialinteligence: "accent1",
  biotechnology: "accent2",
  environment: "accent3",
  space: "accent4",
};

const LandingPage = (props) => {
  return (
    <main className="w-full min-h-screen mx-auto bg-gradient-to-r to-black from-stone-900">
      <div className="relative pt-24 mx-auto my-auto md:max-w-3xl lg:max-w-7xl lg:flex lg:items-center lg:justify-center">
        <div className="w-full h-full">
          <img className="" src={HeroSvg} alt="" />
        </div>
        <div className="px-4 py-6 space-y-8 sm:text-center lg:text-left lg:pl-12">
          <h1 className="text-xl font-extrabold text-white font-primary md:text-3xl lg:text-4xl">
            Discover and back impact ventures enabling the future of life, on
            Earth and beyond
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Clean energy, space exploration, and longevity ventures are seeking
            funding. Back them via (security or utility) tokens that represent
            their equity or debt.
          </p>
          <div className="flex justify-center space-x-4 space-between lg:justify-start">
            <Link
              className="flex items-center justify-center px-3 py-4 text-base font-semibold text-center text-white bg-blue-500 rounded-md font-primary hover:bg-primary"
              to={`/signup`}
            >
              Join For Future
            </Link>
            <Link
              className="flex items-center justify-center px-3 py-4 text-base font-semibold text-center text-white border border-white rounded-md bg-none font-primary hover:bg-primary"
              to={`/startups`}
            >
              Explore Directory
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withFirebase(LandingPage);
