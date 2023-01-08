import React from "react";

export const Input = React.forwardRef((props, ref) => {
	let { className = null, ...rest } = props;

	if (!className) {
		className =
			"relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none autofill:bg-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm";
	}

	return <input ref={ref} {...rest} className={className} />;
});
