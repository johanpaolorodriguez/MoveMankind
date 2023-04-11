import { useRef, useState } from "react";
import Modal from "../Modal";
import { Form } from "../SignUp/forms/Form";
import { useForm, useFieldArray } from "react-hook-form";
import { Field } from "../SignUp/forms/Field";
import { Input } from "../SignUp/forms/Input";
import { Button } from "../SignUp/forms/Button";
import FileInput from "../SignUp/forms/FileInput";

export default function AddVentureForm({ isOpen, setIsOpen, saveStartupToDB }) {
	const cancelButtonRef = useRef(null);
	const {
		handleSubmit,
		register,
		watch,
		control,
		formState: { errors },
	} = useForm({
		mode: "onSubmit",
	});

	const {
		fields: tagFields,
		append: tagAppend,
		remove: tagRemove,
	} = useFieldArray({
		control,
		name: "tags",
		rules: {
			required: {
				value: true,
				message: "At least one tag is required",
			},
		},
	});

	const onSubmit = (data) => {
		saveStartupToDB(data, {
			bgimg: {
				fileName: data.bgimg.name,
				file: data.bgimg,
			},
		});
	};

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div className="sm:flex sm:items-start">
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<Form onSubmit={handleSubmit(onSubmit)}>
								<h2 className="text-[24px] font-semibold font-tertiary text-slate-900">
									Add Venture
								</h2>

								<fieldset className="space-y-2">
									<legend className="text-xl font-semibold text-medium font-tertiary">
										Ventures added here will be
										saved in the database.
									</legend>

									<Field
										label="name"
										error={errors?.name}
									>
										<Input
											required
											{...register("name", {
												required: `this field is required`,
											})}
											type="text"
											id="name"
											placeholder="name"
										/>
									</Field>

									<Field
										label="description"
										error={errors?.description}
									>
										<Input
											required
											{...register(
												"description",
												{
													required: `this field is required`,
												}
											)}
											type="text"
											id="description"
											placeholder="description"
										/>
									</Field>

									<Field
										label="city"
										error={errors?.city}
									>
										<Input
											required
											{...register("city", {
												required: `this field is required`,
											})}
											type="text"
											id="city"
											placeholder="city"
										/>
									</Field>

									<Field
										label="country"
										error={errors?.country}
									>
										<Input
											required
											{...register("country", {
												required: `this field is required`,
											})}
											type="text"
											id="country"
											placeholder="country"
										/>
									</Field>

									<Field
										label="funding type"
										error={errors?.funding_type}
									>
										<Input
											required
											{...register(
												"funding_type",
												{
													required: `this field is required`,
												}
											)}
											type="text"
											id="funding_type"
											placeholder="funding_type"
										/>
									</Field>

									<Field
										label="company type"
										error={errors?.company_type}
									>
										<Input
											required
											{...register(
												"company_type",
												{
													required: `this field is required`,
												}
											)}
											type="text"
											id="company_type"
											placeholder="company_type"
										/>
									</Field>

									<Field
										label="website"
										error={errors?.website}
									>
										<Input
											{...register("website")}
											type="text"
											id="website"
											placeholder="website"
										/>
									</Field>

									<Field
										label="twitter"
										error={errors?.twitter}
									>
										<Input
											{...register("twitter")}
											type="text"
											id="twitter"
											placeholder="twitter"
										/>
									</Field>

									<Field
										label="facebook"
										error={errors?.facebook}
									>
										<Input
											{...register("facebook")}
											type="text"
											id="facebook"
											placeholder="facebook"
										/>
									</Field>

									<Field
										label="background image"
										error={errors?.bgimg}
									>
										<FileInput
											required
											name="bgimg"
											control={control}
										/>
									</Field>

									<Field
										label="tags"
										error={errors?.tags}
									>
										<section required>
											<small className="block font-medium text-red-600">
												{
													errors?.tags
														?.root
														?.message
												}
											</small>
											{tagFields.map(
												(field, index) => {
													return (
														<article
															className="flex items-center my-2 ml-6 space-x-2"
															key={
																field.id
															}
														>
															<label>
																<span className="hidden sr-only">
																	input
																	a
																	tag
																	name
																</span>

																<Input
																	required
																	{...register(
																		`tags.${index}.name`,
																		{
																			minLength:
																				{
																					value: 2,
																					message: "add more than 2 characters ",
																				},
																			required: `this field is required`,
																		}
																	)}
																	placeholder="add a tag"
																/>
																{errors
																	.tags?.[
																	index
																] && (
																	<small className="block font-medium text-red-600">
																		{
																			errors
																				?.tags?.[
																				index
																			]
																				?.name
																				?.message
																		}
																	</small>
																)}
															</label>
															<button
																className="p-2 text-red-500"
																type="button"
																onClick={() =>
																	tagRemove(
																		index
																	)
																}
															>
																<svg
																	className="w-5 h-5"
																	aria-hidden="true"
																	fill="none"
																	stroke="currentColor"
																	strokeWidth={
																		1.5
																	}
																	viewBox="0 0 24 24"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M6 18L18 6M6 6l12 12"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</button>
														</article>
													);
												}
											)}
											<button
												className="items-center px-2 py-2 text-sm text-blue-500 bg-white border border-blue-500 rounded-md font-primary hover:bg-blue-500 hover:text-white"
												type="button"
												onClick={() => {
													tagAppend({
														name: "",
													});
												}}
											>
												Add more
											</button>
										</section>
									</Field>
								</fieldset>
								<Button className="relative flex items-center justify-center w-full h-12 px-4 py-2 mt-10 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
									Save
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
