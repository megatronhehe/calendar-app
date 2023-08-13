import React, { useState, useEffect } from "react";

import Section from "../../components/Section";
import ActivityItem from "./ActivityItem";
import { isSameDay } from "date-fns";

import {
	BsThreeDotsVertical,
	BsCheck,
	BsX,
	BsFillTrash3Fill,
} from "react-icons/bs";

const ActivitiesList = ({
	setActivities,
	filterActivitiesByDateArray,
	selectedDate,
}) => {
	// States
	const [toggleMore, setToggleMore] = useState(false);
	const [toggleDelete, setToggleDelete] = useState(false);

	// reset the confirmation delete button when options is opened
	useEffect(() => {
		setToggleDelete(false);
	}, [toggleMore]);

	// close the option when selected date is changed
	useEffect(() => {
		if (toggleMore) {
			setToggleMore(false);
		}
	}, [selectedDate]);

	// functions
	const setAll = (check) => {
		setActivities((prev) =>
			prev.map((activity) =>
				isSameDay(activity.date, selectedDate)
					? { ...activity, isDone: check }
					: activity
			)
		);
	};

	const deleteAll = () => {
		setActivities((prev) =>
			prev.filter((activity) => !isSameDay(activity.date, selectedDate))
		);
	};

	// elements
	const activitiesElement =
		filterActivitiesByDateArray &&
		filterActivitiesByDateArray.map((activity) => (
			<ActivityItem
				key={activity.id}
				setActivities={setActivities}
				activity={activity}
			/>
		));

	return (
		<Section>
			<div className="h-full pr-2 ">
				<div className="relative flex items-center justify-between w-full mb-4 ">
					<h2 className="">Activities</h2>
					<button
						className={`flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-100 ${
							toggleMore ? "bg-gray-200" : ""
						}`}
						onClick={() => setToggleMore((prev) => !prev)}
					>
						<BsThreeDotsVertical />
					</button>
					{toggleMore && (
						<div className="absolute flex flex-col w-32 gap-1 p-1 text-xs text-gray-400 bg-gray-100 shadow-md rounded-xl right-4 top-4">
							<button
								onClick={() => setAll(true)}
								className="flex items-center justify-between px-3 py-2 bg-white x-6 rounded-xl"
							>
								check all
								<BsCheck className="text-base" />
							</button>
							<button
								onClick={() => setAll(false)}
								className="flex items-center justify-between px-3 py-2 bg-white x-6 rounded-xl"
							>
								uncheck all
								<BsX className="text-base" />
							</button>
							<div className="my-1 border-b"></div>
							<div>
								{!toggleDelete ? (
									<button
										onClick={() => setToggleDelete(true)}
										className="flex items-center justify-between w-full px-3 py-2 bg-white rounded-xl"
									>
										delete all
										<BsFillTrash3Fill className="text-base" />
									</button>
								) : (
									<div className="flex items-center w-full gap-2 px-3 py-2 bg-white rounded-xl">
										<button
											onClick={() => setToggleDelete(false)}
											className="flex justify-center w-1/2 text-base"
										>
											<BsX />
										</button>
										<button
											onClick={() => {
												deleteAll();
												setToggleMore(false);
											}}
											className="flex justify-center w-1/2 text-base"
										>
											<BsCheck />
										</button>
									</div>
								)}
							</div>
						</div>
					)}
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
