export default function updateAction(state, payload) {
	return {
		...state,
		signUpFormData: {
			...state.signUpFormData,
			...payload,
		},
	};
}
