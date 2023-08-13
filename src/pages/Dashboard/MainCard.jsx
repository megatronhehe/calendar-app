import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const MainCard = ({ title, count, unit, setDateToNav = new Date() }) => {
	const { setSelectedDate } = useContext(Context);

	return (
		<Link
			onClick={() => setSelectedDate(setDateToNav)}
			to="/"
			className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 text-center bg-white sm:flex-shrink sm:w-1/4 rounded-xl"
		>
			<h2>{title}</h2>
			<p className="text-xl">{count ? count : "-"}</p>
			<p className="text-xs "> {unit}</p>
		</Link>
	);
};

export default MainCard;
