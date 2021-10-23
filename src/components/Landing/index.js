import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import Search from "../Search";
import globalWarmingPng from "../../assets/global_warming.png";
import spacePng from "../../assets/space.png";
import bioTechPng from "../../assets/biotechnology.png";
import AIPng from "../../assets/artificial_intelligence.png";
// import palceholderPng from "../../assets/placeholder_venture.png";

const LandingPage = (props) => {
  const [startup, setStartup] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getFeaturedStartup = async () => {
      try {
        const data = await props.firebase.getMostRecentStartup();
        setStartup(data);
        // await props.firebase.getAllStartupsInCategory("artificialinteligence");
        const categoriesData = await props.firebase.getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.log(error);
      }
    };
    getFeaturedStartup();
  }, [props.firebase]);
  console.log(categories);
  return (
    <main className="px-4 mx-auto max-w-7xl">
      <div className="text-center">
        <h1 className="py-40 text-6xl font-extrabold text-primary font-primary">
          Move Mankind
        </h1>

        <p className="py-16 text-4xl text-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          bibendum enim facilisis gravida neque convallis a. Vitae proin
          sagittis nisl rhoncus mattis rhoncus urna. Neque aliquam vestibulum
          morbi blandit. Ac turpis egestas sed tempus.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-primary font-primary">
        Discover Ventures.
      </h2>
      <div className="flex mx-auto mt-10 space-x-16 text-center">
        {categories.map((category) => {
          return (
            <Link to={`/categories/${category.uid}`}>
              <div className="flex flex-col items-center justify-center p-4 space-y-4 border border-gray-200 shadow-md rounded-3xl w-80 h-96">
                <img
                  className="w-24 h-24 rounded-full"
                  src={spacePng}
                  alt="space category"
                />
                <h2 className="text-lg font-medium text-gray-900">
                  {category.name}
                </h2>
                <p className="text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-24 space-y-12">
        <h2 className="mt-2 text-4xl font-bold text-center text-gray-900">
          Venture of the Week
        </h2>
        <img className="w-full h-full" src={startup.featureImage} alt="" />
        <p className="pb-32 mt-3 text-3xl text-gray-500">{startup.about}</p>
      </div>
    </main>
  );
};

export default withFirebase(LandingPage);
