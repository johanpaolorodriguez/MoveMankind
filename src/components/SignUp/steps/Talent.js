import { useForm } from "react-hook-form";
import { Form } from "../forms/Form";
import { Field } from "../forms/Field";
import { Input } from "../forms/Input";
import { Button } from "../forms/Button";
import ProgressBar from "../ProgressBar";
import * as ROUTES from "../../../constants/routes";
import updateAction from "./updateAction";
import { useStateMachine } from "little-state-machine";

export const Talent = (props) => {
	const { state, actions } = useStateMachine({ updateAction });
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ defaultValues: state.signUpFormData });
	const history = props.history;

	const onSubmit = (data) => {
		actions.updateAction(data);
		history.push(ROUTES.SIGN_UP_CONTRIBUTIONS);
	};

	return (
		<div className="lg:min-h-full lg:overflow-hidden lg:flex">
			<section className="flex-col items-end hidden w-full max-w-lg bg-primary lg:flex">
				<ProgressBar step={3} size={"lg"} />
			</section>

			<section className="flex-auto px-8 pt-12 pb-16 overflow-y-auto sm:px-6 sm:pt-16 lg:pt-0 lg:pb-24">
				<div className="max-w-lg py-8 mx-auto lg:hidden">
					<ProgressBar step={3} />
				</div>
				<Form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-lg mx-auto lg:ml-24 lg:pt-16 space-y-14"
				>
					<div className="max-w-lg pt-8">
						<h2 className="text-[24px] font-extrabold font-tertiary text-slate-900">
							Talent Contributions
						</h2>
						<p className="">
							We can help match you with companies that
							need your expertise!
						</p>
					</div>
					<fieldset className="space-y-2">
						<legend className="text-xl font-semibold text-medium font-tertiary">
							In what capacity would you be interested in
							contributing your talent? Please select all
							that apply.
						</legend>

						<Field
							label="Part-Time Talent"
							error={errors?.part_time}
						>
							<Input
								{...register("contributing_talent")}
								type="checkbox"
								id="part_time"
								value="part_time"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Full-Time Talent"
							error={errors?.full_time}
						>
							<Input
								{...register("contributing_talent")}
								type="checkbox"
								id="full_time"
								value="full_time"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field label="Advisor" error={errors?.advisor}>
							<Input
								{...register("contributing_talent")}
								type="checkbox"
								id="advisor"
								value="advisor"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Entrepreneur-in-Residence"
							error={errors?.entrepreneur_in_residence}
						>
							<Input
								{...register("contributing_talent")}
								type="checkbox"
								id="entrepreneur_in_residence"
								value="entrepreneur_in_residence"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Volunteer"
							error={errors?.volunteer}
						>
							<Input
								{...register("contributing_talent")}
								type="checkbox"
								id="volunteer"
								value="volunteer"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Freelancer"
							error={errors?.freelancer}
						>
							<Input
								{...register("contributing_talent")}
								type="checkbox"
								id="freelancer"
								value="freelancer"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Research Participant"
							error={errors?.research_participant}
						>
							<Input
								{...register("contributing_talent")}
								type="checkbox"
								id="research_participant"
								value="research_participant"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>
					</fieldset>

					<fieldset className="space-y-2">
						<legend className="text-xl font-semibold text-medium font-tertiary">
							What skills would you be interested in
							contributing?
						</legend>

						<textarea
							id="skills"
							{...register("skills")}
							rows="4"
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
							placeholder="Write your thoughts here..."
						/>
					</fieldset>

					<Button className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:bg-blue-400">
						Next
					</Button>
				</Form>
			</section>
		</div>
	);
};
