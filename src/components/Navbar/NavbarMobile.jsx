import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import {
	BsCalendar3,
	BsFillBarChartFill,
	BsList,
	BsFillInfoCircleFill,
	BsPlayFill,
	BsChevronLeft,
	BsChevronUp,
} from "react-icons/bs";

import { PiDiamondsFourFill } from "react-icons/pi";

const NavbarMobile = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="fixed bottom-0 left-0 z-50 flex flex-col-reverse w-full px-8 text-gray-300 bg-gray-800 bg-opacity-90 xl:invisible rounded-t-xl font-extralight ">
			<div className="z-20 flex items-center justify-between h-20 text-3xl">
				<button className="flex flex-col items-center text-lg" to="/">
					<BsChevronLeft />
					<BsChevronUp />
					<p className="text-xs">CalendApp</p>
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
				<div className="z-20 flex flex-col items-center justify-center py-8 text-base text-gray-600 ">
					<PiDiamondsFourFill className="self-center w-full pb-2 text-2xl " />
					<div className="relative flex flex-col gap-8 py-4 text-gray-300">
						<NavLink
							onClick={() => setToggleMenu(false)}
							className="flex items-center gap-8"
							to="/"
						>
							{({ isActive }) => (
								<>
									<BsCalendar3 />
									<p className="">Activities</p>
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
									<p className="">Dashboard</p>
									{isActive && <BsPlayFill className="absolute -left-14" />}
								</>
							)}
						</NavLink>

						<NavLink
							onClick={() => setToggleMenu(false)}
							className="flex items-center gap-8"
							to="/info"
						>
							{({ isActive }) => (
								<>
									<BsFillInfoCircleFill />
									<p className="">Info</p>
									{isActive && <BsPlayFill className="absolute -left-14" />}
								</>
							)}
						</NavLink>
					</div>
					<PiDiamondsFourFill className="self-center w-full pt-2 text-2xl" />
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
