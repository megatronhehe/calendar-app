import React, { useState } from "react";

import { activities } from "../../data/dummyActivitiesData";

import CalendarDate from "./CalendarDate";
import CarouselDateCard from "./CarouselDateCard";
import ActivityItem from "./ActivityItem";
import ActivitiesList from "./ActivitiesList";
import Carousel5Days from "./Carousel5Days";
import Calendar from "./Calendar";

import {
	eachDayOfInterval,
	endOfMonth,
	startOfMonth,
	addMonths,
	startOfWeek,
	endOfWeek,
	isSameDay,
	subMonths,
	subDays,
	addDays,
} from "date-fns";

const Main = () => {
	const [today, setToday] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(today);
	const [dateCarousel, setDateCarousel] = useState({
		start: subDays(today, 4),
		end: today,
	});

	const firstDate = startOfWeek(startOfMonth(today));
	const lastDate = endOfWeek(endOfMonth(today));
	const dateOfMonth = eachDayOfInterval({ start: firstDate, end: lastDate });
	const daysArray = ["S", "M", "T", "W", "T", "F", "S"];
	const render5DaysArray = eachDayOfInterval(dateCarousel);

	const filterActivitiesByDateArray = activities.filter((activity) =>
		isSameDay(activity.date, selectedDate)
	);

	const nextMonth = () => {
		setToday((prev) => addMonths(prev, 1));
	};

	const prevMonth = () => {
		setToday((prev) => subMonths(prev, 1));
	};

	const prev5days = () => {
		setDateCarousel((prev) => ({
			start: subDays(prev.start, 5),
			end: subDays(prev.end, 5),
		}));
	};

	const next5days = () => {
		setDateCarousel((prev) => ({
			start: addDays(prev.start, 5),
			end: addDays(prev.end, 5),
		}));
	};

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
			/>
		);
	});

	const activitiesElement =
		filterActivitiesByDateArray &&
		filterActivitiesByDateArray.map((activity) => (
			<ActivityItem key={activity.id} activity={activity} />
		));

	return (
		<div className="font-light sm:flex sm:gap-4">
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
				<Carousel5Days
					prev5days={prev5days}
					render5DaysElement={render5DaysElement}
					next5days={next5days}
				/>
			</section>

			{/* ACTIVITIES */}
			<section className="mt-4 sm:w-1/2 sm:mt-0">
				<ActivitiesList
					selectedDate={selectedDate}
					filterActivitiesByDateArray={filterActivitiesByDateArray}
					activitiesElement={activitiesElement}
				/>
			</section>
		</div>
	);
};

export default Main;
