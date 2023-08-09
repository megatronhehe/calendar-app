import React from "react";

import { isSameMonth, isToday, isSameDay, format } from "date-fns";

import { activities } from "../../data/dummyActivitiesData";

const CarouselDateCard = ({ date, today, selectedDate, setSelectedDate }) => {
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
			key={date}
			className={`flex flex-col items-center justify-center w-1/5 h-20 text-sm rounded-md 
					${sameMonth ? "" : "text-gray-300"}
					${sameToday ? "bg-blue-300 text-white " : ""}
					${sameSelectedAndToday ? " text-white bg-blue-500" : ""}
					${sameSelected ? "bg-blue-400 text-white " : ""}
					`}
		>
			<h1>{date.getDate()}</h1>
			<h2 className="text-xs">{format(date, "EEE")}</h2>
			{activitiesInThisDate && (
				<div
					className={`absolute bottom-2 w-1 h-1  rounded-full ${
						sameSelected ? "bg-white" : "bg-blue-500"
					}`}
				></div>
			)}
		</li>
	);
};

export default CarouselDateCard;
