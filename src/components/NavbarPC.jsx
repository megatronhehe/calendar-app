import React from "react";

import { BsCalendar3, BsFillBarChartFill } from "react-icons/bs";

import NavButton from "./NavButton";

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

					<NavButton icon={<BsCalendar3 />} title={"activities"} />
					<NavButton icon={<BsFillBarChartFill />} title={"dashboard"} />
				</div>
			</nav>
		</>
	);
};

export default NavbarPC;
