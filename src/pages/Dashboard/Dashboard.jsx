import React, { useContext } from "react";
import { Context } from "../../context/Context";
import {
	addDays,
	isAfter,
	format,
	isSameDay,
	eachDayOfInterval,
	isThisWeek,
	isBefore,
} from "date-fns";

import { sortDateAsc } from "../../utils/sortDateAsc";
import { countPercentage } from "../../utils/countPercentage";

const Dashboard = () => {
	const { today, activities, events, isActivitiesExist, isEventsExist } =
		useContext(Context);

	// other variables
	const tomorrowDate = addDays(today, 1);

	// activities variables
	const todaysActivitiesArray =
		isActivitiesExist &&
		activities.filter((activity) => isSameDay(activity.date, today));

	const tomorrowsActivitiesArray =
		isActivitiesExist &&
		activities.filter((activity) => isSameDay(activity.date, tomorrowDate));

	const activitiesCount = isActivitiesExist && activities.length;

	const activitiesDoneCount =
		isActivitiesExist &&
		activities.filter((activity) => activity.isDone).length;

	// events variables
	const eventsAfterTodayArray =
		isEventsExist && events.filter((event) => isAfter(event.date, today));

	const eventsBeforeTodayArray =
		isEventsExist && events.filter((event) => isBefore(event.date, today));

	const sortedEventsAfterTodayArray =
		isEventsExist && sortDateAsc(eventsAfterTodayArray);

	const daysCountToUpcomingEvent =
		isEventsExist &&
		eachDayOfInterval({
			start: today,
			end: sortedEventsAfterTodayArray[0].date,
		}).length - 1;

	const eventsCount = isEventsExist ? events.length : 0;
	const eventsAfterTodayCount = isEventsExist
		? eventsAfterTodayArray.length
		: 0;
	const eventsBeforeTodayCount = isEventsExist
		? eventsBeforeTodayArray.length
		: 0;

	// - count how many events in this week
	const eventsInThisWeekCount = events.filter((event) =>
		isThisWeek(event.date)
	).length;

	return (
		<main className="relative mb-20 font-light">
			<section className="flex flex-col gap-4 ">
				<div className="flex flex-row items-center justify-between w-full py-4 rounded-xl">
					<h2 className="text-2xl">Dashboard</h2>
					<p>{format(today, "EEEE, dd MMMM yyyy")}</p>
				</div>

				<div className="flex justify-between w-full gap-2 pb-1 overflow-auto text-sm scroll-smooth sm:pb-0">
					<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
						<h2>Upcoming Events</h2>
						{daysCountToUpcomingEvent ? (
							<p className="text-sm">
								in <span className="text-xl">{daysCountToUpcomingEvent}</span>{" "}
								Days
							</p>
						) : (
							<p className="text-sm">No events listed {":("}</p>
						)}
					</div>

					{/* Activities for today */}
					<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
						<h2>Activities for today</h2>
						<p className="text-xl ">
							{todaysActivitiesArray.length}{" "}
							<span className="text-sm">Activities</span>
						</p>
					</div>

					{/* Activities for tomorrow */}
					<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
						<h2>Activities for tomorrow</h2>
						<p className="text-xl ">
							{tomorrowsActivitiesArray.length}{" "}
							<span className="text-sm">Activities</span>
						</p>
					</div>

					<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
						<h2>Events for this week</h2>
						<p className="text-xl">
							{eventsInThisWeekCount} <span className="text-sm">Events</span>
						</p>
					</div>
				</div>

				<div className="flex flex-col p-4 bg-white rounded-xl">
					<h1>Activities Stats</h1>
					<div className="flex gap-2 pb-1 mt-4 overflow-auto text-sm sm:pb-0">
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Completed Activities Ratio</h2>
							<p className="text-xl">
								{countPercentage(activitiesDoneCount, activitiesCount)}%
							</p>
						</div>

						{/* total activities */}
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total activities listed</h2>
							<p className="mt-4 text-xl">
								{activitiesCount} <span className="text-sm">Activities</span>
							</p>
						</div>

						{/* total activities completed */}
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total activities completed</h2>
							<p className="mt-4 text-xl">
								{activitiesDoneCount}{" "}
								<span className="text-sm">Activities</span>
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col p-4 bg-white rounded-xl">
					<h1>Events Stats</h1>
					<div className="flex gap-2 pb-1 mt-4 overflow-auto text-sm sm:pb-0">
						{/* Total events count */}
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total events</h2>
							<p className="text-xl">
								{eventsCount} <span className="text-sm">Events</span>
							</p>
						</div>

						{/* total upcoming events count */}
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total upcoming events</h2>
							<p className="mt-4 text-xl">
								{eventsAfterTodayCount} <span className="text-sm">Events</span>
							</p>
						</div>

						{/* total past events count */}
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total past events</h2>
							<p className="mt-4 text-xl">
								{eventsBeforeTodayCount} <span className="text-sm">Events</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Dashboard;
