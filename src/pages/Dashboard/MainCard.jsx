import React from "react";

const MainCard = ({ title, count, unit }) => {
	return (
		<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 text-center bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
			<h2>{title}</h2>
			<p className="text-xl">{count}</p>
			<p className="text-xs "> {unit}</p>
		</div>
	);
};

export default MainCard;
