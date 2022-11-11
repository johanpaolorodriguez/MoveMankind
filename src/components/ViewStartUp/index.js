import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";
import FollowButton from "../Follow";
import { useLocation } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { AuthUserContext } from "../Session";
import RichTextEditor from "../RichTextEditor";

const ViewStartUpPage = (props) => {
	const { uid } = useParams();
	const authUser = useContext(AuthUserContext);
	const [startup, setStartup] = useState({});
	const [overview, setOverview] = useState("");

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	useEffect(() => {
		const fetchStartup = async () => {
			try {
				const data = await props.firebase.getStartupByID(uid);
				setStartup(data);
				setOverview(data.overview);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStartup();
	}, [props.firebase, uid]);

	const saveContent = async (editorState) => {
		console.log("viewstartups", editorState);
		try {
			await props.firebase.doEditStartupPageAsAdmin(
				startup.uid,
				editorState
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className="max-w-screen-xl mx-auto">
			{startup && (
				<>
					<header className="flex flex-col justify-around m-6 space-y-7 | md:space-y-14 md:m-12">
						<hgroup className="space-y-4">
							<h1 className="text-4xl font-semibold">
								{startup.name}
							</h1>
							<p className="text-xl text-gray-700">
								{startup.description}
							</p>
						</hgroup>

						<div className="flex flex-wrap space-x-2">
							{startup.tags &&
								startup.tags.map((tag) => (
									<span
										key={tag}
										className="inline px-2 py-1 my-1 text-gray-600 capitalize bg-gray-200 rounded-md text-card-tags"
									>
										{tag}
									</span>
								))}
						</div>

						<div className="space-y-7 | md:space-y-0 md:grid md:grid-cols-3 md:gap-7 lg:gap-20">
							<img
								className="object-cover object-center w-full h-auto rounded-md | md:col-span-2"
								src={startup.bgimg}
								alt=""
							/>
							<div className="flex flex-col justify-between">
								<dl className="grid grid-cols-2 gap-8 | md:flex md:flex-col">
									<div>
										<dt className="text-lg font-semibold uppercase text-primary">
											HEADQUARTERS
										</dt>
										<dd className="font-secondary">
											{startup.city
												? `${startup.city}, ${startup.country} `
												: startup.country}
										</dd>
									</div>
									<div>
										<dt className="text-lg font-semibold uppercase text-primary">
											FUNDING STAGE
										</dt>
										<dd className="font-secondary">
											{startup["funding type"]}
										</dd>
									</div>
									<div>
										<dt className="text-lg font-semibold uppercase text-primary">
											WEBSITE
										</dt>
										<dd className="text-blue-900 underline font-secondary line-clamp-2">
											<a
												href={
													startup.website
												}
												target="blank"
											>
												{startup.website}
											</a>
										</dd>
									</div>
								</dl>

								<div className="hidden | lg:flex lg:flex-col-reverse lg:space-y-7">
									<button className="flex justify-center w-full px-8 py-4 text-white bg-blue-500 rounded-md text-button font-primary">
										Contribute to this venture
									</button>
									<button className="flex justify-center w-full px-8 py-4 text-blue-500 bg-white border border-blue-500 rounded-md text-button font-primary | md:order-first">
										Keep me updated
									</button>
									<FollowButton
										startupUid={startup.uid}
									/>
								</div>
							</div>
						</div>

						<div className="space-y-5 | md:grid grid-cols-2 md:gap-7 md:space-y-0 lg:hidden">
							<button className="flex justify-center w-full px-8 py-4 text-white bg-blue-500 rounded-md text-button font-primary">
								Contribute to this venture
							</button>
							<button className="flex justify-center w-full px-8 py-4 text-blue-500 bg-white border border-blue-500 rounded-md text-button font-primary | md:order-first">
								Keep me updated
							</button>
							<FollowButton startupUid={startup.uid} />
						</div>
					</header>

					<Tab.Group as="section">
						<Tab.List className="px-6 space-x-12 text-lg border-gray-300 border-y">
							<Tab className="font-semibold py-6 focus:outline-none ui-selected:border-b-4 ui-selected:border-blue-500 ui-selected:text-blue-700 | ui-not-selected:text-gray-400">
								Overview
							</Tab>
							<Tab className="focus:outline-none font-semibold py-6 ui-selected:border-b-4 ui-selected:border-blue-500 ui-selected:text-blue-700 | ui-not-selected:text-gray-400">
								How to Contribute
							</Tab>
							<Tab className="focus:outline-none font-semibold py-6 ui-selected:border-b-4 ui-selected:border-blue-500 ui-selected:text-blue-700 | ui-not-selected:text-gray-400">
								Faq
							</Tab>
						</Tab.List>
						<Tab.Panels>
							<Tab.Panel>
								<RichTextEditor
									saveContent={saveContent}
									title={"overview"}
									initialEditorState={overview}
								/>
							</Tab.Panel>
							<Tab.Panel>Content 2</Tab.Panel>
							<Tab.Panel>Content 3</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</>
			)}
		</main>
	);
};

export default withFirebase(ViewStartUpPage);
