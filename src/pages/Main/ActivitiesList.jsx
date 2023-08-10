import React, { useState, useContext } from "react";

import { Context } from "../../context/Context";

import { createId } from "../../utils/createId";

import Section from "../../components/Section";

import ModalForm from "../../components/ModalForm";
import { parseISO } from "date-fns";

const ActivitiesList = ({ filterActivitiesByDateArray, activitiesElement }) => {
	// Context
	const { activities, setActivities } = useContext(Context);

	// States
	const [taskForm, setTaskForm] = useState({
		id: "",
		task: "",
		date: {},
	});
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
				date: parseISO(taskForm.date),
			},
		]);
		setTaskForm("");
	};

	console.log(taskForm);

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
