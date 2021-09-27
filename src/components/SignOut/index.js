import React from "react";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
    <button
        type="button"
        onclick={ firebase.doSignOut }>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);