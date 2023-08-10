import React from "react";

import NavButton from "./NavButton";

import { NavLink } from "react-router-dom";

import { BsCalendar3, BsFillBarChartFill } from "react-icons/bs";
import { PiDiamondsFourFill } from "react-icons/pi";

const NavbarPC = () => {
	return (
		<>
			<nav className="fixed top-0 left-0 z-10 flex justify-center invisible w-20 h-full text-3xl text-white bg-gray-700 xl:visible bg-opacity-95">
				<div className="flex flex-col items-start gap-8 py-16">
					<button>
						<PiDiamondsFourFill />
					</button>
					<div className="w-full border-b border-gray-500"></div>
					<NavLink to="/">
						<NavButton icon={<BsCalendar3 />} title={"activities"} />
					</NavLink>
					<NavLink to="/dashboard">
						<NavButton icon={<BsFillBarChartFill />} title={"dashboard"} />
					</NavLink>
				</div>
			</nav>
		</>
	);
};

export default NavbarPC;
