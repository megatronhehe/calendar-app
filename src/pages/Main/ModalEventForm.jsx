import React, { useEffect } from "react";

import { BsX } from "react-icons/bs";

import { format } from "date-fns";

const ModalEventForm = ({
	initial_event_form,
	eventForm,
	setEventForm,
	handleEventForm,
	toggleModalEventForm,
	setToggleModalEventForm,
	addEvent,
}) => {
	useEffect(() => {
		if (toggleModalEventForm) {
			setEventForm(initial_event_form);
		}
	}, [toggleModalEventForm]);

	return (
		<div
			onClick={() => setToggleModalEventForm(false)}
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
					<h1 className="text-center">New Event</h1>
					<form className="flex flex-col gap-4">
						<div className="flex flex-col gap-4">
							<input
								autoFocus
								className="p-2 bg-gray-100 outline-none  rounded-xl"
								type="text"
								name="title"
								value={eventForm.title}
								onChange={handleEventForm}
								placeholder="event title"
							/>
							<div className="flex items-center gap-4">
								<input
									className="w-1/2 p-2 bg-gray-100 outline-none rounded-xl"
									type="date"
									name="date"
									value={eventForm.date}
									onChange={handleEventForm}
								/>
								<p className="w-1/2 text-center">
									{format(new Date(eventForm.date), "EEE, dd MMM yyyy")}
								</p>
							</div>
						</div>

						<button
							disabled={!eventForm.title}
							onClick={(e) => {
								e.preventDefault();
								addEvent();
								setToggleModalEventForm(false);
							}}
							className={`p-2 rounded-full  ${
								!eventForm.title ? "bg-gray-100" : "bg-green-300 text-white"
							} ${
								!eventForm.title ? "hover:bg-gray-200" : "hover:bg-green-400"
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

export default ModalEventForm;
