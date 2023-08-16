import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";

import { motion } from "framer-motion";

import {
	addDays,
	isAfter,
	format,
	isSameDay,
	eachDayOfInterval,
	isThisWeek,
	isToday,
	isBefore,
} from "date-fns";

import ActivitiesDashboard from "./ActivitiesDashboard";
import EventsDashboard from "./EventsDashboard";
import MainCard from "./MainCard";

import { sortDateAsc } from "../../utils/sortDateAsc";

const Dashboard = () => {
	const {
		activities,
		events,
		isActivitiesExist,
		isEventsExist,
		setSelectedDate,
	} = useContext(Context);

	const [clickCount, setClickCount] = useState(0);

	// other variables
	const today = new Date();
	const tomorrowDate = addDays(today, 1);

	// activities variables
	const todaysActivitiesArray = isActivitiesExist
		? activities.filter((activity) => isSameDay(activity.date, today))
		: [];

	const tomorrowsActivitiesArray = isActivitiesExist
		? activities.filter((activity) => isSameDay(activity.date, tomorrowDate))
		: [];

	// events variables
	const isEventsExistToday =
		isEventsExist &&
		events.filter((event) => isToday(event.date, today)).length > 0;

	const eventsAfterTodayArray = isEventsExist
		? events.filter((event) => isAfter(event.date, today))
		: [];

	const sortedEventsAfterTodayArray =
		eventsAfterTodayArray.length > 0 ? sortDateAsc(eventsAfterTodayArray) : [];

	const daysCountToUpcomingEvent =
		eventsAfterTodayArray.length > 0
			? eachDayOfInterval({
					start: today,
					end: sortedEventsAfterTodayArray[0].date,
			  }).length - 1
			: 0;

	// - count how many events in this week
	const eventsInThisWeekCount = events.filter((event) =>
		isThisWeek(event.date)
	).length;

	return (
		<motion.main
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -30 }}
			transition={{ type: "tween" }}
			className="relative mb-20 font-light"
		>
			<section className="flex flex-col gap-4 ">
				<div className="flex flex-row items-center justify-between w-full py-4 rounded-xl">
					<h2 className="text-2xl">Dashboard</h2>
					<p>{format(today, "EEEE, dd MMMM yyyy")}</p>
				</div>

				<div className="flex justify-between w-full gap-2 pb-1 overflow-auto text-sm scroll-smooth sm:pb-0">
					<MainCard
						title="Upcoming Events in . ."
						count={isEventsExistToday ? "Today!" : daysCountToUpcomingEvent}
						unit="Days"
						setDateToNav={
							eventsAfterTodayArray.length
								? sortedEventsAfterTodayArray[0].date
								: today
						}
					/>

					<MainCard
						title="Activities for today"
						count={todaysActivitiesArray.length}
						unit="Activities"
					/>

					<MainCard
						title="Activities for tomorrow"
						count={tomorrowsActivitiesArray.length}
						unit="Activities"
						setDateToNav={tomorrowDate}
					/>

					<MainCard
						title="Events for this week"
						count={eventsInThisWeekCount}
						unit="Events"
						setDateToNav={
							eventsAfterTodayArray.length
								? sortedEventsAfterTodayArray[0].date
								: today
						}
					/>
				</div>

				<ActivitiesDashboard
					isActivitiesExist={isActivitiesExist}
					activities={activities}
				/>

				<EventsDashboard isEventsExist={isEventsExist} events={events} />
			</section>
		</motion.main>
	);
};

export default Dashboard;
