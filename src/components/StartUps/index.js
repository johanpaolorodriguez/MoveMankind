import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";
import Table from "./table";
import SectorFilters from "../SectorFilters";
import NoResultsImage from "../../assets/Illustration-No Results.png";
import { AuthUserContext } from "../Session";
import Banner from "../Banner";
import AddVentureForm from "../Admin/AddVentureForm";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/solid";

const customToast = (text) => {
	return toast.custom((t) => (
		<div
			className={`${
				t.visible ? "animate-enter" : "animate-leave"
			} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
		>
			<div className="flex-1 w-0 p-4">
				<div className="flex items-start">
					<div className="flex-shrink-0 pt-0.5">
						<CheckCircleIcon className="w-10 h-10 text-green-500 rounded-full" />
					</div>
					<div className="flex-1 ml-3">
						<p className="text-sm font-medium text-gray-900">
							{text}
						</p>
					</div>
				</div>
			</div>
			<div className="flex border-l border-gray-200">
				<button
					onClick={() => toast.dismiss(t.id)}
					className="flex items-center justify-center w-full p-4 text-sm font-medium text-indigo-600 border border-transparent rounded-none rounded-r-lg hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Close
				</button>
			</div>
		</div>
	));
};

const StartUpsPage = (props) => {
	const { authUser } = useContext(AuthUserContext);
	const [startups, setStartups] = useState([]);
	const [filters, setFilters] = useState([]);
	const [isAddVentureFormOpen, setAddVentureFormOpen] = useState(false);

	const filterWithId = (field, id) => {
		setFilters((filters) => [...filters, `${field}.${id}`]);
	};

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

	const saveStartupToDB = async (data, files) => {
		try {
			const attempt = await props.firebase.doAddStartupToDBasAdmin(
				data,
				files
			);

			if (attempt) {
				customToast(`Your entry has been saved.`);
			} else {
				customToast(`There was an error. Please try again`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const matchConditions = () => {
		if (startups.length !== 0) {
			return <Table startups={startups} />;
		}
		if (startups.length === 0 && filters.length !== 0) {
			return (
				<div className="mx-auto py-20 space-y-6 | lg:flex lg:flex-row-reverse lg:space-y-0">
					<img
						className="mx-auto max-w-[290px] space-x-10 | lg:max-w-none lg:pt-16"
						src={NoResultsImage}
						alt="No Results"
					/>
					<div className="space-y-3 text-center | lg:text-left lg:space-y-6">
						<p className="text-lg font-semibold md:text-3xl text-primary">
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
			<AddVentureForm
				isOpen={isAddVentureFormOpen}
				setIsOpen={setAddVentureFormOpen}
				saveStartupToDB={saveStartupToDB}
			/>
			{/* Filters/Tags */}
			<SectorFilters
				filterWithId={filterWithId}
				removeAllFilters={removeAllFilters}
			/>

			{/* Results Table */}
			{matchConditions()}

			{authUser?.authUser.admin && (
				<div className="pb-6">
					<Banner
						title={`Add a venture`}
						functions={[
							{
								function: setAddVentureFormOpen,
								content: `Add Venture`,
							},
						]}
					/>
				</div>
			)}
		</section>
	);
};

export default withFirebase(StartUpsPage);
