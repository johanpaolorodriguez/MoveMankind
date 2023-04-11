import { useController } from "react-hook-form";
import { useState } from "react";

export default function FileInput({ control, name }) {
	const { field } = useController({ control, name });
	const [value, setValue] = useState("");
	console.log(value);
	return (
		<input
			type="file"
			onChange={(e) => {
				setValue(e.target.files[0]);
				field.onChange(e.target.files[0]);
			}}
			className="relative block w-full h-12 px-3 py-2 text-sm text-blue-600 placeholder-blue-400 border border-blue-300 rounded-md appearance-none autofill:bg-none bg-blue-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
		/>
	);
}
