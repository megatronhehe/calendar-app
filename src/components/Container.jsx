import React from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Container = ({ children }) => {
	const navigate = useNavigate();

	return (
		<div className="relative flex justify-center p-4 bg-gray-100 font-extralight sm:h-screen">
			<div className="w-full max-w-4xl md:mt-20">{children}</div>
			<div className="fixed top-0 left-0 flex justify-between w-full px-4 ">
				<button
					onClick={() => navigate(-1)}
					className="flex items-center justify-center w-8 h-8 gap-2 text-gray-400 bg-white shadow-md xl:invisible rounded-b-xl"
				>
					<BsChevronLeft />
				</button>
				<button
					onClick={() => navigate(1)}
					className="flex items-center justify-center w-8 h-8 gap-2 text-gray-400 bg-white shadow-md xl:invisible rounded-b-xl"
				>
					<BsChevronRight />
				</button>
			</div>
		</div>
	);
};
export default Container;
