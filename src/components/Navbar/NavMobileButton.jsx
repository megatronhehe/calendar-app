import React, { useState } from "react";

const NavButton = ({ icon, title }) => {
	const [showTitle, setShowTitle] = useState(false);

	return (
		<button
			onMouseEnter={() => setShowTitle(true)}
			onMouseLeave={() => setShowTitle(false)}
			className="relative"
		>
			{icon}
			{showTitle && (
				<h1 className="absolute px-4 py-2 text-lg tracking-wide bg-gray-700 font-extralight rounded-xl -top-1 left-16">
					{title}
				</h1>
			)}
		</button>
	);
};

export default NavButton;
