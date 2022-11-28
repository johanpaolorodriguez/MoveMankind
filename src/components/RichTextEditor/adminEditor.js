import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import RichTextEditor from "./index";

export default function AdminEditor({
	open,
	setOpen,
	page = null,
	saveContent,
}) {
	const cancelButtonRef = useRef(null);
	const [title, setTitle] = useState("");
	const [initialValue, setInitialValue] = useState(null);
	// const [selectedPageSection, setSelectedPageSection] = useState(null);

	const handleChange = (value) => {
		setTitle(value);
		if (page[value]) {
			setInitialValue(page[value]);
		}
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative min-h-[75vh] overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-screen-xl">
								<div className="px-4 py-3 sm:flex sm:px-6">
									<input
										value={title}
										onChange={(e) =>
											setTitle(e.target.value)
										}
										className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none autofill:bg-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
										id="tab-title"
										name="text"
										type="text"
										placeholder="Title"
									/>

									{page && (
										<Listbox
											value={title}
											onChange={handleChange}
										>
											<Listbox.Button>
												{title
													? title
													: "Sections"}
											</Listbox.Button>
											<Listbox.Options>
												{Object.keys(
													page
												).map(
													(
														key,
														index
													) => (
														<Listbox.Option
															key={
																index
															}
															value={
																key
															}
															className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
														>
															{key}
														</Listbox.Option>
													)
												)}
											</Listbox.Options>
										</Listbox>
									)}

									<button
										type="button"
										className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen(false)}
										ref={cancelButtonRef}
									>
										<svg
											className="w-8 h-8 text-gray-500 icon"
											width="24"
											height="24"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												fill="none"
												d="M0 0h24v24H0z"
											/>
											<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" />
										</svg>
									</button>
								</div>
								<RichTextEditor
									saveContent={saveContent}
									title={title}
									initialEditorState={initialValue}
									isEditable={true}
								/>
								<div></div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
