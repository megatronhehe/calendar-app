import React from "react";

import Section from "../../components/Section";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getDate } from "date-fns";

const Carousel5Days = ({
	prev5days,
	render5DaysElement,
	next5days,
	dateCarousel,
}) => {
	const keyForChange = getDate(dateCarousel.start);

	return (
		<Section>
			<h2 className="mb-4">Last 5 days from today</h2>
			<ul className="relative flex ">
				<div
					key={keyForChange}
					initial={{ x: "-100vw" }}
					animate={{ x: 0 }}
					exit={{ x: "100vw" }}
					className="flex w-full"
				>
					{render5DaysElement}
				</div>
				<button
					onClick={prev5days}
					className="absolute p-1 bg-gray-100 rounded-full -left-3 top-1/3 hover:bg-gray-200"
				>
					<BsChevronLeft />
				</button>
				<button
					onClick={next5days}
					className="absolute p-1 bg-gray-100 rounded-full -right-3 top-1/3 hover:bg-gray-200"
				>
					<BsChevronRight />
				</button>
			</ul>
		</Section>
	);
};

export default Carousel5Days;
