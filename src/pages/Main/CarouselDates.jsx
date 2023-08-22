import React from "react";

import Section from "../../components/Section";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getDate } from "date-fns";

const Carousel5Days = ({
	prevWeek,
	renderWeekdaysElement,
	nextWeek,
	dateCarousel,
}) => {
	return (
		<Section>
			<h2 className="mb-4">Week days</h2>
			<ul className="relative flex ">
				<div className="flex w-full">{renderWeekdaysElement}</div>
				<button
					onClick={prevWeek}
					className="absolute p-1 bg-gray-100 rounded-full -left-3 top-1/3 hover:bg-gray-200"
				>
					<BsChevronLeft />
				</button>
				<button
					onClick={nextWeek}
					className="absolute p-1 bg-gray-100 rounded-full -right-3 top-1/3 hover:bg-gray-200"
				>
					<BsChevronRight />
				</button>
			</ul>
		</Section>
	);
};

export default Carousel5Days;
