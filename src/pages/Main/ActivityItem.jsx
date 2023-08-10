import React from "react";

const ActivityItem = ({ activity, deleteTask, markTaskDone }) => {
	const { id, task, isDone } = activity;

	return (
		<div className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-lg">
			<div className={`flex items-center gap-2 `}>
				<button
					onClick={() => markTaskDone(id)}
					className={`flex items-center justify-center w-8 h-8  rounded-md ${
						isDone ? "bg-green-300" : "bg-white"
					}`}
				>
					v
				</button>
				<h2>{task}</h2>
			</div>
			<div className="flex gap-2">
				<button
					onClick={() => deleteTask(id)}
					className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
				>
					x
				</button>
			</div>
		</div>
	);
};

export default ActivityItem;
