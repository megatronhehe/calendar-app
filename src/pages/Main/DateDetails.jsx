import React from "react";

import Section from "../../components/Section";

import { format } from "date-fns";

const DateDetails = ({ selectedDate }) => {
	return (
		<Section>
			<div className="flex w-full h-full gap-4">
				<div className="flex flex-col justify-between w-2/3 ">
					<div>
						<h1>{format(selectedDate, "EEEE")}</h1>
						<h2 className="text-xs">{format(selectedDate, "dd MMMM yyyy")}</h2>
					</div>

					<div className="text-xs">
						<p>5 tasks for today</p>
						<p>5 / 5 tasks completed</p>
					</div>
				</div>
				<div className="flex flex-col justify-between w-1/3 gap-2 rounded-xl">
					<h1 className="">Big Event!</h1>
					<h2 className="flex items-center justify-center p-4 text-2xl bg-gray-100 rounded-xl">
						50%
					</h2>
				</div>
			</div>
		</Section>
	);
};

export default DateDetails;
