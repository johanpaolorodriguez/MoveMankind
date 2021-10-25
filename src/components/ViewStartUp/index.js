import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";
import { LocationMarkerIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import FrequentlyAskedQuestions from "../Faq";
import InvestButton from "../InvestAsUser";

const ViewStartUpPage = (props) => {
  const { uid } = useParams();
  const [startup, setStartup] = useState({});
  const [startupTags, setStartupTags] = useState([]);
  const [subSectors, setSubSectors] = useState([]);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const docSnap = await props.firebase.getStartupByID(uid);
        let data = docSnap.data();
        setStartup(data);
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

  useEffect(() => {
    const fetchSubSectors = async () => {
      try {
        let data = await props.firebase.getStartupSubsectors(uid);
        setSubSectors(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubSectors();
  }, [props.firebase, uid]);

  return (
    <main>
      {startup && (
        <div className="max-w-5xl mx-auto my-16">
          <section className="bg-white shadow-md">
            <article className="flex justify-between p-8">
              <div>
                <h1 className="text-4xl font-bold font-primary text-primary">
                  {startup.name}
                </h1>
                <p className="flex items-center space-x-2 text-2xl font-bold text-primary">
                  <LocationMarkerIcon className="w-6 h-6" />
                  <span>
                    {startup.headQuarters}, {startup.country}
                  </span>
                </p>
                <img
                  src={startup.logo}
                  alt=""
                  className="object-contain object-center h-auto w-96"
                />
                <div className="flex flex-wrap max-w-xl py-4 space-x-2">
                  {startupTags.map((tag) => (
                    <span className="w-auto px-4 py-1 my-1 font-semibold bg-gray-200 rounded-md text-primary font-primary">
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
                <InvestButton name={startup.name} id={startup.uid} />
              </div>
            </article>

            <article className="p-8 space-y-8">
              <h2 className="text-3xl font-bold text-primary">About</h2>
              <img src={startup.featureImage} alt="" className="" />
              <p className="tesxt-base">{startup.about}</p>
            </article>

            <article className="p-8 space-y-8">
              <h2 className="text-3xl font-bold text-primary">Resources</h2>
              <p className="Learn more abut the current project"></p>
              <div className="flex items-center space-x-4">
                <button disabled className="">
                  1. <span className="underline">RSI Development</span>
                </button>
                <ExternalLinkIcon className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-4">
                <button disabled className="">
                  1. <span className="underline">RSI Development</span>
                </button>
                <ExternalLinkIcon className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-4">
                <button disabled className="">
                  1. <span className="underline">RSI Development</span>
                </button>
                <ExternalLinkIcon className="w-4 h-4" />
              </div>
            </article>

            <article className="p-8 space-y-8">
              <h2 className="text-3xl font-bold text-primary">FAQ</h2>
              <FrequentlyAskedQuestions />
            </article>
          </section>
        </div>
      )}
    </main>
  );
};

export default withFirebase(ViewStartUpPage);
