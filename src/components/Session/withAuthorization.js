import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { compose } from "recompose";
import AuthUserContext from "./context";
import * as ROUTES from "../../constants/routes"
import { withFirebase } from "../Firebase";

const withAuthorization = (condition) => Component => {
    const WithAuthorization = (props) => {
        useEffect(() => {
            let listener = props.firebase.auth.onAuthStateChanged(authUser => {
                if(!condition(authUser)) {
                    props.history.push(ROUTES.SIGN_IN);
                }
            })

            return () => {
                listener();
            }
        })

        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    condition(authUser) 
                        ? <Component { ...props } />
                        : null
                }
            </AuthUserContext.Consumer>
        )
    }

    return compose(
        withRouter,
        withFirebase
    )(WithAuthorization);
}

export default withAuthorization;