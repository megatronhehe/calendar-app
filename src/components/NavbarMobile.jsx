import React from "react";

import { NavLink } from "react-router-dom";

import { BsCalendar3, BsFillBarChartFill } from "react-icons/bs";

const NavbarMobile = () => {
	return (
		<>
			<nav className="fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-20 p-4 text-3xl text-white bg-gray-700 xl:invisible bg-opacity-95">
				<div className="flex gap-16 px-8 py-4 bg-gray-800 rounded-full">
					<NavLink to="/">
						<button>
							<BsCalendar3 />
						</button>
					</NavLink>
					<NavLink to="/dashboard">
						<button>
							<BsFillBarChartFill />
						</button>
					</NavLink>
				</div>
			</nav>
		</>
	);
};

export default NavbarMobile;
