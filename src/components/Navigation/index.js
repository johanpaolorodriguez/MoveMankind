import React, { Fragment, useContext } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import SignoutButton from "../SignOut";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/solid";
import logo from "../../assets/logo.png";
import Gravatar from "react-gravatar";
// import Search from "../Search";

const Navigation = () => {
	const authUser = useContext(AuthUserContext);
	const history = useHistory();
	return (
		<Disclosure as="nav" className="bg-primary">
			{({ open }) => (
				<Fragment>
					<div className="px-5 mx-auto max-w-7xl | sm:px-6 | lg:px-8">
						<div className="relative flex items-center justify-between w-full h-20">
							{/* Mobile menu button */}
							<div className=" flex items-center | sm:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center w-8 h-8 text-white rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XIcon
											className="block w-full h-full"
											aria-hidden="true"
										/>
									) : (
										<MenuIcon
											className="block w-full h-full"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>

							<div className="flex items-center w-full">
								{/* Logo */}
								<div className="flex items-center justify-center w-full | sm:items-stretch md:justify-start">
									<Link to={"/"}>
										<div className="flex items-center flex-shrink-0">
											<img
												src={logo}
												alt="Move Mankind Logo"
												className="block w-10 h-10"
											/>
										</div>
									</Link>
								</div>
								{/* Nav Links */}
								<div className="hidden w-full | sm:block sm:ml-6">
									<div className="flex w-full space-x-4">
										<div className="flex items-center justify-end w-full space-x-4">
											<NavbarLink
												to={"/directory"}
												name={"Directory"}
												exact
											/>
											{/* Algolia Search Component */}
											{/* <Search /> */}
											{!authUser && (
												<NavbarLink
													to={
														ROUTES.SIGN_IN
													}
													name={
														"Sign In"
													}
													exact
												/>
											)}
											{!authUser && (
												<NavbarLink
													to={
														ROUTES.SIGN_UP
													}
													name={
														"Sign Up"
													}
													exact
												/>
											)}
											{/* Profile dropdown */}
											{authUser && (
												<Menu
													as="div"
													className="relative z-50 ml-3"
												>
													<div>
														<Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
															<span className="sr-only">
																Open
																user
																menu
															</span>
															<Gravatar
																email={
																	authUser
																		.authUser
																		.email
																}
																className="w-8 h-8 rounded-full"
																default="retro"
															/>
														</Menu.Button>
													</div>
													<Transition
														as={
															Fragment
														}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
															{/* <Menu.Item>
                              {({ active }) => (
                                //TODO:ADD PROPER HREF ATTRBS.
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item> */}
															<Menu.Item>
																<button
																	type="button"
																	className="block w-full px-4 py-2 text-sm font-semibold text-left text-primary hover:bg-blue-500"
																	onClick={() =>
																		history.push(
																			`/user/${authUser.authUser.uid}`
																		)
																	}
																>
																	My
																	Profile
																</button>
															</Menu.Item>
															<Menu.Item>
																<SignoutButton />
															</Menu.Item>
														</Menu.Items>
													</Transition>
												</Menu>
											)}
										</div>
									</div>
								</div>
							</div>
							<div>
								{/* <SearchIcon className="inline-flex items-center justify-center w-8 h-8 text-white rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white | md:hidden" /> */}
								{authUser && (
									<Menu
										as="div"
										className="relative z-50 w-full ml-3 sm:hidden"
									>
										<Menu.Button className="flex w-full text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">
												Open user menu
											</span>
											<Gravatar
												email={
													authUser
														.authUser
														.email
												}
												className="w-8 h-8 rounded-full"
												default="retro"
											/>
										</Menu.Button>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												{/* <Menu.Item>
                              {({ active }) => (
                                //TODO:ADD PROPER HREF ATTRBS.
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item> */}
												<Menu.Item>
													<button
														type="button"
														className="block w-full px-4 py-2 text-sm font-semibold text-left text-primary hover:bg-blue-500"
														onClick={() =>
															history.push(
																`/user/${authUser.authUser.uid}`
															)
														}
													>
														My Profile
													</button>
												</Menu.Item>
												<Menu.Item>
													<SignoutButton />
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								)}
							</div>
						</div>
					</div>

					{/* Mobile menu panel */}
					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{ROUTES.ITEMS.map((item) => {
								const render = (
									<NavPanelLink
										to={item.href}
										key={item.name}
										name={item.name}
										exact
									/>
								);
								if (!authUser && !item.restricted) {
									return render;
								}

								if (authUser) {
									if (item.restricted) {
										return render;
									}
								}
								return null;
							})}
							{/* {authUser && <SignoutButton />} */}
						</div>
					</Disclosure.Panel>
				</Fragment>
			)}
		</Disclosure>
	);
};

const NavbarLink = (props) => (
	<NavLink
		className="px-3 py-2 text-white rounded-md hover:bg-gray-700 hover:text-gray"
		activeClassName="bg-gray-700"
		{...props}
	>
		<span className="flex-shrink-0">{props.name}</span>
	</NavLink>
);

const NavPanelLink = (props) => (
	<NavLink
		className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
		activeClassName="bg-gray-900 text-white"
		{...props}
	>
		<span className="flex-shrink-0">{props.name}</span>
	</NavLink>
);

export default Navigation;
