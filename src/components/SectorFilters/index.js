import React from "react";
import AllPng from "../../assets/mobile/all_ventures.png";
import AiPng from "../../assets/mobile/artificial_intelligence.png";
import EnvPng from "../../assets/mobile/environment.png";
import SpacePng from "../../assets/mobile/space.png";
import BioTechPng from "../../assets/mobile/biotechnology.png";

const SectorFilters = ({ filterWithId, removeAllFilters }) => {
	return (
		<section className="max-w-screen-xl mx-auto px-6 grid w-full grid-cols-5 gap-5 text-[10px] text-center my-16 | md:text-base">
			<button
				onClick={() => removeAllFilters()}
				className="flex flex-col items-center"
			>
				<img
					src={AllPng}
					alt=""
					className="pb-5 w-10 | md:w-14 md:h-auto"
				/>
				<p className="inline-block max-w-min">All Ventures</p>
			</button>

			<button
				onClick={() => {
					removeAllFilters();
					filterWithId("tagsMap", "artificialintelligence");
				}}
				className="flex flex-col items-center"
			>
				<img
					src={AiPng}
					alt=""
					className="pb-5 w-10 | md:w-14 md:h-auto"
				/>
				<p className="inline-block max-w-min">
					Artificial Intelligence
				</p>
			</button>

			<button
				onClick={() => {
					removeAllFilters();
					filterWithId("tagsMap", "biotechnology");
				}}
				className="flex flex-col items-center"
			>
				<img
					src={BioTechPng}
					alt=""
					className="pb-5 w-10 | md:w-14 md:h-auto"
				/>
				<p className="inline-block max-w-min">Biotechnology</p>
			</button>

			<button
				onClick={() => {
					removeAllFilters();
					filterWithId("tagsMap", "space");
				}}
				className="flex flex-col items-center"
			>
				<img
					src={SpacePng}
					alt=""
					className="pb-5 w-10 | md:w-14 md:h-auto"
				/>
				<p className="inline-block max-w-min">Space</p>
			</button>

			<button
				onClick={() => {
					removeAllFilters();
					filterWithId("tagsMap", "environment");
				}}
				className="flex flex-col items-center"
			>
				<img
					src={EnvPng}
					alt=""
					className="pb-5 w-10 | md:w-14 md:h-auto"
				/>
				<p className="inline-block max-w-min">Environment</p>
			</button>
		</section>
	);
};

export default SectorFilters;
