import React from "react";

import Section from "../../components/Section";

const Carousel5Days = ({ prev5days, render5DaysElement, next5days }) => {
	return (
		<Section>
			<h2 className="mb-4">Last 5 days</h2>
			<ul className="relative flex gap-1 ">
				<button
					onClick={prev5days}
					className="px-1 bg-gray-100 rounded-full hover:bg-gray-200"
				>
					{"<"}
				</button>
				{render5DaysElement}
				<button
					onClick={next5days}
					className="px-1 bg-gray-100 rounded-full hover:bg-gray-200"
				>
					{">"}
				</button>
			</ul>
		</Section>
	);
};

export default Carousel5Days;
