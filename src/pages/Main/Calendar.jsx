import React from "react";

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
		<section className="p-4 bg-white sm:w-1/2 rounded-xl h-96">
			<div className="flex justify-between mb-4">
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

			<div className="grid grid-cols-7 gap-3">{dateElement}</div>
		</section>
	);
};

export default Calendar;
