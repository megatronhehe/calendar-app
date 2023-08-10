import React from "react";

import { BsX } from "react-icons/bs";

const ModalForm = ({ taskForm, handleTaskForm, setToggleModal, addTask }) => {
	return (
		<div
			onClick={() => setToggleModal(false)}
			className="fixed top-0 left-0 z-20 w-full h-full gap-6 px-2 bg-gray-700 bg-opacity-60"
		>
			<div className="flex flex-col items-center justify-center h-full gap-2 -my-20">
				<button className="flex items-center justify-center w-12 h-12 p-2 text-xl text-white bg-red-300 rounded-full hover:bg-red-400">
					<BsX />
				</button>
				<div
					onClick={(e) => e.stopPropagation()}
					className="relative flex flex-col w-full max-w-sm gap-4 p-4 bg-white shadow-md rounded-xl "
				>
					<h1 className="text-center">New Task</h1>
					<form className="flex flex-col gap-4">
						<div className="flex gap-4">
							<input
								className="w-2/3 p-2 bg-gray-100 outline-none rounded-xl"
								type="text"
								name="task"
								value={taskForm.task}
								onChange={handleTaskForm}
								placeholder="task name"
							/>
							<input
								className="w-1/3 p-2 bg-gray-100 outline-none rounded-xl"
								type="date"
								name="date"
								onChange={handleTaskForm}
							/>
						</div>

						<button
							disabled={!taskForm.task}
							onClick={(e) => {
								e.preventDefault();
								addTask();
								setToggleModal(false);
							}}
							className={`p-2 rounded-full  ${
								!taskForm.task ? "bg-gray-100" : "bg-green-300 text-white"
							} ${!taskForm.task ? "hover:bg-gray-200" : "hover:bg-green-400"}`}
						>
							ok
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalForm;
