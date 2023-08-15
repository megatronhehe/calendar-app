import React, { useState } from "react";

import NavbarMobileButton from "./NavbarMobileButton";

import {
	BsCalendar3,
	BsFillBarChartFill,
	BsFillInfoCircleFill,
} from "react-icons/bs";

const NavbarMobile = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="fixed bottom-0 left-0 z-20 flex items-center justify-around w-full h-16 text-gray-300 bg-gray-800 rounded-t-xl bg-opacity-90 backdrop-filter backdrop-blur-sm font-extralight xl:invisible">
			<NavbarMobileButton url="/" title="Activities" icon={<BsCalendar3 />} />

			<NavbarMobileButton
				url="/dashboard"
				title="Dashboard"
				icon={<BsFillBarChartFill />}
			/>

			<NavbarMobileButton
				url="/info"
				title="Info"
				icon={<BsFillInfoCircleFill />}
			/>
		</nav>
	);
};

export default NavbarMobile;
