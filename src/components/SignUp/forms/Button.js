import { forwardRef } from "react";

export const Button = forwardRef(({ children, ...props }, ref) => {
	return (
		<button ref={ref} {...props}>
			{children}
		</button>
	);
});
