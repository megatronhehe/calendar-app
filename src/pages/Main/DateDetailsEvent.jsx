import React from "react";

import { FaCrown } from "react-icons/fa";
import { BsPlusCircle, BsX } from "react-icons/bs";

const DateDetailsEvent = ({
	setToggleModalEventForm,
	filterEventsByDateArray,
	setEvents,
}) => {
	// Functions
	const deleteEvent = (id) => {
		setEvents((prev) => prev.filter((event) => event.id !== id));
	};

	// Elements
	const eventsElement =
		filterEventsByDateArray &&
		filterEventsByDateArray.map((event) => (
			<div
				key={event.id}
				className="relative flex flex-col items-center justify-center font-semibold bg-yellow-200 rounded-md"
			>
				<p className="p-3">{event.title}</p>
				<button className="absolute top-1 left-1">
					<BsX />
				</button>
			</div>
		));

	const detailsTextElement = filterEventsByDateArray
		? `you have ${
				filterEventsByDateArray.length > 1 ? "events" : "an event"
		  } today!`
		: "nothing big happening today";

	return (
		<section className="relative w-1/2 p-4 overflow-hidden text-gray-700 bg-yellow-300 rounded-xl">
			<div className="flex flex-col justify-between h-40 text-xs font-normal sm:h-full">
				<h2 className="flex items-center gap-2 text-base">
					<FaCrown />
					Event
				</h2>

				<div className="flex flex-col justify-between gap-2 overflow-auto text-xs rounded-xl">
					<p>{detailsTextElement}</p>
				</div>

				<div className="flex w-full gap-1 pb-2 overflow-auto h-1/2 ">
					{eventsElement}
				</div>
				<button
					onClick={() => setToggleModalEventForm(true)}
					className="absolute text-2xl top-2 right-2"
				>
					<BsPlusCircle />
				</button>
			</div>
		</section>
	);
};

export default DateDetailsEvent;
