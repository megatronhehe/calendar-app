import React, { useState } from "react";

import { countPercentage } from "../../utils/countPercentage";
import { upperCaseFirstLetter } from "../../utils/upperCaseFirstLetter";

import CategoryCard from "./CategoryCard";
import { isThisMonth, isThisWeek, isToday, isThisYear } from "date-fns";

const ActivitiesDashboard = ({ isActivitiesExist, activities }) => {
	const [filter, setFilter] = useState("alltime");

	const today = new Date();

	const filterActivitiesArray = () => {
		if (filter === "daily") {
			return activities.filter((activity) => isToday(activity.date));
		} else if (filter === "weekly") {
			return activities.filter((activity) => isThisWeek(activity.date));
		} else if (filter === "monthly") {
			return activities.filter((activity) => isThisMonth(activity.date));
		} else if (filter === "yearly") {
			return activities.filter((activity) => isThisYear(activity.date));
		}
		return activities;
	};

	const filteredActivitiesArray = filterActivitiesArray();

	const activitiesCount = isActivitiesExist
		? filteredActivitiesArray.length
		: 0;
	const activitiesDoneCount = isActivitiesExist
		? filteredActivitiesArray.filter((activity) => activity.isDone).length
		: 0;

	return (
		<div className="flex flex-col p-4 bg-white rounded-xl">
			<div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
				<h1 className="text-lg">
					{upperCaseFirstLetter(filter)} Activities Stats
				</h1>
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
			<div className="flex gap-2 pb-1 mt-4 text-sm sm:pb-0">
				<CategoryCard
					title="Total activities listed"
					count={activitiesCount}
					unit="Activities"
					color="bg-yellow-500"
					fontColor="text-white"
				/>

				<CategoryCard
					title="Total activities completed"
					count={activitiesDoneCount}
					unit="Activities"
					color="bg-green-400"
					fontColor="text-white"
				/>

				<CategoryCard
					title="Completed activities ratio"
					count={`${countPercentage(activitiesDoneCount, activitiesCount)}%`}
					unit="Completed"
					color="bg-blue-300"
					fontColor="text-white"
				/>
			</div>
		</div>
	);
};

export default ActivitiesDashboard;
