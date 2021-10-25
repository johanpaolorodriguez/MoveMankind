import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";

const InvestButton = (props) => {
  let history = useHistory();

  const handleOnClick = (user) => {
    // console.log(user);
    // // if (!user) {
    // //   history.push("/signin");
    // // }
    // //userinvestsincompany
  };
  return (
    <AuthUserContext.Consumer>
      {(authUser) => {
        return (
          <button
            onClick={() => handleOnClick(authUser)}
            className="flex justify-center w-full px-8 py-4 text-base font-semibold text-white bg-blue-500 rounded-md font-primary"
          >
            Invest in {props.name}
          </button>
        );
      }}
    </AuthUserContext.Consumer>
  );
};

export default withFirebase(InvestButton);
