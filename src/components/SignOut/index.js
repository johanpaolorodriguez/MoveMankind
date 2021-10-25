import React from "react";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
    onClick={firebase.doSignOut}
  >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
