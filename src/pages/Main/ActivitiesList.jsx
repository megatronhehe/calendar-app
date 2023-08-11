import React, { useState, useContext } from "react";

import { Context } from "../../context/Context";

import { createId } from "../../utils/createId";

import Section from "../../components/Section";
import ModalForm from "../../components/ModalForm";

import ActivityItem from "./ActivityItem";

import { parseISO } from "date-fns";

import { BsPlusCircle } from "react-icons/bs";

const ActivitiesList = ({ selectedDate, filterActivitiesByDateArray }) => {
	// Context
	const { activities, setActivities } = useContext(Context);

	// initial_state
	const initial_activity_form = {
		id: "",
		activity: "",
		date: "",
		isDone: false,
	};

	// States
	const [activityForm, setActivityForm] = useState(initial_activity_form);
	const [toggleModal, setToggleModal] = useState(false);

	const handleActivityForm = (e) => {
		const { value, name } = e.target;
		setActivityForm((prev) => ({ ...prev, [name]: value }));
	};

	const addActivity = () => {
		setActivities((prev) => [
			...prev,
			{
				id: createId(),
				activity: activityForm.activity,
				date: activityForm.date ? parseISO(activityForm.date) : selectedDate,
			},
		]);
		setActivityForm(initial_activity_form);
	};

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
				<button
					onClick={() => setToggleModal(true)}
					className="flex items-center justify-center text-2xl text-blue-400 "
				>
					<BsPlusCircle />
				</button>
			</div>

			{filterActivitiesByDateArray.length > 0 ? (
				<div className="h-40">{activitiesElement}</div>
			) : (
				<div className="flex items-center justify-center h-40 text-gray-300">
					<p>no activities listed at this date</p>
				</div>
			)}

			{toggleModal && (
				<ModalForm
					activityForm={activityForm}
					handleActivityForm={handleActivityForm}
					setToggleModal={setToggleModal}
					addActivity={addActivity}
				/>
			)}
		</Section>
	);
};

export default ActivitiesList;
