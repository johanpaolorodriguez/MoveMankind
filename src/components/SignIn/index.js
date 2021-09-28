import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import { SignUpLink } from "../SignUp"
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from '../../constants/routes'
import { useInput } from "../Hooks/input-hook";

const SignInPage = () => (
    <div>
        <h1>SignIn</h1>
            <SignInForm />
            <SignUpLink />
    </div>
);

const SignInFormBase = (props) => {
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput("");
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput("");
    const [ error, setError ] = useState(null)

    const onSubmit = event => {
        props.firebase.doSignInWithEmailAndPassword(email, password)
        .then(authUser => {
            resetEmail();
            resetPassword();
            props.history.push(ROUTES.HOME)
        })
        .catch(error => {
            setError(error);
        })
        event.preventDefault();
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input 
                { ...bindEmail } 
                name="email" 
                type="email" 
                placeholder="email" />

            <input 
                { ...bindPassword } 
                name="password" 
                type="password" 
                placeholder="Password" />
            <button type="submit">Sign In</button>
                
            { error && <p>{ error.message }</p> }
        </form>
    )
}



const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };