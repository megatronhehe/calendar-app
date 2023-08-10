import React, { useState, createContext } from "react";

import { activitiesData } from "../data/dummyActivitiesData";

import {
	eachDayOfInterval,
	endOfMonth,
	startOfMonth,
	addMonths,
	startOfWeek,
	endOfWeek,
	isSameDay,
	subMonths,
	subDays,
	addDays,
} from "date-fns";

const Context = createContext();

const ContextProvider = ({ children }) => {
	// States For Dates
	const [today, setToday] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(today);
	const [dateCarousel, setDateCarousel] = useState({
		start: subDays(today, 4),
		end: today,
	});

	// States For Activities
	const [activities, setActivities] = useState([]);

	// Variables
	const isActivitiesExist = activities.length > 0;
	const firstDate = startOfWeek(startOfMonth(today));
	const lastDate = endOfWeek(endOfMonth(today));
	const dateOfMonth = eachDayOfInterval({ start: firstDate, end: lastDate });
	const render5DaysArray = eachDayOfInterval(dateCarousel);
	const filterActivitiesByDateArray =
		isActivitiesExist &&
		activities.filter((activity) => isSameDay(activity.date, selectedDate));

	// Functions For Dates
	const nextMonth = () => {
		setToday((prev) => addMonths(prev, 1));
	};

	const prevMonth = () => {
		setToday((prev) => subMonths(prev, 1));
	};

	const prev5days = () => {
		setDateCarousel((prev) => ({
			start: subDays(prev.start, 5),
			end: subDays(prev.end, 5),
		}));
	};

	const next5days = () => {
		setDateCarousel((prev) => ({
			start: addDays(prev.start, 5),
			end: addDays(prev.end, 5),
		}));
	};

	// Functions For Activities

	return (
		<Context.Provider
			value={{
				setToday,
				today,
				dateOfMonth,
				selectedDate,
				setSelectedDate,
				render5DaysArray,
				filterActivitiesByDateArray,
				nextMonth,
				prevMonth,
				prev5days,
				next5days,
				activities,
				setActivities,
				isActivitiesExist,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { Context };
export default ContextProvider;
