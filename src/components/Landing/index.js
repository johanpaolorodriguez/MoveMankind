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
  const [startup, setStartup] = useState({});
  const [startupTags, setStartupTags] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getFeaturedStartup = async () => {
      try {
        const data = await props.firebase.getMostRecentStartup();
        setStartup(data);
        if (data) {
          let tags = data.categories.concat(
            data.country,
            data.sectors,
            data.subSectors
          );
          setStartupTags(tags);
        }
        const categoriesData = await props.firebase.getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.log(error);
      }
    };
    getFeaturedStartup();
  }, [props.firebase]);
  return (
    <main className="max-w-6xl mx-auto">
      <div className="relative px-4 mx-auto my-10 sm:my-12 sm:px-6 md:my-16 lg:my-32">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 font-primary sm:text-5xl md:text-6xl">
            <span className="block text-secondary">Move</span>{" "}
            <span className="block ">Mankind</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            MoveMankind is a Hong Kong based startup with a mission in assisting
            in the development of ventures that helps aid in matters of
            existential risk.
          </p>
          <Link
            className="inline-block px-8 py-2 mt-6 text-lg font-semibold text-white bg-blue-500 rounded-md font-primary hover:bg-primary"
            to={`/startups`}
          >
            Discover Ventures
          </Link>
        </div>
        <div className="absolute right-0 -top-24 w-80">
          <img className="" src={HeroSvg} alt="" />
        </div>
      </div>

      {/* <h2 className="px-8 text-3xl font-bold text-primary font-primary">
        Discover Ventures.
      </h2> */}
      <div className="relative z-10 flex justify-center mx-auto mt-10 space-x-8 text-center">
        {categories.map((category) => {
          return (
            <Link to={`/categories/${category.uid}`}>
              <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-white border border-gray-200 shadow-lg w-60 rounded-3xl h-96 hover:bg-gray-100">
                <img
                  className="w-24 h-24 rounded-full"
                  src={category.logo}
                  alt="space category"
                />
                <h2 className="text-xl font-bold text-gray-900">
                  {category.name}
                </h2>
                <div className={`bg-${hex[category.uid]} h-4 w-40`}></div>
                <p className="text-base text-gray-500">
                  {category.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="max-w-6xl px-8 py-32 space-y-6">
        <h2 className="text-3xl font-bold text-primary font-primary">
          Venture of the Week.
        </h2>
        <img className="w-4/5" src={startup.featureImage} alt="" />
        <h3 className="text-3xl font-bold text-primary font-primary">
          {startup.name}
        </h3>
        <div className="flex flex-wrap max-w-3xl space-x-2">
          {startupTags.map((tag) => (
            <span className="w-auto px-4 py-1 my-1 font-semibold text-white rounded-md bg-primary font-primary">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-3 text-base leading-tight text-gray-500">
          {startup.about}
        </p>
        <Link
          className="inline-block px-8 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md font-primary hover:bg-primary"
          to={`/startups/${startup.uid}`}
        >
          Learn More
        </Link>
      </div>
    </main>
  );
};

export default withFirebase(LandingPage);
