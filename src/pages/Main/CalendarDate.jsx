import React from "react";

import { isSameMonth, isToday, isSameDay } from "date-fns";

import { activities } from "../../data/dummyActivitiesData";

const CalendarDate = ({ date, today, selectedDate, setSelectedDate }) => {
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
					className={`absolute bottom-1 w-1 h-1  rounded-full ${
						sameSelected ? "bg-white" : "bg-blue-500"
					}`}
				></div>
			)}
		</li>
	);
};

export default CalendarDate;
