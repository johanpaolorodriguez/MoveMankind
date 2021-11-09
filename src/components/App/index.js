import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import StartUpsPage from "../StartUps";
import ViewStartUpPage from "../ViewStartUp";
import ViewCategoryPage from "../ViewCategory";
import UserProfilePage from "../UserProfile";
import Footer from "../Footer";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.STARTUPS} component={StartUpsPage} />
      <Route path={ROUTES.STARTUP} component={ViewStartUpPage} />
      <Route path={ROUTES.CATEGORY} component={StartUpsPage} />
      <Route path={ROUTES.PROFILE} component={UserProfilePage} />
      <Footer />
    </Router>
  );
};

export default withAuthentication(App);
