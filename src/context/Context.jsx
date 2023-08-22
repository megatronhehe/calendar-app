import React, { useState, createContext, useEffect } from "react";

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
	const storedActivitiesData = localStorage.getItem("activities")
		? JSON.parse(localStorage.getItem("activities")).map((activity) => ({
				...activity,
				date: new Date(activity.date),
		  }))
		: [];
	const storedEventsData = localStorage.getItem("events")
		? JSON.parse(localStorage.getItem("events")).map((event) => ({
				...event,
				date: new Date(event.date),
		  }))
		: [];

	// States For Dates
	const [today, setToday] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(today);
	const [dateCarousel, setDateCarousel] = useState({
		start: startOfWeek(today),
		end: endOfWeek(today),
	});

	// States For Activities
	const [activities, setActivities] = useState(storedActivitiesData);

	// States for Events
	const [events, setEvents] = useState(storedEventsData);

	// Variables
	const firstDate = startOfWeek(startOfMonth(today));
	const lastDate = endOfWeek(endOfMonth(today));
	const dateOfMonth = eachDayOfInterval({ start: firstDate, end: lastDate });
	const renderWeekdays = eachDayOfInterval(dateCarousel);

	// Variables for activities
	const isActivitiesExist = activities.length > 0;
	const filterActivitiesByDateArray =
		isActivitiesExist &&
		activities.filter((activity) => isSameDay(activity.date, selectedDate));

	// Variables for activities
	const isEventsExist = events.length > 0;
	const filterEventsByDateArray =
		isEventsExist &&
		events.filter((event) => isSameDay(event.date, selectedDate));

	// side effect to localstorage

	useEffect(() => {
		localStorage.setItem("activities", JSON.stringify(activities));
		localStorage.setItem("events", JSON.stringify(events));
	}, [activities, events]);

	// Functions For Dates
	const nextMonth = () => {
		setToday((prev) => addMonths(prev, 1));
	};

	const prevMonth = () => {
		setToday((prev) => subMonths(prev, 1));
	};

	const prevWeek = () => {
		setDateCarousel((prev) => ({
			start: subDays(prev.start, 7),
			end: subDays(prev.end, 7),
		}));
	};

	const nextWeek = () => {
		setDateCarousel((prev) => ({
			start: addDays(prev.start, 7),
			end: addDays(prev.end, 7),
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
				renderWeekdays,
				dateCarousel,
				nextMonth,
				prevMonth,
				prevWeek,
				nextWeek,
				activities,
				setActivities,
				isActivitiesExist,
				filterActivitiesByDateArray,
				events,
				setEvents,
				isEventsExist,
				filterEventsByDateArray,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { Context };
export default ContextProvider;
