import { createContext, useContext, useState } from "react";

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
	const value = useState({});
	return (
		<SignUpContext.Provider value={value}>
			{children}
		</SignUpContext.Provider>
	);
};

export const useSignUp = () => {
	const context = useContext(SignUpContext);
	if (!context) {
		throw new Error("useSignUp must be used within a SignUpProvider");
	}
	return context;
};
