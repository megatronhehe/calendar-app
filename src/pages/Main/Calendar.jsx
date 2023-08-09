import React from "react";

import Section from "../../components/Section";

import { format } from "date-fns";

const Calendar = ({
	prevMonth,
	setToday,
	nextMonth,
	today,
	daysElement,
	dateElement,
}) => {
	return (
		<Section>
			<div className="h-96">
				<div className="flex justify-between mt-4 mb-8 ">
					<div className="flex items-center justify-between w-40 gap-4 ">
						<button onClick={prevMonth}>{"<"}</button>
						<h2
							onClick={() => {
								setToday(new Date());
							}}
						>
							{format(today, "MMMM")}
						</h2>
						<button onClick={nextMonth}>{">"}</button>
					</div>
					<h2 className="text-2xl">{format(today, "YYY")}</h2>
				</div>
				<ul className="grid grid-cols-7 gap-3 mb-4 font-semibold">
					{daysElement}
				</ul>

				<div className="grid grid-cols-7 gap-3 ">{dateElement}</div>
			</div>
		</Section>
	);
};

export default Calendar;
