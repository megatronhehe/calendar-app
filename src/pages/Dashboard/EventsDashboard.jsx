import React, { useState } from "react";

import { upperCaseFirstLetter } from "../../utils/upperCaseFirstLetter";

import CategoryCard from "./CategoryCard";

import {
	isAfter,
	isBefore,
	isToday,
	isThisWeek,
	isThisMonth,
	isThisYear,
} from "date-fns";

const EventsDashboard = ({ isEventsExist, events }) => {
	const [filter, setFilter] = useState("alltime");

	const filterEventsArray = () => {
		if (filter === "daily") {
			return events.filter((activity) => isToday(activity.date));
		} else if (filter === "weekly") {
			return events.filter((activity) => isThisWeek(activity.date));
		} else if (filter === "monthly") {
			return events.filter((activity) => isThisMonth(activity.date));
		} else if (filter === "yearly") {
			return events.filter((activity) => isThisYear(activity.date));
		}
		return events;
	};

	const filteredEventsArray = filterEventsArray();

	const today = new Date();
	const eventsCount = isEventsExist ? filteredEventsArray.length : 0;
	const eventsAfterTodayCount = isEventsExist
		? filteredEventsArray.filter((event) => isAfter(event.date, today)).length
		: 0;
	const eventsBeforeTodayCount = isEventsExist
		? filteredEventsArray.filter((event) => isBefore(event.date, today)).length
		: 0;

	return (
		<div className="flex flex-col p-4 bg-white rounded-xl">
			<div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
				<h1 className="text-lg">{upperCaseFirstLetter(filter)} Events Stats</h1>
				<nav className="flex text-xs">
					<button
						className={`rounded-md px-2 py-1 ${
							filter === "alltime" ? "bg-gray-600 text-white" : ""
						}`}
						onClick={() => setFilter("alltime")}
					>
						alltime
					</button>
					<button
						className={`rounded-md px-4 py-1 ${
							filter === "daily" ? "bg-gray-600 text-white" : ""
						}`}
						onClick={() => setFilter("daily")}
					>
						daily
					</button>
					<button
						className={`rounded-md px-4 py-1 ${
							filter === "weekly" ? "bg-gray-600 text-white" : ""
						}`}
						onClick={() => setFilter("weekly")}
					>
						weekly
					</button>
					<button
						className={`rounded-md px-4 py-1 ${
							filter === "monthly" ? "bg-gray-600 text-white" : ""
						}`}
						onClick={() => setFilter("monthly")}
					>
						monthly
					</button>
					<button
						className={`rounded-md px-4 py-1 ${
							filter === "yearly" ? "bg-gray-600 text-white" : ""
						}`}
						onClick={() => setFilter("yearly")}
					>
						yearly
					</button>
				</nav>
			</div>
			<div className="flex gap-2 pb-1 mt-4 overflow-auto text-sm sm:pb-0">
				<CategoryCard
					title="Total events"
					count={eventsCount}
					unit="Events"
					color="bg-purple-700"
					fontColor="text-white"
				/>

				<CategoryCard
					title="Total upcoming events"
					count={eventsAfterTodayCount}
					unit="Events"
					color="bg-pink-700"
					fontColor="text-white"
				/>

				<CategoryCard
					title="Total past events"
					count={eventsBeforeTodayCount}
					unit="Events"
					color="bg-fuchsia-900"
					fontColor="text-white"
				/>
			</div>
		</div>
	);
};

export default EventsDashboard;
