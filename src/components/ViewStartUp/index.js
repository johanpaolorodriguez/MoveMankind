import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";
import { LocationMarkerIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import FrequentlyAskedQuestions from "../Faq";
import FollowButton from "../Follow";
import DemoVideoThumbnail from "../../assets/demo_video_thumbnail.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ViewStartUpPage = (props) => {
  const { uid } = useParams();
  const [startup, setStartup] = useState({});
  const [relatedByCategory, setRelatedByCategory] = useState([]);
  const [startupTags, setStartupTags] = useState([]);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const data = await props.firebase.getStartupByID(uid);
        setStartup(data);
        console.log(data.categories);
        const categoriesFilter = data.categories.map(
          (categoryUID) => `categoriesMap.${categoryUID}`
        );
        const related = await props.firebase.getAllStartupsWithFilters(
          categoriesFilter,
          3
        );
        setRelatedByCategory(related);
        if (data) {
          let tags = data.categories.concat(
            data.country,
            data.sectors,
            data.subSectors
          );
          setStartupTags(tags);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchStartup();
  }, [props.firebase, uid]);

  return (
    <main>
      {startup && (
        <div className="max-w-6xl mx-auto my-8">
          <article className="flex justify-between">
            <div className="space-y-3">
              <img
                src={startup.logo}
                alt=""
                className="object-contain object-center w-auto h-48 border border-gray-200"
              />
              <h1 className="pt-6 text-4xl font-bold font-primary text-primary">
                {startup.name}
              </h1>
              <p className="flex items-center space-x-2 text-2xl font-bold text-primary">
                <LocationMarkerIcon className="w-6 h-6" />
                <span>
                  {startup.headQuarters}, {startup.country}
                </span>
              </p>

              <p className="flex items-center max-w-2xl space-x-2 text-2xl font-medium text-primary">
                {startup.description}
              </p>

              <div className="flex flex-wrap max-w-2xl py-4">
                {startupTags.map((tag) => (
                  <span
                    key={tag}
                    className="w-auto px-4 py-1 mx-2 my-1 font-semibold bg-gray-200 rounded-md text-primary font-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="divide-y divide-gray-200 text-md w-96 divide font-secondary">
              <div className="pb-4">
                <p className="text-4xl font-bold">$10,646,500</p>
                <p className="text-gray-500">Raised with Move Mankind</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="text-gray-500">Round</p>
                <p className="font-bold">Series B</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="text-gray-500">Price per security</p>
                <p className="font-bold">$100</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="text-gray-500">Allocation</p>
                <p className="font-bold">$11M</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="text-gray-500">Pre-money Valuation</p>
                <p className="font-bold">$67.38M</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="text-gray-500">Minimum Investment</p>
                <p className="font-bold">$10K</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="text-gray-500">Instrument</p>
                <p className="font-bold">Common Equity</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="text-gray-500">Deadline</p>
                <p className="font-bold">December 4, 2021</p>
              </div>
              <div className="flex pt-4 space-x-4">
                <FollowButton startupUid={startup.uid} />
                <button className="flex justify-center w-full px-8 py-4 text-base font-semibold text-white bg-blue-500 rounded-md font-primary">
                  Contact
                </button>
              </div>
            </div>
          </article>

          <section className="flex justify-between py-8 mt-8 space-x-16">
            <div className="">
              <article className="space-y-8">
                <h2 className="text-3xl font-bold text-primary">About</h2>
                <img
                  src={startup.featureImage}
                  alt=""
                  className="object-cover object-center w-auto h-auto"
                />
                <p className="text-base">{startup.about}</p>
              </article>
              <article className="pt-16 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-primary">Resources</h2>
                  <p className="">Learn more about our project:</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button disabled className="font-semibold">
                    1. <span className="underline">Pitch Deck</span>
                  </button>
                  <ExternalLinkIcon className="w-4 h-4" />
                </div>

                <div className="flex space-x-4 flex-start">
                  <button
                    disabled
                    className="flex flex-col w-full font-semibold"
                  >
                    <p className="text-left">
                      1. <span className="underline">Video Presentation</span>
                    </p>
                    <img
                      src={DemoVideoThumbnail}
                      alt=""
                      className="object-cover object-center w-auto h-auto"
                    />
                  </button>
                </div>
              </article>
              <article className="pt-16 space-y-8">
                <h2 className="text-3xl font-bold text-primary">FAQ</h2>
                <FrequentlyAskedQuestions />
              </article>
            </div>

            <article className="flex-shrink-0 space-y-6 w-96">
              <h2 className="text-3xl font-bold text-primary">Top Investors</h2>
              <div className="flex items-center w-full p-5 space-x-6 bg-white border border-gray-200 rounded-sm h-36">
                <img
                  className="inline-block w-16 h-16 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-primary">
                    Richard Hendricks
                  </p>
                  <p className="text-base">Space Startup Advisor</p>
                </div>
              </div>
              <div className="flex items-center w-full p-5 space-x-6 bg-white border border-gray-200 rounded-sm h-36">
                <img
                  className="inline-block w-16 h-16 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-primary">Donald Dunn</p>
                  <p className="text-base">Space Startup Advisor</p>
                </div>
              </div>
              <div className="flex items-center w-full p-5 space-x-6 bg-white border border-gray-200 rounded-sm h-36">
                <img
                  className="inline-block w-16 h-16 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-primary">Monica Hall</p>
                  <p className="text-base">Space Startup Advisor</p>
                </div>
              </div>
            </article>
          </section>

          <section className="pt-16 space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Related Ventures
            </h2>
            <div className="flex justify-between">
              {relatedByCategory.map((related) => {
                return (
                  <Link to={`/startups/${related.uid}`}>
                    <article className="p-6 bg-white border border-gray-200 rounded-md h-96 w-80">
                      <img
                        src={related.logo}
                        alt=""
                        className="object-contain object-center w-full h-48 border border-gray-200"
                      />
                      <h1 className="pt-6 text-xl font-bold font-primary text-primary">
                        {related.name}
                      </h1>
                      <p className="flex items-center space-x-2 text-primary">
                        <LocationMarkerIcon className="w-6 h-6" />
                        <span>
                          {related.headQuarters}, {related.country}
                        </span>
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default withFirebase(ViewStartUpPage);
