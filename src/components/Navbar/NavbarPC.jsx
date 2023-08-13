import React from "react";

import { NavLink } from "react-router-dom";

import {
	BsCalendar3,
	BsFillBarChartFill,
	BsFillCaretLeftFill,
	BsFillInfoCircleFill,
	BsChevronLeft,
	BsChevronUp,
} from "react-icons/bs";

const NavbarPC = () => {
	return (
		<>
			<nav className="fixed top-0 left-0 z-10 flex justify-center invisible h-full py-24 pl-4 text-gray-300 bg-gray-800 xl:visible bg-opacity-95 rounded-r-xl font-extralight">
				<div className="flex flex-col items-start gap-8 text-xl ">
					<NavLink className="ml-6" to="/">
						<div className="flex flex-col items-center justify-center ">
							<BsChevronLeft />
							<BsChevronUp />
							<h2 className="text-base">CallendApp</h2>
						</div>
					</NavLink>

					<div className="w-32 border-b border-gray-600"></div>

					<NavLink className="w-40" to="/">
						{({ isActive }) => (
							<div className="relative flex items-center gap-4 py-2 border-gray-100 ">
								<BsCalendar3 /> <h2 className="text-base">Activities</h2>
								{isActive && (
									<BsFillCaretLeftFill className="absolute text-3xl text-gray-100 -right-3" />
								)}
							</div>
						)}
					</NavLink>

					<NavLink className="w-40" to="/dashboard">
						{({ isActive }) => (
							<div className="relative flex items-center gap-4 py-2 border-gray-100">
								<BsFillBarChartFill /> <h2 className="text-base">Dashboard</h2>
								{isActive && (
									<BsFillCaretLeftFill className="absolute text-3xl text-gray-100 -right-3" />
								)}
							</div>
						)}
					</NavLink>

					<NavLink className="w-40" to="/info">
						{({ isActive }) => (
							<div className="relative flex items-center gap-4 py-2 border-gray-100">
								<BsFillInfoCircleFill /> <h2 className="text-base">Info</h2>
								{isActive && (
									<BsFillCaretLeftFill className="absolute text-3xl text-gray-100 -right-3" />
								)}
							</div>
						)}
					</NavLink>
				</div>
			</nav>
		</>
	);
};

export default NavbarPC;
