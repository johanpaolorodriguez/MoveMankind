import { useForm } from "react-hook-form";
import { Form } from "../forms/Form";
import { Field } from "../forms/Field";
import { Input } from "../forms/Input";
import { Button } from "../forms/Button";
import ProgressBar from "../ProgressBar";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import * as ROUTES from "../../../constants/routes";

export const About = (props) => {
	const { state, actions } = useStateMachine({ updateAction });
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ defaultValues: state.signUpFormData });
	const history = props.history;

	const onSubmit = (data) => {
		actions.updateAction(data);
		history.push(ROUTES.SIGN_UP_INTERESTS);
	};

	return (
		<div className="lg:min-h-full lg:overflow-hidden lg:flex">
			<section className="flex-col items-end hidden w-full max-w-lg bg-primary lg:flex">
				<ProgressBar step={1} size={"lg"} />
			</section>

			<section className="flex-auto px-8 pt-12 pb-16 overflow-y-auto sm:px-6 sm:pt-16 lg:pt-0 lg:pb-24">
				<div className="max-w-lg py-8 mx-auto lg:hidden">
					<ProgressBar step={1} />
				</div>

				<Form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-lg mx-auto lg:ml-24 lg:pt-16"
				>
					<fieldset className="space-y-9">
						<legend className="mt-6 text-2xl text-h3 text-slate-900">
							Tell us about yourself
						</legend>
						<Field label="Full Name" error={errors?.fullName}>
							<Input
								{...register("fullName", {
									required: "Full Name is required",
								})}
								type="text"
								id="fullName"
								placeholder="Full Name"
								autoComplete="fullName"
								required
							/>
						</Field>

						<Field label="Country" error={errors?.country}>
							<Input
								{...register("country", {
									required: "Country is required",
								})}
								type="text"
								id="country"
								placeholder="Country"
								autoComplete="country"
								required
							/>
						</Field>

						<Field
							label="Headline/intro"
							error={errors?.headline}
						>
							<Input
								{...register("headline")}
								type="text"
								id="headline"
								placeholder="Headline"
								autoComplete="headline"
								required
							/>
						</Field>

						<Field
							label="Personal Website"
							error={errors?.website}
						>
							<Input
								{...register("website")}
								type="text"
								id="website"
								placeholder="Website"
								autoComplete="website"
							/>
						</Field>

						<Field
							label="LinkedIn URL"
							error={errors?.linkedin}
						>
							<Input
								{...register("linkedin")}
								type="text"
								id="linkedin"
								placeholder="LinkedIn URL"
								autoComplete="linkedin"
							/>
						</Field>

						<Field
							label="Twitter Handle"
							error={errors?.twitter}
						>
							<Input
								{...register("twitter")}
								type="text"
								id="twitter"
								placeholder="Twitter Handle"
								autoComplete="twitter"
							/>
						</Field>

						<Button className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
							Next
						</Button>
					</fieldset>
				</Form>
			</section>
		</div>
	);
};
