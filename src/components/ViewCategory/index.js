import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";
import Tags from "../Tags";

const hex = {
  //colors defined in tailwind.config.js
  artificialinteligence: "accent1",
  biotechnology: "accent2",
  environment: "accent3",
  space: "accent4",
};

const ViewCategoryPage = (props) => {
  const { uid } = useParams();
  const [category, setCategory] = useState({});
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await props.firebase.getCategoryByID(uid);
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, [props.firebase, uid]);

  const [startups, setStartups] = useState([]);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const data = await props.firebase.getAllStartupsInCategory(
          uid,
          filters
        );
        setStartups(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStartups();
  }, [props.firebase, uid, filters]);

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
  }, [props.firebase, uid]);

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
  }, [props.firebase, uid]);

  console.log(subSectors);

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
    <div>
      {/* category page {hex[uid]} */}
      <h1 className="mt-10 text-3xl font-bold text-center text-primary font-primary">
        <span
          className={`highlight-background-b bg-gradient-to-r from-${hex[uid]} to-${hex[uid]}`}
        >
          {category.name}
        </span>
      </h1>
      <p className="text-center">{category.description}</p>
      <section className="grid grid-cols-4 mx-auto max-w-7xl">
        {/* tags */}
        <div className="flex flex-col col-span-1 space-y-6">
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
        <div className="col-span-3">
          {startups.map((startup) => {
            return (
              <article className="w-full px-3 py-6" key={startup.uid}>
                <Link to={`/startups/${startup.uid}`}>
                  <div className="w-full overflow-hidden bg-white border border-transparent rounded-lg shadow-xl hover:border-primary">
                    <img
                      src={startup.featureImage}
                      alt=""
                      className="object-cover object-center w-full h-56"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-md">{startup.name}</p>
                      <p className="text-sm">{startup.country}</p>
                      <p className="text-sm">{startup.headQuarters}</p>
                      <p className="text-sm">{startup.description}</p>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default withFirebase(ViewCategoryPage);
