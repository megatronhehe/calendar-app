import React from "react";

const Section = ({ children, color }) => {
	const bgColor = color ? color : "bg-white";

	return (
		<section className={`h-full p-4  rounded-xl ${bgColor}`}>
			{children}
		</section>
	);
};

export default Section;
