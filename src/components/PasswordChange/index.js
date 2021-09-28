import React from "react";
import { useState } from "react";
import { withFirebase } from "../Firebase";
import { useInput } from "../Hooks/input-hook";


const PasswordChangeForm = (props) => {
    const { value:passwordOne, bind:bindPasswordOne, reset:resetPasswordOne } = useInput("");
    const { value:passwordTwo, bind:bindPasswordTwo, reset:resetPasswordTwo } = useInput("");
    const [error, setError] = useState(null)

    const onSubmit = event => {
        props.firebase.doPasswordUpdate(passwordOne)
        .then(() => {
            resetPasswordOne();
            resetPasswordTwo();
        })
        .catch(error => {
            setError(error);
        })

        event.preventDefault();
    }

    return(
        <form onSubmit={ onSubmit }>
            <input
                { ...bindPasswordOne }
                name="passwordOne"
                type="password"
                placeholder="New Password"
             />
             
            <input
                { ...bindPasswordTwo }
                name="passwordTwo"
                type="password"
                placeholder="Confirm New Password"
             />
             
            <button type="submit">Change Password</button>

            {error && <p>{ error.message }</p>}
        </form>
    )
}

export default withFirebase(PasswordChangeForm);