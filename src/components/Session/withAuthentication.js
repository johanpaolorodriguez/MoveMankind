import React, { useState, useEffect } from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthentication = Component => {
    const WithAuthentication = (props) => {
        const [authUser, setAuthUser] = useState(null);
        
        useEffect(() => {
            //get the authenticated user from Firebase
            let listener = props.firebase.auth.onAuthStateChanged(authUser => {
                authUser
                ? setAuthUser({ authUser })
                : setAuthUser( null );
            })

            return () => {
                listener();
            }
        }) 

        return(
            <AuthUserContext.Provider value={ authUser }>
                <Component { ...props } />
            </AuthUserContext.Provider>
        );                      
    }
    return withFirebase(WithAuthentication);
}

export default withAuthentication;