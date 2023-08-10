import React, { useContext } from "react";

import { Context } from "../../context/Context";

import CalendarDate from "./CalendarDate";
import CarouselDateCard from "./CarouselDateCard";
import ActivityItem from "./ActivityItem";
import ActivitiesList from "./ActivitiesList";
import Carousel5Days from "./Carousel5Days";
import Calendar from "./Calendar";
import DateDetails from "./DateDetails";

const Main = () => {
	const {
		setToday,
		today,
		dateOfMonth,
		selectedDate,
		setSelectedDate,
		render5DaysArray,
		filterActivitiesByDateArray,
		nextMonth,
		prevMonth,
		prev5days,
		next5days,
		activities,
	} = useContext(Context);

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
			<section className="flex flex-col gap-4 mt-4 sm:w-1/2 sm:mt-0">
				<div className="h-1/4">
					<DateDetails selectedDate={selectedDate} />
				</div>

				<div className="h-3/4">
					<ActivitiesList
						selectedDate={selectedDate}
						filterActivitiesByDateArray={filterActivitiesByDateArray}
						activitiesElement={activitiesElement}
					/>
				</div>
			</section>
		</div>
	);
};

export default Main;
