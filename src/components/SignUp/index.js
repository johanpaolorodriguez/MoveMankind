import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { useInput } from "../Hooks/input-hook";
import CreateAccount from "./CreateAccount";
import UserInfo from "./UserInfo";
import InvestmentPreferences from "./InvestmentPreferences";
import { AuthUserContext } from "../Session";

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const SignUpFormBase = (props) => {
  const authUser = useContext(AuthUserContext);
  const [step, setStep] = useState(null);
  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername,
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");

  const {
    value: passwordOne,
    bind: bindPasswordOne,
    reset: resetPasswordOne,
  } = useInput("");

  const { value: name, bind: bindName, reset: resetName } = useInput("");

  const {
    value: country,
    bind: bindCountry,
    reset: resetCountry,
  } = useInput("");

  const {
    value: headline,
    bind: bindHeadline,
    reset: resetHeadline,
  } = useInput("");

  const {
    value: website,
    bind: bindWebsite,
    reset: resetWebsite,
  } = useInput("");

  const {
    value: linkedin,
    bind: bindLinkedin,
    reset: resetLinkedin,
  } = useInput("");

  const {
    value: twitter,
    bind: bindTwitter,
    reset: resetTwitter,
  } = useInput("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const getOnboardingStep = async () => {
      if (!authUser) {
        setStep(1);
      }
      if (authUser && !authUser.authUser.data.name) {
        setStep(2);
      }
      if (authUser && authUser.authUser.data.name) {
        setStep(3);
      }
    };
    getOnboardingStep();
  }, [authUser]);

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const onSubmitCreateAccount = async (event) => {
    event.preventDefault();
    try {
      const newUser = await props.firebase.doCreateUserWithEmailAndPassword(
        email,
        passwordOne
      );
      //add user to firestore database
      await props.firebase.doAddNewUserToDB(newUser.user.uid, {
        username: username,
        email: email,
      });
      resetUsername();
      resetEmail();
      resetPasswordOne();
      nextStep();
    } catch (error) {
      setError(error);
    }
  };

  const onSumbitUserInfo = async (event) => {
    event.preventDefault();
    try {
      await props.firebase.doAddUserInfo({
        name: name,
        country: country,
        headline: headline,
        website: website,
        twitter: twitter,
        linkedin: linkedin,
      });
      nextStep();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitInvestmentPreferences = async (event) => {
    event.preventDefault();
    try {
      await props.firebase.doAddUserInfo({
        //
      });
      props.history.push(ROUTES.STARTUPS);
    } catch (error) {
      console.log(error);
    }
  };

  switch (step) {
    case 1:
      return (
        <>
          <CreateAccount
            bindUsername={bindUsername}
            bindEmail={bindEmail}
            bindPasswordOne={bindPasswordOne}
            onSubmit={onSubmitCreateAccount}
            error={error}
            step={step}
          />
        </>
      );

    case 2:
      return (
        <UserInfo
          bindName={bindName}
          bindCountry={bindCountry}
          bindHeadline={bindHeadline}
          bindWebsite={bindWebsite}
          bindLinkedin={bindLinkedin}
          bindTwitter={bindTwitter}
          onSubmit={onSumbitUserInfo}
          step={step}
        />
      );

    case 3:
      return (
        <InvestmentPreferences
          onSubmit={onSubmitInvestmentPreferences}
          step={step}
        />
      );
    default:
      return null;
  }
};

const SignUpLink = () => (
  <p className="mt-2 text-sm text-center text-gray-600">
    <span className="font-medium text-gray-600">
      Don't have an account?{" "}
      <Link className="text-blue-500 hover:text-indigo-500" to={ROUTES.SIGN_UP}>
        Sign Up
      </Link>
    </span>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
