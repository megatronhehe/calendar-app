import React from "react";

import { countPercentage } from "../../utils/countPercentage";

import { FaClipboardList } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";

const DateDetailsActivity = ({
	filterActivitiesByDateArray,
	setToggleModalActivityForm,
}) => {
	// Variables
	const countTasks = filterActivitiesByDateArray.length;
	const countTasksDone =
		filterActivitiesByDateArray.length > 0 &&
		filterActivitiesByDateArray.filter((task) => task.isDone).length;

	// Elements
	const detailsTextElement =
		countTasks < 1
			? "you have no tasks for today"
			: `you have ${countTasks ? countTasks : "no"} task${
					countTasks > 1 ? "s" : ""
			  } for today!`;
	const isAllTasksComplete = countTasks > 0 && countTasksDone === countTasks;

	const percentageTextElement =
		countTasks > 0 ? `${countPercentage(countTasksDone, countTasks)}%` : "0%";

	return (
		<section
			className={`relative p-4 w-1/2 rounded-xl ${
				isAllTasksComplete ? "bg-green-400" : "bg-blue-500"
			}`}
		>
			<div className="flex flex-col h-40 gap-2 text-xs font-normal text-white sm:h-full">
				<h2 className="flex items-center gap-2 text-base">
					<FaClipboardList />
					Activities
				</h2>
				<p>{detailsTextElement}</p>
				{countTasks > 0 && (
					<p>
						{isAllTasksComplete
							? "All tasks are completed!"
							: `${countTasksDone} / ${countTasks} tasks completed`}
					</p>
				)}
				<div className="flex flex-col items-end justify-between w-1/3 gap-2 text-xl rounded-xl"></div>
				<button
					onClick={() => setToggleModalActivityForm(true)}
					className="absolute text-2xl top-2 right-2"
				>
					<BsPlusCircle />
				</button>
			</div>
		</section>
	);
};

export default DateDetailsActivity;
