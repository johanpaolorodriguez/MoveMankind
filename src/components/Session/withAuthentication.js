import React, { useState, useEffect } from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthentication = (Component) => {
	const WithAuthentication = (props) => {
		const [authUser, setAuthUser] = useState(null);
		const [isLoading, setIsLoading] = useState(null);

		useEffect(() => {
			//get the authenticated user from Firebase
			setIsLoading(true);
			let listener = props.firebase.auth.onAuthStateChanged(
				(authUser) => {
					if (authUser) {
						const getUserData = async () => {
							const userData =
								await props.firebase.getUserByID(
									authUser.uid
								);

							const userClaims =
								await authUser.getIdTokenResult();

							authUser.admin = userClaims.claims.admin;
							authUser.data = userData;
							setAuthUser({ authUser });
							setIsLoading(false);
						};
						getUserData();
					} else {
						setAuthUser(null);
						setIsLoading(false);
					}
				}
			);

			return () => {
				listener();
			};
		}, [props.firebase.auth, props.firebase]);

		return (
			<AuthUserContext.Provider value={{ authUser, isLoading }}>
				<Component {...props} />
			</AuthUserContext.Provider>
		);
	};
	return withFirebase(WithAuthentication);
};

export default withAuthentication;
