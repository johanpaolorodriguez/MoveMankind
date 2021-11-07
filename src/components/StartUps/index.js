import React, { useState, useEffect } from "react";
import { withFirebase } from "../Firebase";
import FilterGroup from "../Tags";
import Table from "./table";

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

  const [tags, setTags] = useState({});
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const categories = await props.firebase.getAllCategories();
        const sectors = await props.firebase.getAllSectors();
        const subSectors = await props.firebase.getAllSubSectors();

        setTags((prev) => ({
          ...prev,
          Categories: categories.map((obj) => ({
            ...obj,
            field: "categoriesMap",
          })),
          Sectors: sectors.map((obj) => ({
            ...obj,
            field: "sectorsMap",
          })),
          Subsectors: subSectors.map((obj) => ({
            ...obj,
            field: "subSectorsMap",
          })),
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags();
  }, [props.firebase]);

  const filterWithId = (field, id) => {
    //TODO: check if field is in filters []
    setFilters((filters) => [...filters, `${field}.${id}`]);
  };

  const removeFilterWithId = (field, id) => {
    console.log(field, id);
    const newFilters = filters.filter((filter) => filter !== `${field}.${id}`);
    setFilters(newFilters);
  };

  return (
    <section className="flex flex-col justify-center">
      {/* Filters/Tags */}
      {Object.keys(tags).length !== 0 ? (
        <FilterGroup
          data={tags}
          filterWithId={filterWithId}
          removeFilterWithId={removeFilterWithId}
        />
      ) : null}
      {/* Results Table */}
      {startups.length !== 0 ? <Table startups={startups} /> : <p>Loading</p>}
    </section>
  );
};

export default withFirebase(StartUpsPage);
