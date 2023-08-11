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
			? "no listed activities on this date . ."
			: `you have ${countTasks ? countTasks : "no"} task${
					countTasks > 1 ? "s" : ""
			  } on this date`;
	const isAllTasksComplete = countTasks > 0 && countTasksDone === countTasks;

	const percentageTextElement =
		countTasks > 0 ? `${countPercentage(countTasksDone, countTasks)}%` : "0%";

	return (
		<section
			className={`relative p-2 w-1/2 rounded-xl ${
				isAllTasksComplete ? "bg-green-400" : "bg-blue-500"
			}`}
		>
			<div className="flex flex-col justify-between h-40 gap-2 text-xs font-normal text-white sm:h-full">
				<div>
					<h2 className="flex items-center gap-2 text-base">
						<FaClipboardList />
						Activities
					</h2>
					<p className="mt-2 text-center">{detailsTextElement}</p>
					{countTasks > 0 && (
						<p className="mt-2 ">
							{isAllTasksComplete
								? "All tasks are completed!"
								: `${countTasksDone} / ${countTasks} tasks completed`}
						</p>
					)}
				</div>
				<div className="overflow-hidden text-lg font-semibold text-white bg-blue-400 rounded-xl">
					{countTasks > 0 && (
						<div
							className="p-2 bg-green-300"
							style={{
								width: `${countPercentage(countTasksDone, countTasks)}%`,
							}}
						>
							{percentageTextElement}
						</div>
					)}
				</div>
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
