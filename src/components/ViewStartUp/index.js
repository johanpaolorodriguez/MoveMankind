import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Search from "../Search";

const ViewStartUpPage = (props) => {
  const { uid } = useParams();
  const [startup, setStartup] = useState({});
  const [subSectors, setSubSectors] = useState([]);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const docSnap = await props.firebase.getStartupByID(uid);
        let data = docSnap.data();
        setStartup(data);
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
    <div className="mb-24">
      {startup && (
        <main className="w-full">
          <img
            src={startup.featureImage}
            alt={`${startup.name}`}
            className="block object-cover object-center w-full h-screen-1/2"
          />
          <section className="bg-primary">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gray-900 rounded-full">
                  <img
                    src={startup.logo}
                    alt={`${startup.name} logo`}
                    className="block w-auto h-16"
                  />
                </div>
                <div className="flex flex-col p-4">
                  <h1 className="text-3xl font-bold leading-8 text-white font-primary">
                    {startup.name}
                  </h1>
                  <p className="flex items-center text-xl text-white font-secondary">
                    <LocationMarkerIcon className="w-5 h-5 text-white" />
                    {startup.country}
                  </p>
                </div>
              </div>
              <button className="h-full px-8 py-2 font-bold bg-gray-100 rounded-full text-primary">
                Contact
              </button>
            </div>
          </section>
          <div className="divide-y-4">
            <section className="py-12">
              <div className="grid grid-cols-2 py-24 mx-auto gap-y-12 gap-x-48 max-w-7xl">
                <div className="flex justify-between col-span-1">
                  <span className="text-3xl font-bold">$ 112,321,291</span>
                  <span className="text-3xl font-medium">raised</span>
                </div>
                <div className="flex justify-between col-span-1">
                  <span className="text-3xl font-bold">$ 112.30</span>
                  <span className="text-3xl font-medium">
                    minimum investment
                  </span>
                </div>
                <div className="flex justify-between col-span-1">
                  <span className="text-3xl font-bold">1132</span>
                  <span className="text-3xl font-medium">investors</span>
                </div>
                <div className="flex justify-between col-span-1">
                  <span className="text-3xl font-bold">$1.4B</span>
                  <span className="text-3xl font-medium">valuation</span>
                </div>
              </div>
              <div className="grid grid-cols-4 mx-auto max-w-7xl">
                <div className="col-span-1">
                  <div className="flex flex-col w-full space-y-4 text-xl">
                    <span className="w-full font-bold">Tags</span>
                    {subSectors.map((subSector) => {
                      return (
                        <span
                          key={subSector.name}
                          className="w-full px-4 py-2 font-bold shadow-md bg-accent1 text-primary"
                        >
                          {subSector.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <article className="col-span-3 pl-32 mx-auto text-3xl max-w-7xl">
                  <p className="">
                    ABL is committed to the national security of the United
                    States and our allies. Our innovative vehicle and launch
                    systems enable space resiliency. We are made in the USA,
                    ensuring all suppliers and sub-suppliers are highly vetted
                    and technically audited.
                  </p>
                  <p className="">
                    We are a tight team with big goals. That means we need all
                    hands on deck. At ABL, every person takes ownership of their
                    work, and understands how it impacts our mission. Accessing
                    space doesn’t need to be expensive, complicated, or
                    difficult, and we’re building the systems, CONOPS, and
                    organization to prove it.
                  </p>
                </article>
              </div>
            </section>
            <section className="py-12 mx-auto space-y-4 max-w-7xl">
              <h2 className="text-3xl font-bold">Resources</h2>
              <p className="text-xl">
                Learn more about ABL Space Systems by viewing the following
                links and videos.
              </p>
              <span className="block w-full px-8 py-4 font-bold text-white bg-secondary">
                RSI Development
              </span>
              <span className="block w-full px-8 py-4 font-bold text-white bg-secondary">
                RSI Development
              </span>
              <span className="block w-full px-8 py-4 font-bold text-white bg-secondary">
                RSI Development
              </span>
              <span className="block w-full px-8 py-4 font-bold text-white bg-secondary">
                RSI Development
              </span>
            </section>
            <section className="py-12 mx-auto space-y-4 space-y-12 max-w-7xl">
              <h2 className="text-5xl font-bold text-center">
                Make a New Search
              </h2>
              <Search />
            </section>
          </div>
        </main>
      )}
    </div>
  );
};

export default withFirebase(ViewStartUpPage);
