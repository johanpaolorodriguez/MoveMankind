import React from "react";
import clsx from "clsx";

export const Field = ({ children, label, error }) => {
	const id = getChildId(children);
	const type = getChildType(children);
	const required = isChildRequired(children);

	const isTypeCheckboxOrRadio = () => {
		if (type === "checkbox" || type === "radio") {
			return true;
		} else {
			return false;
		}
	};

	const FieldLabel = () => (
		<label
			htmlFor={id}
			className={clsx(
				isTypeCheckboxOrRadio() ? "" : "text-blue-900 text-s2"
			)}
		>
			{label}
			{required && <span className="pl-1 text-red-500">*</span>}
		</label>
	);

	return (
		<div className={clsx("mb-3", isTypeCheckboxOrRadio() ? "flex" : "")}>
			{type !== "checkbox" && type !== "radio" && <FieldLabel />}
			{children}
			{isTypeCheckboxOrRadio() && <FieldLabel />}
			{error && (
				<small className="font-medium text-red-600 font-">
					{error.message}
				</small>
			)}
		</div>
	);
};

export const getChildId = (children) => {
	const child = React.Children.only(children);

	if ("id" in child.props) {
		return child.props.id;
	}
};

export const getChildType = (children) => {
	const child = React.Children.only(children);

	if ("type" in child.props) {
		return child.props.type;
	}
};

export const isChildRequired = (children) => {
	const child = React.Children.only(children);

	if ("required" in child.props) {
		return child.props.required;
	}
};
