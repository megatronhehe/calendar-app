import React from "react";

const CategoryCard = ({
	title,
	count,
	unit,
	color = "bg-gray-100",
	fontColor = "text-black",
}) => {
	return (
		<div
			className={`relative flex flex-col justify-between w-1/3 h-40 p-4 text-center rounded-xl sm:h-32 ${color} ${fontColor}`}
		>
			<h2>{title}</h2>

			<div>
				<p className="text-xl font-semibold sm:text-4xl">{count}</p>
				<p className="mt-4 text-xs font-normal">{unit}</p>
			</div>
		</div>
	);
};

export default CategoryCard;
