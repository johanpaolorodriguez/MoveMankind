import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";
// import FilterGroup from "../Tags";
import Table from "./table";
import SectorFilters from "../SectorFilters";
import NoResultsImage from "../../assets/Illustration-No Results.png";

const StartUpsPage = (props) => {
	const [startups, setStartups] = useState([]);
	const [filters, setFilters] = useState([]);

	const filterWithId = (field, id) => {
		setFilters((filters) => [...filters, `${field}.${id}`]);
	};

	// const removeFilterWithId = (field, id) => {
	// 	const newFilters = filters.filter(
	// 		(filter) => filter !== `${field}.${id}`
	// 	);
	// 	setFilters(newFilters);
	// };

	const removeAllFilters = () => {
		setFilters([]);
	};

	useEffect(() => {
		const fetchStartups = async () => {
			try {
				if (filters.length === 0) {
					const data = await props.firebase.getAllStartups();
					setStartups(data);
				} else {
					const data =
						await props.firebase.getAllStartupsWithFilters(
							filters
						);
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
				const sectors = await props.firebase.getAllSectors();
				const subSectors = await props.firebase.getAllSubSectors();
				setTags((prev) => ({
					...prev,
					Sectors: sectors.map((obj) => ({
						...obj,
						field: "tagsMap",
					})),
					Subsectors: subSectors.map((obj) => ({
						...obj,
						field: "tagsMap",
					})),
				}));
			} catch (error) {
				console.log(error);
			}
		};
		fetchTags();
	}, [props.firebase]);

	const matchConditions = () => {
		if (startups.length !== 0) {
			return <Table startups={startups} />;
		}
		if (startups.length === 0 && filters.length !== 0) {
			return (
				<div className="mx-auto mb-20 space-y-6 | lg:flex lg:flex-row-reverse lg:space-y-0">
					<img
						className="mx-auto max-w-[290px] space-x-10 | lg:max-w-none"
						src={NoResultsImage}
						alt="No Results"
					/>
					<div className="space-y-3 text-center | lg:text-left lg:space-y-6">
						<p className="text-xl font-semibold md:text-4xl text-primary">
							No results found
						</p>
						<p className="max-w-xl whitespace-pre-line | lg:text-lg">
							We couldn’t find any ventures with your
							criteria. Please select another category.
						</p>
					</div>
				</div>
			);
		}

		if (startups.length === 0 && filters.length === 0) {
			return (
				<div className="mx-auto my-32">
					<svg
						className="w-10 h-10 animate-spin text-primary"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				</div>
			);
		}
	};

	return (
		<section className="flex flex-col justify-center mb-20">
			{/* Filters/Tags */}
			<SectorFilters
				filterWithId={filterWithId}
				removeAllFilters={removeAllFilters}
			/>

			{/* Results Table */}
			{matchConditions()}
		</section>
	);
};

export default withFirebase(StartUpsPage);
