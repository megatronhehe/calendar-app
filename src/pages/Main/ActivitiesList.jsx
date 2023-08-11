import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

import Section from "../../components/Section";
import ActivityItem from "./ActivityItem";

const ActivitiesList = ({ selectedDate, filterActivitiesByDateArray }) => {
	// Context
	const { activities, setActivities } = useContext(Context);

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
			<div className="flex items-center justify-between w-full mb-4">
				<h2 className="">Activities</h2>
			</div>

			{filterActivitiesByDateArray.length > 0 ? (
				<div className="h-40">{activitiesElement}</div>
			) : (
				<div className="flex items-center justify-center h-40 text-gray-300">
					<p>no activities listed at this date</p>
				</div>
			)}
		</Section>
	);
};

export default ActivitiesList;
