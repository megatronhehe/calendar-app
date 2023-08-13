import React, { useState, useRef, useEffect } from "react";

import {
	BsCheckLg,
	BsX,
	BsCheck,
	BsPencilSquare,
	BsTrashFill,
} from "react-icons/bs";

const ActivityItem = ({ setActivities, activity }) => {
	const { id, activity: task, isDone } = activity;

	const [toggleDelete, setToggleDelete] = useState(false);
	const [toggleEdit, setToggleEdit] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		if (toggleEdit) {
			ref.current.focus();
		}
	}, [toggleEdit]);

	const markActivityDone = (id) => {
		setActivities((prev) =>
			prev.map((activity) =>
				activity.id === id
					? { ...activity, isDone: !activity.isDone }
					: activity
			)
		);
	};

	const deleteActivity = (id) => {
		setActivities((prev) => prev.filter((activity) => activity.id !== id));
	};

	const editActivity = (id, e) => {
		const { value } = e.target;
		setActivities((prev) =>
			prev.map((activity) =>
				activity.id === id ? { ...activity, activity: value } : activity
			)
		);
	};

	return (
		<div className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-md">
			<div
				className={`flex items-center pr-2 w-full gap-4 ${
					isDone ? "text-green-500" : ""
				}`}
			>
				<button
					onClick={() => markActivityDone(id)}
					className={`ml-1 p-1 rounded-md  ${
						isDone ? "bg-green-400 text-white" : "text-gray-300 bg-white"
					}`}
				>
					<BsCheckLg />
				</button>
				<form className="w-full">
					<input
						ref={ref}
						className="w-full px-2 rounded-lg outline-none"
						disabled={!toggleEdit}
						onChange={(e) => editActivity(id, e)}
						type="text"
						name="activity"
						value={task}
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							setToggleEdit(false);
						}}
					></button>
				</form>
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
				<button
					onClick={() => setToggleEdit((prev) => !prev)}
					className="flex items-center justify-center w-8 h-8 p-2 text-lg text-white bg-gray-300 rounded-md"
				>
					{toggleEdit ? <BsCheck /> : <BsPencilSquare />}
				</button>
			</div>
		</div>
	);
};

export default ActivityItem;
