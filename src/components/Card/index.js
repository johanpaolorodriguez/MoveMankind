import React from "react";
import startCase from "lodash/startCase";

const Card = ({ startup }) => {
	return (
		<a
			href={`/startups/${startup.uid}`}
			className="grid max-w-sm grid-rows-2 mx-auto bg-white shadow rounded-xl overflow-clip"
		>
			<img
				className="object-cover object-center w-full h-64"
				src={startup.bgimg}
				alt=""
			/>
			<div className="flex flex-col px-6 py-6 space-y-4">
				<h3 className="text-h3">{startup.name}</h3>
				<p className="text-base text-gray-500 font-secondary">
					{startup.city
						? `${startup.city}, ${startup.country} `
						: startup.country}
				</p>
				<p className="text-gray-700 text-body line-clamp-3 md:text-sm">
					{startup.description}
				</p>

				<div className="flex flex-wrap space-x-2">
					{startup.tags.map((tag) => (
						<span
							key={tag}
							className="inline px-2 py-1 my-1 text-gray-600 capitalize bg-gray-200 rounded-md text-card-tags"
						>
							{startCase(tag)}
						</span>
					))}
				</div>
			</div>
		</a>
	);
};

export default Card;
