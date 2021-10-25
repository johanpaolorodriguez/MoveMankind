import React, { useState, useEffect } from "react";
import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";
import Tags from "../Tags";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const StartUpsPage = (props) => {
  const [startups, setStartups] = useState([]);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    const fetchStartups = async () => {
      try {
        if (filters.length === 0) {
          const data = await props.firebase.getAllStartups();
          setStartups(data);
        } else {
          const data = await props.firebase.getAllStartupsWithFilters(filters);
          setStartups(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchStartups();
  }, [props.firebase, filters]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await props.firebase.getAllCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, [props.firebase]);

  const [sectors, setSectors] = useState([]);
  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const data = await props.firebase.getAllSectors();
        setSectors(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSectors();
  }, [props.firebase]);

  const [subSectors, setSubSectors] = useState([]);
  useEffect(() => {
    const fetchSubSectors = async () => {
      try {
        const data = await props.firebase.getAllSubSectors();
        setSubSectors(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubSectors();
  }, [props.firebase]);

  const filterWithId = (field, id) => {
    //TODO: check if field is in filters []
    setFilters((filters) => [...filters, `${field}.${id}`]);
  };

  const removeFilterWithId = (field, id) => {
    console.log("filters", filters);
    console.log("id", id);
    const newFilters = filters.filter((filter) => filter !== `${field}.${id}`);
    setFilters(newFilters);
  };

  return (
    <section className="flex justify-center pt-16 mx-auto space-x-6 max-w-7xl">
      {/* tags */}
      <div className="flex flex-col space-y-6">
        <p className="w-64 p-4 mt-10 text-base text-center text-gray-500 bg-white rounded-md">
          start exploring ventrues by adding a tag!
        </p>
        <Tags
          filterWithId={filterWithId}
          removeFilterWithId={removeFilterWithId}
          field={"categoriesMap"}
          name={"Categories"}
          data={categories}
        />
        <Tags
          filterWithId={filterWithId}
          removeFilterWithId={removeFilterWithId}
          field={"sectorsMap"}
          name={"Sectors"}
          data={sectors}
        />
        <Tags
          filterWithId={filterWithId}
          removeFilterWithId={removeFilterWithId}
          field={"subSectorsMap"}
          name={"Sub Sectors"}
          data={subSectors}
        />
      </div>
      {/* card */}
      <div className="space-y-2">
        <p className="text-2xl font-bold">Companies</p>
        {startups.map((startup) => {
          return (
            <article className="max-w-2xl" key={startup.uid}>
              <Link to={`/startups/${startup.uid}`}>
                <div className="flex w-full space-y-2 overflow-hidden bg-white border border-transparent rounded-lg filter drop-shadow-xl hover:border-primary">
                  <img
                    src={startup.logo}
                    alt=""
                    className="object-contain object-center w-40 h-40 p-4"
                  />
                  <div className="p-4">
                    <p className="text-2xl font-bold">{startup.name}</p>
                    <p className="flex items-center space-x-1 text-base font-semibold">
                      <LocationMarkerIcon className="inline w-4 h-4" />
                      <span>
                        {startup.headQuarters}, {startup.country}
                      </span>
                    </p>
                    <p className="text-sm">{startup.description}</p>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default withFirebase(StartUpsPage);
