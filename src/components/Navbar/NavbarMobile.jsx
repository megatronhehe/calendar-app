import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import {
	BsCalendar3,
	BsFillBarChartFill,
	BsList,
	BsPlayFill,
} from "react-icons/bs";
import { PiDiamondsFourFill } from "react-icons/pi";

const NavbarMobile = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="fixed bottom-0 left-0 z-50 flex flex-col-reverse w-full px-8 text-gray-300 bg-gray-800 bg-opacity-90 xl:invisible rounded-t-xl font-extralight ">
			<div className="z-20 flex items-center justify-between h-20 text-3xl">
				<button className="flex items-center gap-2 " to="/">
					<PiDiamondsFourFill />
					<p className="text-lg">CalendApp</p>
				</button>
				<button
					onClick={() => {
						setToggleMenu((prev) => !prev);
					}}
					to="/"
				>
					<BsList />
				</button>
			</div>
			{toggleMenu && (
				<div className="z-20 flex flex-col items-center justify-center py-8 text-3xl text-gray-600 ">
					<PiDiamondsFourFill className="self-center w-full pb-2 " />
					<div className="relative flex flex-col gap-8 py-4 text-gray-300">
						<NavLink
							onClick={() => setToggleMenu(false)}
							className="flex items-center gap-8"
							to="/"
						>
							{({ isActive }) => (
								<>
									<BsCalendar3 />
									<p className="text-lg">Activities</p>
									{isActive && <BsPlayFill className="absolute -left-14" />}
								</>
							)}
						</NavLink>

						<NavLink
							onClick={() => setToggleMenu(false)}
							className="flex items-center gap-8"
							to="/dashboard"
						>
							{({ isActive }) => (
								<>
									<BsFillBarChartFill />
									<p className="text-lg">Dashboard</p>
									{isActive && <BsPlayFill className="absolute -left-14" />}
								</>
							)}
						</NavLink>
					</div>
					<PiDiamondsFourFill className="self-center w-full pt-2" />
				</div>
			)}
			{toggleMenu && (
				<div
					onClick={() => setToggleMenu(false)}
					className="fixed top-0 left-0 z-10 w-full h-full bg-gray-700 bg-opacity-40"
				></div>
			)}
		</nav>
	);
};

export default NavbarMobile;
