import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

import { createId } from "../../utils/createId";

// parsisosdsaisaiasisaisaisaosaiosai
import { format, parseISO } from "date-fns";

import { AnimatePresence, motion } from "framer-motion";

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
		renderWeekdays,
		dateCarousel,
		nextMonth,
		prevMonth,
		prevWeek,
		nextWeek,
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
		date: selectedDate.toLocaleDateString("en-CA"),
		isDone: false,
	};
	const initial_event_form = {
		id: "",
		title: "",
		date: selectedDate.toLocaleDateString("en-CA"),
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

	const renderWeekdaysElement = renderWeekdays.map((date) => {
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
		<motion.main
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -30 }}
			transition={{ type: "tween" }}
			className="relative mt-8 font-light sm:mt-0 sm:flex sm:gap-4"
		>
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
					prevWeek={prevWeek}
					renderWeekdaysElement={renderWeekdaysElement}
					nextWeek={nextWeek}
					dateCarousel={dateCarousel}
				/>
			</section>

			{/* ACTIVITIES */}
			<AnimatePresence mode="wait">
				<motion.section
					key={selectedDate}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="flex flex-col gap-4 mt-4 mb-20 sm:mb-0 sm:w-1/2 sm:mt-0"
				>
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
							selectedDate={selectedDate}
							activities={activities}
							setToggleModalActivityForm={setToggleModalActivityForm}
						/>
					</div>
				</motion.section>
			</AnimatePresence>

			<AnimatePresence>
				{toggleModalActivityForm && (
					<ModalActivityForm
						initial_activity_form={initial_activity_form}
						activityForm={activityForm}
						setActivityForm={setActivityForm}
						handleActivityForm={handleActivityForm}
						toggleModalActivityForm={toggleModalActivityForm}
						setToggleModalActivityForm={setToggleModalActivityForm}
						addActivity={addActivity}
					/>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{toggleModalEventForm && (
					<ModalEventForm
						initial_event_form={initial_event_form}
						eventForm={eventForm}
						setEventForm={setEventForm}
						handleEventForm={handleEventForm}
						toggleModalEventForm={toggleModalEventForm}
						setToggleModalEventForm={setToggleModalEventForm}
						addEvent={addEvent}
					/>
				)}
			</AnimatePresence>
		</motion.main>
	);
};

export default Main;
