import React from "react";

const ModalForm = ({ taskForm, handleTaskForm, setToggleModal, addTask }) => {
	return (
		<div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-6 px-2 bg-gray-100 bg-opacity-60">
			<button
				onClick={() => setToggleModal(false)}
				className="flex items-center justify-center w-12 h-12 p-2 text-white bg-red-300 rounded-full"
			>
				x
			</button>
			<div className="relative flex flex-col w-full max-w-sm gap-4 p-4 bg-white shadow-md rounded-xl ">
				<h1 className="text-center">New Task</h1>
				<form className="flex flex-col gap-4">
					<input
						className="w-full p-2 bg-gray-100 outline-none rounded-xl"
						type="text"
						name="task"
						value={taskForm.task}
						onChange={handleTaskForm}
						placeholder="what do you want to do today?"
					/>
					<input
						className="w-full p-2 bg-gray-100 outline-none rounded-xl"
						type="date"
						name="date"
						onChange={handleTaskForm}
					/>

					<button
						disabled={!taskForm}
						onClick={(e) => {
							e.preventDefault();
							addTask();
							setToggleModal(false);
						}}
						className={`p-2   rounded-full ${
							!taskForm ? "bg-gray-100" : "bg-green-400 text-white"
						}`}
					>
						ok
					</button>
				</form>
			</div>
		</div>
	);
};

export default ModalForm;
