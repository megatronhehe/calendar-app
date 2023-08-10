import React from "react";

const Container = ({ children }) => {
	return (
		<div className="flex justify-center p-4 bg-gray-100 sm:h-screen">
			<div className="w-full max-w-4xl md:mt-20">{children}</div>
		</div>
	);
};
export default Container;
