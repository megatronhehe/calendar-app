import React from "react";

import { BsFillSuitDiamondFill } from "react-icons/bs";

import { isSameMonth, isToday, isSameDay } from "date-fns";

const CalendarDate = ({
	date,
	today,
	selectedDate,
	setSelectedDate,
	activities,
}) => {
	// Variables
	const sameMonth = isSameMonth(date, today);
	const sameToday = isToday(date);
	const sameSelectedAndToday = isSameDay(date, selectedDate) && isToday(date);
	const sameSelected = isSameDay(date, selectedDate);
	const activitiesInThisDate = activities.some((activity) =>
		isSameDay(activity.date, date)
	);

	return (
		<li
			onClick={() => setSelectedDate(date)}
			className={`relative flex items-center justify-center rounded-full w-8 h-8 
					${sameMonth ? "" : "text-gray-300"}
					${sameToday ? "bg-blue-300 text-white " : ""}
					${sameSelectedAndToday ? " text-white bg-blue-500" : ""}
					${sameSelected ? "bg-blue-400 text-white " : ""}
			`}
		>
			{date.getDate()}
			{activitiesInThisDate && (
				<div
					className={`absolute -bottom-1  ${
						sameSelected ? "text-blue-800" : "text-blue-500"
					}`}
				>
					<BsFillSuitDiamondFill size="10" />
				</div>
			)}
		</li>
	);
};

export default CalendarDate;
