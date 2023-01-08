import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";
import Tags from "../Tags";
import { LocationMarkerIcon } from "@heroicons/react/solid";

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

	const filterWithId = (field, id) => {
		//TODO: check if field is in filters []
		setFilters((filters) => [...filters, `${field}.${id}`]);
	};

	const removeFilterWithId = (field, id) => {
		const newFilters = filters.filter(
			(filter) => filter !== `${field}.${id}`
		);
		setFilters(newFilters);
	};
	return (
		<div className="mt-16 space-y-12">
			{/* category page {hex[uid]} */}
			<div>
				<h1 className="text-3xl font-bold text-center text-primary font-primary">
					<span
						className={`highlight-background-b bg-gradient-to-r from-${hex[uid]} to-${hex[uid]}`}
					>
						{category.name}
					</span>
				</h1>
				<p className="text-center">{category.description}</p>
			</div>
			<section className="flex justify-center mx-auto space-x-6 max-w-7xl">
				{/* tags */}
				<div className="flex flex-col space-y-6">
					<p className="w-64 p-4 mt-10 text-base text-center text-gray-500 bg-white rounded-md">
						start exploring ventures by adding a tag!
					</p>
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
					{startups.map((startup) => {
						return (
							<article
								className="max-w-2xl"
								key={startup.uid}
							>
								<Link to={`/startups/${startup.uid}`}>
									<div className="flex w-full space-y-2 overflow-hidden bg-white border border-transparent rounded-lg filter drop-shadow-xl hover:border-primary">
										<img
											src={startup.logo}
											alt=""
											className="object-contain object-center w-40 h-40 p-4"
										/>
										<div className="p-4">
											<p className="text-2xl font-bold">
												{startup.name}
											</p>
											<p className="flex items-center space-x-1 text-base font-semibold">
												<LocationMarkerIcon className="inline w-4 h-4" />
												<span>
													{
														startup.headQuarters
													}
													,{" "}
													{
														startup.country
													}
												</span>
											</p>
											<p className="text-sm">
												{
													startup.description
												}
											</p>
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
