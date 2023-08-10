import React from "react";

import Section from "../../components/Section";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel5Days = ({ prev5days, render5DaysElement, next5days }) => {
	return (
		<Section>
			<h2 className="mb-4">Last 5 days from today</h2>
			<ul className="relative flex gap-1 ">
				<button
					onClick={prev5days}
					className="bg-gray-100 rounded-full hover:bg-gray-200"
				>
					<BsChevronLeft />
				</button>
				{render5DaysElement}
				<button
					onClick={next5days}
					className="bg-gray-100 rounded-full hover:bg-gray-200"
				>
					<BsChevronRight />
				</button>
			</ul>
		</Section>
	);
};

export default Carousel5Days;
