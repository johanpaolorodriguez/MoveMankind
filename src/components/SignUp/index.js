import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom'
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from '../../constants/routes'
import { useInput } from "../Hooks/input-hook";

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
            <SignUpForm />
    </div>
);

const SignUpFormBase = (props) => {
    const { value:username, bind:bindUsername, reset:resetUsername } = useInput("");
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput("");
    const { value:passwordOne, bind:bindPasswordOne, reset:resetPasswordOne } = useInput("");
    const { value:passwordTwo, bind:bindPasswordTwo, reset:resetPasswordTwo } = useInput("");
    const [error, setError] = useState("");
    
    const onSubmit = event => {
        props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            resetUsername();
            resetEmail();
            resetPasswordOne();
            resetPasswordTwo();
            props.history.push(ROUTES.HOME)
        })
        .catch(error => {
            setError(error);
        })
        event.preventDefault()
    }

    const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

    return (
        <form onSubmit={ onSubmit }>
        <input
            { ...bindUsername }
            name="username"
            type="text"
            placeholder="Full Name"
        />
        <input
            { ...bindEmail }
            name="email"
            type="email"
            placeholder="Email"
        />
        <input
            { ...bindPasswordOne }
            name="passwordOne"
            type="password"
            placeholder="Password"
        />
        <input
            { ...bindPasswordTwo }
            name="passwordTwo"
            type="password"
            placeholder="Confirm Password"
        />
        <button disabled={ isInvalid } type="submit">Sign Up</button>

        { error && <p>{ error.message }</p> }
    </form>
    )
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
)

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };