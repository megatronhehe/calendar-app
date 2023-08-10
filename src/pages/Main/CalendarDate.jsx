import React from "react";

import { BsFillSuitDiamondFill, BsCircleFill } from "react-icons/bs";

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
	const isActivitiesInThisDate = activities.some((activity) =>
		isSameDay(activity.date, date)
	);

	const activitiesInThisDateArray = activities.filter((item) =>
		isSameDay(item.date, date)
	);
	const countActivitiesInThisDateDone = activitiesInThisDateArray.filter(
		(activity) => activity.isDone
	).length;
	const countActivitiesInThisDate = activitiesInThisDateArray.length;
	const isAllActivitiesInThisDateDone =
		countActivitiesInThisDate > 0 &&
		countActivitiesInThisDateDone === countActivitiesInThisDate;

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
			{isActivitiesInThisDate && (
				<div
					className={`absolute -bottom-1
						${sameSelected ? "text-blue-800" : "text-blue-500"}
						${isAllActivitiesInThisDateDone ? "text-green-300" : ""}
						
						`}
				>
					{isAllActivitiesInThisDateDone ? (
						<BsCircleFill size="10" />
					) : (
						<BsFillSuitDiamondFill size="10" />
					)}
				</div>
			)}
		</li>
	);
};

export default CalendarDate;
