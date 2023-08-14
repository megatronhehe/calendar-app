import React from "react";

import { isSameMonth, isToday, isSameDay, format } from "date-fns";

import { BsSuitDiamondFill, BsCircleFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";

import { motion } from "framer-motion";

const CarouselDateCard = ({
	date,
	today,
	selectedDate,
	setSelectedDate,
	activities,
	isActivitiesExist,
	events,
}) => {
	// Variables
	const sameMonth = isSameMonth(date, today);
	const sameToday = isToday(date);
	const sameSelectedAndToday = isSameDay(date, selectedDate) && isToday(date);
	const sameSelected = isSameDay(date, selectedDate);

	// activities variables
	const isActivitiesInThisDate =
		isActivitiesExist &&
		activities.some((activity) => isSameDay(activity.date, date));

	const activitiesInThisDateArray =
		isActivitiesExist &&
		activities.filter((item) => isSameDay(item.date, date));

	const countActivitiesInThisDateDone =
		isActivitiesExist &&
		activitiesInThisDateArray.filter((activity) => activity.isDone).length;

	const countActivitiesInThisDate = activitiesInThisDateArray.length;

	const isAllActivitiesInThisDateDone =
		countActivitiesInThisDate > 0 &&
		countActivitiesInThisDateDone === countActivitiesInThisDate;

	// events variables
	const isEventsExist = events.length > 0;

	const isEventsInThisDate =
		isEventsExist && events.some((event) => isSameDay(event.date, date));

	return (
		<li
			onClick={() => setSelectedDate(date)}
			className={`flex flex-col flex-shrink-0 items-center border justify-center w-1/5 h-20 text-sm rounded-md 
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

			{isEventsInThisDate && (
				<div className="absolute text-lg text-yellow-300 top-1">
					<FaCrown />
				</div>
			)}
		</li>
	);
};

export default CarouselDateCard;
