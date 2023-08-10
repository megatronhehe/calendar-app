import React from "react";

import Section from "../../components/Section";

import { countPercentage } from "../../utils/countPercentage";

import { format } from "date-fns";

import { FaClipboardList, FaCrown } from "react-icons/fa";

const DateDetails = ({ selectedDate, filterActivitiesByDateArray }) => {
	const countTasks = filterActivitiesByDateArray.length;
	const countTasksDone =
		filterActivitiesByDateArray.length > 0 &&
		filterActivitiesByDateArray.filter((task) => task.isDone).length;

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
		<Section color={isAllTasksComplete ? "bg-green-400" : "bg-blue-500"}>
			<div className="flex w-full h-40 gap-4 font-normal text-white sm:h-full">
				<div className="flex flex-col justify-between w-2/3 ">
					<div className="text-xs h-1/2">
						<h2 className="flex items-center gap-2 text-base">
							<FaClipboardList />
							Task
						</h2>
						<p>{detailsTextElement}</p>
						{countTasks > 0 && (
							<p>
								{isAllTasksComplete
									? "All tasks are completed!"
									: `${countTasksDone} / ${countTasks} tasks completed`}
							</p>
						)}
					</div>
					<div
						className={`w-1/2 py-2 text-xl text-center ${
							isAllTasksComplete ? "bg-green-300" : "bg-blue-400"
						} rounded-xl`}
					>
						{percentageTextElement}
					</div>
				</div>
				<div className="flex flex-col items-end justify-between w-1/3 gap-2 text-xl rounded-xl">
					<div>
						<h1 className="font-extralight">{format(selectedDate, "EEEE")}</h1>
						<h2 className="text-xs">{format(selectedDate, "dd MMMM yyyy")}</h2>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default DateDetails;
