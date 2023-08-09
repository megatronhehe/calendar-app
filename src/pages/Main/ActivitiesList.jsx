import React from "react";

import Section from "../../components/Section";

import { format } from "date-fns";

const ActivitiesList = ({
	selectedDate,
	filterActivitiesByDateArray,
	activitiesElement,
}) => {
	return (
		<Section>
			<div className="flex justify-between w-full ">
				<h2 className="mb-4">Activities</h2>
				<h3>{format(selectedDate, "EEEE, dd MMMM yyyy")}</h3>
			</div>

			{filterActivitiesByDateArray.length > 0 ? (
				<div>{activitiesElement}</div>
			) : (
				<div className="text-center text-gray-300 ">
					no activities listed at this date
				</div>
			)}
		</Section>
	);
};

export default ActivitiesList;
