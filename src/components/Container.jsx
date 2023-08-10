import React from "react";

const Container = ({ children }) => {
	return (
		<div className="flex items-center justify-center p-4 bg-gray-100 sm:h-screen ">
			<div className="w-full max-w-4xl">{children}</div>
		</div>
	);
};
export default Container;
