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
				date: taskForm.date ? parseISO(taskForm.date) : selectedDate,
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
					className="flex items-center justify-center text-2xl text-blue-400 "
				>
					<BsPlusCircle />
				</button>
			</div>

			{filterActivitiesByDateArray.length > 0 ? (
				<div className="h-40">{activitiesElement}</div>
			) : (
				<div className="flex items-center justify-center text-gray-300">
					<p>no activities listed at this date</p>
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
