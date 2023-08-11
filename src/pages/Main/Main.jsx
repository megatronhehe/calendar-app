import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

import { createId } from "../../utils/createId";

import parseISO from "date-fns/parseISO";
import { format } from "date-fns";

import CalendarDate from "./CalendarDate";
import CarouselDateCard from "./CarouselDateCard";
import ActivitiesList from "./ActivitiesList";
import CarouselDates from "./CarouselDates";
import Calendar from "./Calendar";
import DateDetailsActivity from "./DateDetailsActivity";
import DateDetailsEvent from "./DateDetailsEvent";
import ModalActivityForm from "./ModalActivityForm";
import ModalEventForm from "./ModalEventForm";

const Main = () => {
	// Context
	const {
		setToday,
		today,
		dateOfMonth,
		selectedDate,
		setSelectedDate,
		render5DaysArray,
		nextMonth,
		prevMonth,
		prev5days,
		next5days,
		activities,
		setActivities,
		isActivitiesExist,
		filterActivitiesByDateArray,
		events,
		setEvents,
		filterEventsByDateArray,
	} = useContext(Context);

	// Inital state
	const initial_activity_form = {
		id: "",
		activity: "",
		date: "",
		isDone: false,
	};
	const initial_event_form = {
		id: "",
		title: "",
		date: "",
	};

	// States
	const [activityForm, setActivityForm] = useState(initial_activity_form);
	const [eventForm, setEventForm] = useState(initial_event_form);

	const [toggleModalActivityForm, setToggleModalActivityForm] = useState(false);
	const [toggleModalEventForm, setToggleModalEventForm] = useState(false);

	// Functions
	// Activity Functions
	const handleActivityForm = (e) => {
		const { value, name } = e.target;
		setActivityForm((prev) => ({ ...prev, [name]: value }));
	};

	const addActivity = () => {
		setActivities((prev) => [
			...prev,
			{
				id: createId(),
				activity: activityForm.activity,
				date: activityForm.date ? parseISO(activityForm.date) : selectedDate,
			},
		]);
		setActivityForm(initial_activity_form);
	};

	// Event Functions
	const handleEventForm = (e) => {
		const { value, name } = e.target;
		setEventForm((prev) => ({ ...prev, [name]: value }));
	};

	const addEvent = () => {
		setEvents((prev) => [
			...prev,
			{
				id: createId(),
				title: eventForm.title,
				date: eventForm.date ? parseISO(eventForm.date) : selectedDate,
			},
		]);
		setEventForm(initial_event_form);
	};

	// Elements
	const daysArray = ["S", "M", "T", "W", "T", "F", "S"];
	const daysElement = daysArray.map((day, i) => (
		<li key={i} className="flex items-center justify-center w-8 h-8">
			{day}
		</li>
	));

	const dateElement = dateOfMonth.map((date) => {
		return (
			<CalendarDate
				key={date}
				date={date}
				today={today}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				activities={activities}
				isActivitiesExist={isActivitiesExist}
				events={events}
			/>
		);
	});

	const render5DaysElement = render5DaysArray.map((date) => {
		return (
			<CarouselDateCard
				key={date}
				date={date}
				today={today}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				activities={activities}
				isActivitiesExist={isActivitiesExist}
				events={events}
			/>
		);
	});

	return (
		<div className="relative font-light sm:flex sm:gap-4">
			<section className="flex flex-col gap-4 sm:w-1/2">
				{/* CALENDAR */}
				<Calendar
					prevMonth={prevMonth}
					today={today}
					setToday={setToday}
					nextMonth={nextMonth}
					daysElement={daysElement}
					dateElement={dateElement}
				/>

				{/* DATE CAROUSEL */}
				<CarouselDates
					prev5days={prev5days}
					render5DaysElement={render5DaysElement}
					next5days={next5days}
				/>
			</section>

			{/* ACTIVITIES */}
			<section className="flex flex-col gap-4 mt-4 mb-20 sm:mb-0 sm:w-1/2 sm:mt-0">
				<div className="flex justify-between p-4 text-white bg-gray-600 rounded-xl">
					<h2>
						{format(selectedDate, "EEEE")} <span></span>
					</h2>
					<h3>{format(selectedDate, "dd MMMM yyyy")}</h3>
				</div>

				<div className="flex gap-2 h-2/5">
					<DateDetailsActivity
						setToggleModalActivityForm={setToggleModalActivityForm}
						filterActivitiesByDateArray={filterActivitiesByDateArray}
					/>
					<DateDetailsEvent
						setToggleModalEventForm={setToggleModalEventForm}
						filterEventsByDateArray={filterEventsByDateArray}
						setEvents={setEvents}
					/>
				</div>

				<div className="h-full">
					<ActivitiesList
						filterActivitiesByDateArray={filterActivitiesByDateArray}
						setActivities={setActivities}
					/>
				</div>
			</section>
			{toggleModalActivityForm && (
				<ModalActivityForm
					activityForm={activityForm}
					handleActivityForm={handleActivityForm}
					setToggleModalActivityForm={setToggleModalActivityForm}
					addActivity={addActivity}
				/>
			)}

			{toggleModalEventForm && (
				<ModalEventForm
					eventForm={eventForm}
					handleEventForm={handleEventForm}
					setToggleModalEventForm={setToggleModalEventForm}
					addEvent={addEvent}
				/>
			)}
		</div>
	);
};

export default Main;
