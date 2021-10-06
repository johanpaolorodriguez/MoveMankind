import React from "react";

const LandingPage = () => {
  return (
    <main className="px-4 mx-auto mt-10 max-w-7xl">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          This is the landing Page
        </h1>
        <p className="mt-3 text-base text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          bibendum enim facilisis gravida neque convallis a. Vitae proin
          sagittis nisl rhoncus mattis rhoncus urna. Neque aliquam vestibulum
          morbi blandit. Ac turpis egestas sed tempus.
        </p>
      </div>

      <div className="flex mt-10 space-x-16 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gray-600 rounded-full"></div>
          <h2 className="text-lg font-medium text-gray-900">Space</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gray-600 rounded-full"></div>
          <h2 className="text-lg font-medium text-gray-900">Global Warming</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gray-600 rounded-full"></div>
          <h2 className="text-lg font-medium text-gray-900">Biotech</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gray-600 rounded-full"></div>
          <h2 className="text-lg font-medium text-gray-900">A.I.</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>

      <div className="mt-24 space-y-12">
        <h2 className="mt-2 text-3xl font-semibold text-gray-900">
          Venture of the week
        </h2>
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
        <p className="mt-3 text-base text-gray-500">
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
