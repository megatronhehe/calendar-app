import React from "react";

import { BsX } from "react-icons/bs";

const ModalActivityForm = ({
	activityForm,
	handleActivityForm,
	setToggleModalActivityForm,
	addActivity,
}) => {
	return (
		<div
			onClick={() => setToggleModalActivityForm(false)}
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
					<h1 className="text-center">New Activity</h1>
					<form className="flex flex-col gap-4">
						<div className="flex gap-4">
							<input
								className="w-2/3 p-2 bg-gray-100 outline-none rounded-xl"
								type="text"
								name="activity"
								value={activityForm.activity}
								onChange={handleActivityForm}
								placeholder="activity name"
							/>
							<input
								className="w-1/3 p-2 bg-gray-100 outline-none rounded-xl"
								type="date"
								name="date"
								onChange={handleActivityForm}
							/>
						</div>

						<button
							disabled={!activityForm.activity}
							onClick={(e) => {
								e.preventDefault();
								addActivity();
								setToggleModalActivityForm(false);
							}}
							className={`p-2 rounded-full  ${
								!activityForm.activity
									? "bg-gray-100"
									: "bg-green-300 text-white"
							} ${
								!activityForm.activity
									? "hover:bg-gray-200"
									: "hover:bg-green-400"
							}`}
						>
							ok
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalActivityForm;