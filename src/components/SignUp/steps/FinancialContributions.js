import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "../context";
import { Form } from "../forms/Form";
import { Field } from "../forms/Field";
import { Input } from "../forms/Input";
import { Button } from "../forms/Button";
import ProgressBar from "../ProgressBar";
import { AuthUserContext } from "../../Session";
import updateAction from "./updateAction";
import { useStateMachine } from "little-state-machine";
import { withFirebase } from "../../Firebase";
import * as ROUTES from "../../../constants/routes";

const CreateFinacialContributionsBase = (props) => {
	const { state, actions } = useStateMachine({ updateAction });
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ defaultValues: state.signUpFormData });
	const history = props.history;

	const onSubmit = async (data) => {
		actions.updateAction(data);

		try {
			await props.firebase.doAddUserInfo(state.signUpFormData);
			history.push(ROUTES.STARTUPS);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="lg:min-h-full lg:overflow-hidden lg:flex">
			<section className="flex-col items-end hidden w-full max-w-lg bg-primary lg:flex">
				<ProgressBar step={4} size={"lg"} />
			</section>

			<section className="flex-auto px-8 pt-12 pb-16 overflow-y-auto sm:px-6 sm:pt-16 lg:pt-0 lg:pb-24">
				<div className="max-w-lg py-8 mx-auto lg:hidden">
					<ProgressBar step={4} />
				</div>
				<Form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-lg mx-auto lg:ml-24 lg:pt-16 space-y-14"
				>
					<div className="max-w-lg pt-8">
						<h2 className="text-[24px] font-extrabold font-tertiary text-slate-900">
							Financial Contributions
						</h2>
						<p className="">
							Let us know if you are interested in
							contributing financially to companies
						</p>
					</div>
					<fieldset className="space-y-2">
						<legend className="text-xl font-semibold text-medium font-tertiary">
							How much money would you donate to
							existential risk ventures?
						</legend>

						<Field
							label="US $1-100"
							error={errors?.donate_USD1_100}
						>
							<Input
								{...register("donate_range")}
								type="radio"
								id="donate_USD1_100"
								value="donate_USD1_100"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="US $101-500"
							error={errors?.donate_USD101_500}
						>
							<Input
								{...register("donate_range")}
								type="radio"
								id="donate_USD101_500"
								value="donate_USD101_500"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="US $501-1000"
							error={errors?.donate_USD501_1000}
						>
							<Input
								{...register("donate_range")}
								type="radio"
								id="donate_USD501_1000"
								value="donate_USD501_1000"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="US $1000+"
							error={errors?.donate_USD1000}
						>
							<Input
								{...register("donate_range")}
								type="radio"
								id="donate_USD1000"
								value="donate_USD1000"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field label="None" error={errors?.donate_USD0}>
							<Input
								{...register("donate_range")}
								type="radio"
								id="donate_USD0"
								value="donate_USD0"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>
					</fieldset>

					<fieldset className="space-y-2">
						<legend className="text-xl font-semibold text-medium font-tertiary">
							How much money would you invest in
							existential risk ventures?
						</legend>

						<Field
							label="US $1-100"
							error={errors?.invest_USD1_100}
						>
							<Input
								{...register("invest_range")}
								type="radio"
								id="invest_USD1_100"
								value="invest_USD1_100"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="US $101-500"
							error={errors?.invest_USD101_500}
						>
							<Input
								{...register("invest_range")}
								type="radio"
								id="invest_USD101_500"
								value="invest_USD101_500"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="US $501-1000"
							error={errors?.invest_USD501_1000}
						>
							<Input
								{...register("invest_range")}
								type="radio"
								id="invest_USD501_1000"
								value="invest_USD501_1000"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="US $1000+"
							error={errors?.invest_USD1000}
						>
							<Input
								{...register("invest_range")}
								type="radio"
								id="invest_USD1000"
								value="invest_USD1000"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field label="None" error={errors?.invest_USD0}>
							<Input
								{...register("invest_range")}
								type="radio"
								id="invest_USD0"
								value="invest_USD0"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>
					</fieldset>

					<fieldset className="space-y-2">
						<legend className="text-xl font-semibold text-medium font-tertiary">
							What is your investing experience?
						</legend>

						<Field
							label="Crowdfunding Platforms"
							error={errors?.crowdfunding_platforms}
						>
							<Input
								{...register("investing_experience")}
								type="radio"
								id="crowdfunding_platforms"
								value="crowdfunding_platforms"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field label="Tokens" error={errors?.tokens}>
							<Input
								{...register("investing_experience")}
								type="radio"
								id="tokens"
								value="tokens"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Public Equities"
							error={errors?.public_equities}
						>
							<Input
								{...register("investing_experience")}
								type="radio"
								id="public_equities"
								value="public_equities"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Angel Investing"
							error={errors?.angel_investing}
						>
							<Input
								{...register("investing_experience")}
								type="radio"
								id="angel_investing"
								value="angel_investing"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field
							label="Venture Capitalist"
							error={errors?.venture_capitalist}
						>
							<Input
								{...register("investing_experience")}
								type="radio"
								id="venture_capitalist"
								value="venture_capitalist"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>

						<Field label="None" error={errors?.noexperience}>
							<Input
								{...register("investing_experience")}
								type="radio"
								id="noexperience"
								value="noexperience"
								className="mr-4 checked:bg-blue-500"
							/>
						</Field>
					</fieldset>
					<Button className="relative flex items-center justify-center w-full h-12 px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
						Submit
					</Button>
				</Form>
			</section>
		</div>
	);
};

const FinancialContributions = withFirebase(CreateFinacialContributionsBase);

export default FinancialContributions;
