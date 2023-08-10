import React from "react";

import { isSameMonth, isToday, isSameDay, format } from "date-fns";

import { BsSuitDiamondFill } from "react-icons/bs";

const CarouselDateCard = ({
	date,
	today,
	selectedDate,
	setSelectedDate,
	activities,
}) => {
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
			className={`flex flex-col items-center border justify-center w-1/5 h-20 text-sm rounded-md 
					${sameMonth ? "" : "text-gray-300"}
					${sameToday ? "bg-blue-300 border-blue-300 text-white " : ""}
					${sameSelectedAndToday ? " text-white bg-blue-500 border-blue-500" : ""}
					${sameSelected ? "bg-blue-400 border-blue-400 text-white " : ""}
					`}
		>
			<h1>{date.getDate()}</h1>
			<h2 className="text-xs">{format(date, "EEE")}</h2>
			{activitiesInThisDate && (
				<div
					className={`absolute -bottom-1 ${
						sameSelected ? "text-blue-800" : "text-blue-500"
					}`}
				>
					<BsSuitDiamondFill size="12" />
				</div>
			)}
		</li>
	);
};

export default CarouselDateCard;
