import React, { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { format } from "date-fns";

import {
	BsCaretLeftFill,
	BsCaretRightFill,
	BsChevronBarDown,
	BsChevronBarUp,
} from "react-icons/bs";

const Calendar = ({
	prevMonth,
	setToday,
	nextMonth,
	today,
	daysElement,
	dateElement,
}) => {
	const [toggleShow, setToggleShow] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		// Set toggleShow to true if window width is 640px or less
		if (windowWidth >= 640) {
			setToggleShow(true);
		} else {
			setToggleShow(false);
		}
	}, [windowWidth]);

	return (
		<>
			<div className="fixed top-0 left-0 z-30 flex justify-center w-full">
				<button
					onClick={() => setToggleShow((prev) => !prev)}
					className={`flex items-center justify-center gap-2 px-3 py-1 text-sm text-gray-400 rounded-b-xl bg-white shadow-md ${
						windowWidth >= 640 ? "invisible" : "visible"
					}`}
				>
					{toggleShow ? (
						<>
							hide calendar <BsChevronBarUp />
						</>
					) : (
						<>
							show calendar <BsChevronBarDown />
						</>
					)}
				</button>
			</div>
			<AnimatePresence initial="false">
				{toggleShow && (
					<motion.div
						initial={{ opacity: 0, y: -80 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -80 }}
						transition={{ type: "tween" }}
						className="fixed top-0 left-0 z-20 w-full p-4 bg-white shadow-lg h-1/2 sm:h-full sm:static rounded-b-xl sm:rounded-xl sm:shadow-none"
					>
						<div className="flex justify-between mt-4 mb-6 ">
							<div className="flex items-center justify-between w-48 gap-4 text-gray-300 ">
								<button
									className="flex items-center justify-center w-8 h-8 rounded-full hover:text-blue-500 "
									onClick={prevMonth}
								>
									<BsCaretLeftFill />
								</button>
								<h2
									className="text-blue-500"
									onClick={() => {
										setToday(new Date());
									}}
								>
									{format(today, "MMMM")}
								</h2>
								<button
									className="flex items-center justify-center w-8 h-8 rounded-full hover:text-blue-500 "
									onClick={nextMonth}
								>
									<BsCaretRightFill />
								</button>
							</div>
							<h2 className="mr-5 text-2xl sm:mr-2">{format(today, "YYY")}</h2>
						</div>
						<ul className="grid grid-cols-7 gap-4 mb-4 font-semibold">
							{daysElement}
						</ul>

						<div className="grid grid-cols-7 gap-4 ">{dateElement}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Calendar;
