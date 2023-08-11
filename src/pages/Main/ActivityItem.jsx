import React, { useState } from "react";

import {
	BsCheckLg,
	BsX,
	BsCheck,
	BsPencilSquare,
	BsTrashFill,
} from "react-icons/bs";

const ActivityItem = ({ activity, deleteActivity, markActivityDone }) => {
	const { id, activity: task, isDone } = activity;

	const [toggleDelete, setToggleDelete] = useState(false);

	return (
		<div className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-md">
			<div
				className={`flex items-center gap-4 ${isDone ? "text-green-500" : ""}`}
			>
				<button
					onClick={() => markActivityDone(id)}
					className={`ml-1 p-1 rounded-md  ${
						isDone ? "bg-green-400 text-white" : "text-gray-300 bg-white"
					}`}
				>
					<BsCheckLg />
				</button>
				<h2>{task}</h2>
			</div>
			<div className="flex gap-2">
				<div className="flex gap-2">
					{toggleDelete && (
						<button
							onClick={() => deleteActivity(id)}
							className={`flex items-center justify-center w-8 h-8 p-2 text-lg text-white bg-red-300 rounded-full`}
						>
							<BsCheck />
						</button>
					)}
					<button
						onClick={() => setToggleDelete((prev) => !prev)}
						className={`flex items-center justify-center w-8 h-8 p-2 text-lg text-white  rounded-full ${
							toggleDelete ? "bg-gray-300" : "bg-red-300"
						}`}
					>
						{toggleDelete ? <BsX /> : <BsTrashFill />}
					</button>
				</div>
				<div className="border-r"></div>
				<button className="flex items-center justify-center w-8 h-8 p-2 text-lg text-white bg-gray-300 rounded-md">
					<BsPencilSquare />
				</button>
			</div>
		</div>
	);
};

export default ActivityItem;
