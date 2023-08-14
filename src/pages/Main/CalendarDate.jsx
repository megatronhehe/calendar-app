import React from "react";

import { isSameMonth, isToday, isSameDay } from "date-fns";

import { AnimatePresence, motion } from "framer-motion";

import { BsFillSuitDiamondFill, BsCircleFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";

const CalendarDate = ({
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
		<motion.li
			whileHover={{ scale: 1.2 }}
			onClick={() => setSelectedDate(date)}
			className={`relative cursor-pointer flex items-center justify-center rounded-full w-8 h-8 
					${sameMonth ? "" : "text-gray-300"}
					${sameToday ? "bg-blue-300 text-white " : ""}
					${sameSelectedAndToday ? " text-white bg-blue-500" : ""}
					${sameSelected ? "bg-blue-400 text-white " : ""}
			`}
		>
			{date.getDate()}
			<AnimatePresence>
				{isActivitiesInThisDate && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={`absolute -bottom-1
						${sameSelected ? "text-blue-800" : "text-blue-500"}
						${isAllActivitiesInThisDateDone ? "text-green-300" : ""}
						
						`}
					>
						<AnimatePresence mode="wait">
							{isAllActivitiesInThisDateDone ? (
								<motion.div
									key={isAllActivitiesInThisDateDone}
									initial={{ scale: 1.5 }}
									animate={{ scale: 1 }}
									exit={{ scale: 1.5 }}
								>
									<BsCircleFill size="10" />
								</motion.div>
							) : (
								<motion.div
									key={isAllActivitiesInThisDateDone}
									initial={{ scale: 1.5 }}
									animate={{ scale: 1 }}
									exit={{ scale: 1.5 }}
								>
									<BsFillSuitDiamondFill size="10" />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{isEventsInThisDate && (
					<motion.div
						initial={{ scale: 1.5 }}
						animate={{ scale: 1 }}
						exit={{ scale: 1.5, opacity: 0 }}
						className="absolute text-lg text-yellow-300 -top-3"
					>
						<FaCrown />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.li>
	);
};

export default CalendarDate;
