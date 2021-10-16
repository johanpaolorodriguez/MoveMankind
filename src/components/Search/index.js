import React from "react";

export default function Search() {
  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 sr-only"
      >
        Search
      </label>
      <div className="flex justify-center w-full h-12 max-w-4xl mx-auto text-gray-500 bg-gray-100 border border-transparent rounded-md shadow-inner focus-within:border-primary focus-within:text-primary">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="flex-1 block w-full px-6 text-sm placeholder-gray-400 transition duration-150 ease-in-out bg-transparent border-gray-300 rounded-sm focus:outline-none sm:leading-5 focus:ring-gray-500 focus:border-gray-500"
        />
        <button className="flex items-center justify-center w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
