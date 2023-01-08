import { Tab } from "@headlessui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";
import Banner from "../Banner";
import FollowButton from "../Follow";
import RichTextEditor from "../RichTextEditor";
import AdminEditor from "../RichTextEditor/adminEditor";
import SignInOrUpPrompt from "../SignIn/SignInOrUpPrompt";
import ContributePrompt from "../ContributePrompt";

const ViewStartUpPage = (props) => {
	const { uid } = useParams();
	const authUser = useContext(AuthUserContext);
	const [startup, setStartup] = useState({});
	const [isSignInOrUpPromptOpen, setSignInOrUpPromptOpen] = useState(false);
	const [isAdminEditorOpen, setAdminEditorOpen] = useState(false);
	const [isContributePromptOpen, setContributePromptOpen] = useState(false);

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	useEffect(() => {
		const fetchStartup = async () => {
			try {
				const data = await props.firebase.getStartupByID(uid);
				setStartup(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStartup();
	}, [props.firebase, props.firebase.db, uid]);

	const saveContent = async (data) => {
		try {
			await props.firebase.doEditStartupPageAsAdmin(startup.uid, data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className="max-w-screen-xl mx-auto">
			<SignInOrUpPrompt
				isOpen={isSignInOrUpPromptOpen}
				setIsOpen={setSignInOrUpPromptOpen}
			/>

			<ContributePrompt
				isOpen={isContributePromptOpen}
				setIsOpen={setContributePromptOpen}
			/>

			<AdminEditor
				open={isAdminEditorOpen}
				setOpen={setAdminEditorOpen}
				saveContent={saveContent}
				page={startup.page}
			/>
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
									<button
										onClick={() =>
											setContributePromptOpen(
												true
											)
										}
										className="flex justify-center w-full px-8 py-4 text-white bg-blue-500 rounded-md text-button font-primary"
									>
										Contribute to this venture
									</button>

									<FollowButton
										startupUid={startup.uid}
										setIsOpen={
											setSignInOrUpPromptOpen
										}
										// userData={userData}
									/>
								</div>
							</div>
						</div>

						<div className="space-y-5 | md:grid grid-cols-2 md:gap-7 md:space-y-0 lg:hidden">
							<button className="flex justify-center w-full px-8 py-4 text-white bg-blue-500 rounded-md text-button font-primary">
								Contribute to this venture
							</button>
							<FollowButton
								startupUid={startup.uid}
								setIsOpen={() =>
									setSignInOrUpPromptOpen(true)
								}
							/>
						</div>
					</header>

					{authUser?.authUser.admin && (
						<div className="pb-24">
							<Banner setOpen={setAdminEditorOpen} />
						</div>
					)}

					{startup?.page &&
						Object.keys(startup.page).length !== 0 && (
							<Tab.Group
								as="section"
								className="min-h-screen"
							>
								<Tab.List className="px-6 space-x-12 text-lg border-gray-300 border-y">
									{Object.keys(startup.page).map(
										(key, index) => {
											return (
												<Tab
													key={index}
													className="font-semibold py-6 focus:outline-none ui-selected:border-b-4 ui-selected:border-blue-500 ui-selected:text-blue-700 | ui-not-selected:text-gray-400 capitalize"
												>
													{key}
												</Tab>
											);
										}
									)}
								</Tab.List>

								<Tab.Panels>
									{Object.entries(startup.page).map(
										([key, value]) => {
											return (
												<Tab.Panel
													key={key}
												>
													<RichTextEditor
														saveContent={
															saveContent
														}
														title={
															key
														}
														initialEditorState={
															value
														}
													/>
												</Tab.Panel>
											);
										}
									)}
								</Tab.Panels>
							</Tab.Group>
						)}
				</>
			)}
		</main>
	);
};

export default withFirebase(ViewStartUpPage);
