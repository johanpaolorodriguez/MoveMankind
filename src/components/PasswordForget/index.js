import React, { useState } from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { useInput } from "../Hooks/input-hook";
import * as ROUTES from '../../constants/routes'

const PasswordForgetPage = () => (
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
);

const PasswordForgetFormBase = (props) => {
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput("");
    const [ error, setError ] = useState(null);

    const onSubmit = event => {
        props.firebase.doPasswordReset(email)
        .then(() => {
            resetEmail();
            console.log(email)
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
                placeholder="Email"
            />

            { error && <p>{ error.message }</p> }

            <button type="submit">Reset my Password</button>
        </form>
    )
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ ROUTES.PASSWORD_FORGET }>Forgot Password?</Link>
    </p>
)

const PasswordForgetForm = compose(
    withFirebase
)(PasswordForgetFormBase);



export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };