import React from "react";
import Search from "../Search";
import globalWarmingPng from "../../assets/global_warming.png";
import spacePng from "../../assets/space.png";
import bioTechPng from "../../assets/biotechnology.png";
import AIPng from "../../assets/artificial_intelligence.png";
import palceholderPng from "../../assets/placeholder_venture.png";

const LandingPage = () => {
  return (
    <main className="px-4 mx-auto max-w-7xl">
      <div className="text-center">
        <h1 className="py-40 text-6xl font-extrabold text-gray-900 font-montserrat">
          Move Mankind
        </h1>

        <Search />
        <p className="py-16 text-4xl text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          bibendum enim facilisis gravida neque convallis a. Vitae proin
          sagittis nisl rhoncus mattis rhoncus urna. Neque aliquam vestibulum
          morbi blandit. Ac turpis egestas sed tempus.
        </p>
      </div>

      <div className="flex mt-10 space-x-16 text-center">
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-24 h-24 rounded-full"
            src={spacePng}
            alt="space category"
          />
          <h2 className="text-lg font-medium text-gray-900">Space</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-24 h-24 rounded-full"
            src={globalWarmingPng}
            alt="global warming category"
          />
          <h2 className="text-lg font-medium text-gray-900">Global Warming</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-24 h-24 rounded-full"
            src={bioTechPng}
            alt="bioTechnology category"
          />
          <h2 className="text-lg font-medium text-gray-900">Biotech</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-24 h-24 rounded-full"
            src={AIPng}
            alt="Artificial Inteligience category"
          />
          <h2 className="text-lg font-medium text-gray-900">A.I.</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>

      <div className="mt-24 space-y-12">
        <h2 className="mt-2 text-4xl font-bold text-center text-gray-900">
          Venture of the Week
        </h2>
        <img className="w-full h-full" src={palceholderPng} alt="" />
        <p className="pb-32 mt-3 text-3xl text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          bibendum enim facilisis gravida neque convallis a. Vitae proin
          sagittis nisl rhoncus mattis rhoncus urna. Neque aliquam vestibulum
          morbi blandit. Ac turpis egestas sed tempus.
        </p>
      </div>
    </main>
  );
};

export default LandingPage;
