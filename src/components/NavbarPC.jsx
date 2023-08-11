import React from "react";

import { NavLink } from "react-router-dom";

import { BsCalendar3, BsFillBarChartFill } from "react-icons/bs";
import { PiDiamondsFourFill } from "react-icons/pi";

const NavbarPC = () => {
	return (
		<>
			<nav className="fixed top-0 left-0 z-10 flex justify-center invisible h-full py-24 pl-4 text-gray-300 bg-gray-800 xl:visible bg-opacity-95 rounded-r-xl font-extralight">
				<div className="flex flex-col items-start gap-8 text-xl ">
					<NavLink className="ml-6" to="/">
						<div className="flex flex-col items-center justify-center ">
							<PiDiamondsFourFill /> <h2 className="text-base">CallendApp</h2>
						</div>
					</NavLink>

					<div className="w-32 border-b border-gray-600"></div>

					<NavLink className="w-40" to="/">
						{({ isActive }) => (
							<div
								className={`flex items-center gap-4 py-2 ${
									isActive ? "border-r-8" : ""
								}`}
							>
								<BsCalendar3 /> <h2 className="text-base">Activities</h2>
							</div>
						)}
					</NavLink>

					<NavLink className="w-40" to="/dashboard">
						{({ isActive }) => (
							<div
								className={`flex items-center gap-4 py-2 ${
									isActive ? "border-r-8" : ""
								}`}
							>
								<BsFillBarChartFill /> <h2 className="text-base">Dashboard</h2>
							</div>
						)}
					</NavLink>
				</div>
			</nav>
		</>
	);
};

export default NavbarPC;
