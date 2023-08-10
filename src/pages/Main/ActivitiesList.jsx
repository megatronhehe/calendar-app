import React, { useState, useContext } from "react";

import { Context } from "../../context/Context";

import { createId } from "../../utils/createId";

import Section from "../../components/Section";
import ActivityItem from "./ActivityItem";

import ModalForm from "../../components/ModalForm";
import { parse, parseISO } from "date-fns";

const ActivitiesList = ({ selectedDate, filterActivitiesByDateArray }) => {
	// Context
	const { activities, setActivities } = useContext(Context);

	// initial_state
	const initial_task_form = {
		id: "",
		task: "",
		date: "",
		isDone: false,
	};

	// States
	const [taskForm, setTaskForm] = useState(initial_task_form);
	const [toggleModal, setToggleModal] = useState(false);

	const handleTaskForm = (e) => {
		const { value, name } = e.target;
		setTaskForm((prev) => ({ ...prev, [name]: value }));
	};

	const addTask = () => {
		setActivities((prev) => [
			...prev,
			{
				id: createId(),
				task: taskForm.task,
				date:
					typeof prev.date === "string"
						? parseISO(taskForm.date)
						: selectedDate,
			},
		]);
		setTaskForm(initial_task_form);
	};

	const deleteTask = (id) => {
		setActivities((prev) => prev.filter((task) => task.id !== id));
	};

	const markTaskDone = (id) => {
		setActivities((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		);
	};

	console.log(typeof taskForm.date);

	const activitiesElement =
		filterActivitiesByDateArray &&
		filterActivitiesByDateArray.map((activity) => (
			<ActivityItem
				key={activity.id}
				activity={activity}
				deleteTask={deleteTask}
				markTaskDone={markTaskDone}
			/>
		));

	return (
		<Section>
			<div className="flex items-center justify-between w-full mb-4">
				<h2 className="">Activities</h2>
				<button
					onClick={() => setToggleModal(true)}
					className="flex items-center justify-center w-6 h-6 text-white bg-blue-400 rounded-full"
				>
					+
				</button>
			</div>

			{filterActivitiesByDateArray.length > 0 ? (
				<div>{activitiesElement}</div>
			) : (
				<div className="text-center text-gray-300 ">
					no activities listed at this date
				</div>
			)}

			{toggleModal && (
				<ModalForm
					taskForm={taskForm}
					handleTaskForm={handleTaskForm}
					setToggleModal={setToggleModal}
					addTask={addTask}
				/>
			)}
		</Section>
	);
};

export default ActivitiesList;
