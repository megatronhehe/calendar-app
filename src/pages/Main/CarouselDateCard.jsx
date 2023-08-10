import React from "react";

import { isSameMonth, isToday, isSameDay, format } from "date-fns";

import { BsSuitDiamondFill, BsCircleFill } from "react-icons/bs";

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
			{isActivitiesInThisDate && (
				<div
					className={`absolute -bottom-1 
					${sameSelected ? "text-blue-800" : "text-blue-500"}
					${isAllActivitiesInThisDateDone ? "text-green-300" : ""}
					`}
				>
					{isAllActivitiesInThisDateDone ? (
						<BsCircleFill size="12" />
					) : (
						<BsSuitDiamondFill size="12" />
					)}
				</div>
			)}
		</li>
	);
};

export default CarouselDateCard;
