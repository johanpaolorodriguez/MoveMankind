import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import CreateAccount from "../SignUp/steps/CreateAccount";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import StartUpsPage from "../StartUps";
import UserProfilePage from "../UserProfile";
import Footer from "../Footer";
import ViewStartUpPage from "../ViewStartUp";
import { Toaster } from "react-hot-toast";
import { SignUpProvider } from "../SignUp/context";
import { About } from "../SignUp/steps/About";
import { Interests } from "../SignUp/steps/Interests";
import { Talent } from "../SignUp/steps/Talent";
import FinacialContributions from "../SignUp/steps/FinancialContributions";
import Example from "../SignUp/InvestmentPreferences";

createStore({
	signUpFormData: {},
});

const App = () => {
	return (
		<StateMachineProvider>
			<Router>
				<div>
					<Navigation />
					<Route exact path={"/example"} component={Example} />
					<Route
						exact
						path={ROUTES.SIGN_UP}
						component={CreateAccount}
					/>
					<Route
						exact
						path={ROUTES.SIGN_UP_ABOUT}
						component={About}
					/>
					<Route
						exact
						path={ROUTES.SIGN_UP_INTERESTS}
						component={Interests}
					/>
					<Route
						exact
						path={ROUTES.SIGN_UP_TALENT}
						component={Talent}
					/>
					<Route
						exact
						path={ROUTES.SIGN_UP_CONTRIBUTIONS}
						component={FinacialContributions}
					/>
					<Route
						exact
						path={ROUTES.SIGN_IN}
						component={SignInPage}
					/>
					<Route
						exact
						path={ROUTES.PASSWORD_FORGET}
						component={PasswordForgetPage}
					/>
					<Route
						exact
						path={ROUTES.ACCOUNT}
						component={AccountPage}
					/>
					<Route
						exact
						path={ROUTES.ADMIN}
						component={AdminPage}
					/>
					<Route
						exact
						path={ROUTES.LANDING}
						component={LandingPage}
					/>
					<Route
						exact
						path={ROUTES.STARTUPS}
						component={StartUpsPage}
					/>
					<Route
						exact
						path={ROUTES.CATEGORY}
						component={StartUpsPage}
					/>
					<Route
						exact
						path={ROUTES.PROFILE}
						component={UserProfilePage}
					/>
					<Route
						exact
						path="/startups/:uid"
						component={ViewStartUpPage}
					/>
					<Footer />
					<Toaster position="top-right" reverseOrder={false} />
				</div>
			</Router>
		</StateMachineProvider>
	);
};

export default withAuthentication(App);
