import React from "react";
import Card from "../Card";

const Table = ({ startups }) => {
	return (
		<div className="w-full">
			<div className="flex flex-col w-full mx-auto mb-24 space-y-10 | md:grid md:grid-cols-2 md:space-y-0 md:gap-8 md:px-14 | lg:grid-cols-3 max-w-screen-xl">
				{startups.map(
					(startup, key) =>
						startup && <Card startup={startup} key={key} />
				)}
			</div>
		</div>
	);
};

export default Table;
