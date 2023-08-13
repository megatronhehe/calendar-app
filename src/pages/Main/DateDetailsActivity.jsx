import React from "react";

import { countPercentage } from "../../utils/countPercentage";

import { FaClipboardList } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";

const DateDetailsActivity = ({
	filterActivitiesByDateArray,
	setToggleModalActivityForm,
}) => {
	// Variables
	const countActivities = filterActivitiesByDateArray.length;
	const countActivitiesDone =
		filterActivitiesByDateArray.length > 0 &&
		filterActivitiesByDateArray.filter((task) => task.isDone).length;

	// Elements
	const detailsTextElement =
		countActivities < 1
			? "no listed activities on this date . ."
			: `you have ${countActivities ? countActivities : "no"} activities${
					countActivities > 1 ? "s" : ""
			  } on this date`;
	const isAllActivitiesDone =
		countActivities > 0 && countActivitiesDone === countActivities;

	const percentageTextElement =
		countActivities > 0
			? `${countPercentage(countActivitiesDone, countActivities)}%`
			: "0%";

	return (
		<section
			className={`relative p-2 w-1/2 rounded-xl ${
				isAllActivitiesDone ? "bg-green-400" : "bg-blue-500"
			}`}
		>
			<div className="flex flex-col justify-between h-40 gap-2 text-xs font-normal text-white sm:h-full">
				<div>
					<h2 className="flex items-center gap-2 text-base">
						<FaClipboardList />
						Activities
					</h2>
					<p className="mt-2 text-center">{detailsTextElement}</p>
					{countActivities > 0 && (
						<p className="mt-2 ">
							{isAllActivitiesDone
								? "All tasks are completed!"
								: `${countActivitiesDone} / ${countActivities} tasks completed`}
						</p>
					)}
				</div>
				<div className="overflow-hidden text-lg font-semibold text-white bg-blue-400 rounded-xl">
					{countActivities > 0 && (
						<div
							className="p-2 bg-green-300"
							style={{
								width: `${countPercentage(
									countActivitiesDone,
									countActivities
								)}%`,
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
