import React, { useEffect } from "react";
import { format } from "date-fns";

import { BsX } from "react-icons/bs";

const ModalActivityForm = ({
	initial_activity_form,
	activityForm,
	setActivityForm,
	handleActivityForm,
	toggleModalActivityForm,
	setToggleModalActivityForm,
	addActivity,
}) => {
	useEffect(() => {
		if (toggleModalActivityForm) {
			setActivityForm(initial_activity_form);
		}
	}, [toggleModalActivityForm]);

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
						<div className="flex flex-col gap-4">
							<input
								autoFocus
								className="p-2 bg-gray-100 outline-none rounded-xl"
								type="text"
								name="activity"
								value={activityForm.activity}
								onChange={handleActivityForm}
								placeholder="activity name"
							/>
							<div className="flex items-center gap-4">
								<input
									className="w-1/2 p-2 bg-gray-100 outline-none rounded-xl"
									type="date"
									name="date"
									value={activityForm.date}
									onChange={handleActivityForm}
								/>
								<p className="w-1/2 text-center">
									{format(new Date(activityForm.date), "EEE, dd MMM yyyy")}
								</p>
							</div>
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
