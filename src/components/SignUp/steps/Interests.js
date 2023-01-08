import { useForm } from "react-hook-form";
import { useSignUp } from "../context";
import { Form } from "../forms/Form";
import { Field } from "../forms/Field";
import { Input } from "../forms/Input";
import { Button } from "../forms/Button";
import ProgressBar from "../ProgressBar";
import * as ROUTES from "../../../constants/routes";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

export const Interests = (props) => {
	const { state, actions } = useStateMachine({ updateAction });
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ defaultValues: state.signUpFormData });
	const history = props.history;

	const onSubmit = (data) => {
		actions.updateAction(data);
		history.push(ROUTES.SIGN_UP_TALENT);
	};

	return (
		<div className="lg:min-h-full lg:overflow-hidden lg:flex">
			<section className="flex-col items-end hidden w-full max-w-lg bg-primary lg:flex">
				<ProgressBar step={2} size={"lg"} />
			</section>

			<section className="flex-auto px-8 pt-12 pb-16 overflow-y-auto sm:px-6 sm:pt-16 lg:pt-0 lg:pb-24">
				<div className="max-w-lg py-8 mx-auto lg:hidden">
					<ProgressBar step={2} />
				</div>
				<Form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-lg mx-auto lg:ml-24 lg:pt-16 space-y-14"
				>
					<div className="max-w-lg pt-8">
						<h2 className="text-[24px] font-extrabold font-tertiary text-slate-900">
							Interests
						</h2>
						<p className="">
							This will help us figure out which companies
							may be of interest to you.
						</p>
					</div>

					<fieldset className="space-y-3">
						<legend className="text-xl font-semibold text-medium font-tertiary">
							In what capacity would you be interested in
							contributing to existential risk ventures?
						</legend>

						<Field label="Money" error={errors?.money}>
							<Input
								{...register("contributing_with")}
								type="checkbox"
								id="money"
								value="money"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field label="Talent" error={errors?.talent}>
							<Input
								{...register("contributing_with")}
								type="checkbox"
								id="talent"
								value="talent"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Time (e.g. participating in research, sharing on social media)"
							error={errors?.time}
						>
							<Input
								{...register("contributing_with")}
								type="checkbox"
								id="time"
								value="time"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Commercial Partnerships"
							error={errors?.commercial_partnerships}
						>
							<Input
								{...register("contributing_with")}
								type="checkbox"
								id="commercial_partnerships"
								value="commercial_partnerships"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>
					</fieldset>

					<fieldset className="space-y-3">
						<legend className="text-xl font-semibold text-medium font-tertiary">
							Which of the following topics would you be
							interested in contributing to? (Please select
							all that apply)
						</legend>

						<Field
							label="Artificial Intelligence Safety"
							error={errors?.aisafety}
						>
							<Input
								{...register("contributing_to")}
								type="checkbox"
								id="aisafety"
								value="aisafety"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Biohacking"
							error={errors?.biohacking}
						>
							<Input
								{...register("contributing_to")}
								type="checkbox"
								id="biohacking"
								value="biohacking"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field label="Climate" error={errors?.climate}>
							<Input
								{...register("contributing_to")}
								type="checkbox"
								id="climate"
								value="climate"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field label="Space" error={errors?.space}>
							<Input
								{...register("contributing_to")}
								type="checkbox"
								id="space"
								value="space"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Longevity"
							error={errors?.longevity}
						>
							<Input
								{...register("contributing_to")}
								type="checkbox"
								id="longevity"
								value="longevity"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Human Enhancement"
							error={errors?.humanenhancement}
						>
							<Input
								{...register("contributing_to")}
								type="checkbox"
								id="humanenhancement"
								value="humanenhancement"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>
					</fieldset>

					<Button className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
						Next
					</Button>
				</Form>
			</section>
		</div>
	);
};
