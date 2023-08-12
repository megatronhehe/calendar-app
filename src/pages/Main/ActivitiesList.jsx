import React, { useState } from "react";

import Section from "../../components/Section";
import ActivityItem from "./ActivityItem";
import { isSameDay } from "date-fns";

const ActivitiesList = ({
	setActivities,
	filterActivitiesByDateArray,
	selectedDate,
	activities,
}) => {
	const [toggleMore, setToggleMore] = useState(false);

	const deleteActivity = (id) => {
		setActivities((prev) => prev.filter((activity) => activity.id !== id));
	};

	const markActivityDone = (id) => {
		setActivities((prev) =>
			prev.map((activity) =>
				activity.id === id
					? { ...activity, isDone: !activity.isDone }
					: activity
			)
		);
	};

	const setAll = (check) => {
		setActivities((prev) =>
			prev.map((activity) =>
				isSameDay(activity.date, selectedDate)
					? { ...activity, isDone: check }
					: activity
			)
		);
	};

	const deleteAll = (check) => {
		setActivities((prev) =>
			prev.filter((activity) => !isSameDay(activity.date, selectedDate))
		);
	};

	const activitiesElement =
		filterActivitiesByDateArray &&
		filterActivitiesByDateArray.map((activity) => (
			<ActivityItem
				key={activity.id}
				activity={activity}
				deleteActivity={deleteActivity}
				markActivityDone={markActivityDone}
			/>
		));

	return (
		<Section>
			<div className="h-full pr-2 ">
				<div className="flex items-center justify-between w-full mb-4 ">
					<h2 className="">Activities</h2>
					<div className="flex gap-6 text-xs">
						<button onClick={() => setAll(true)}>check all</button>
						<button onClick={() => setAll(false)}>uncheck all</button>
						<button onClick={deleteAll}>delete all</button>
					</div>
				</div>

				{filterActivitiesByDateArray.length > 0 ? (
					<div className="overflow-y-auto h-72">{activitiesElement}</div>
				) : (
					<div className="flex items-center justify-center h-40 text-gray-300">
						<p>no activities listed at this date</p>
					</div>
				)}
			</div>
		</Section>
	);
};

export default ActivitiesList;
