import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import { BsFillSuitDiamondFill, BsFillCaretUpFill } from "react-icons/bs";

const NavbarMobileButton = ({ url, title, icon }) => {
	const [onHover, setOnHover] = useState(false);

	useEffect(() => {
		if (onHover) {
			setTimeout(() => setOnHover(false), 1000);
		}
	}, [onHover]);

	return (
		<NavLink
			onMouseEnter={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}
			to={url}
			className="relative flex flex-col items-center justify-center"
		>
			{({ isActive }) => (
				<>
					{icon}
					<AnimatePresence>
						{onHover && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								className="absolute -top-20"
							>
								<h1 className="relative flex items-center justify-center p-2 bg-gray-700 rounded-xl">
									{title}
									<BsFillSuitDiamondFill className="absolute text-center text-gray-700 -bottom-2" />
								</h1>
							</motion.div>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{isActive && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="absolute -bottom-7"
							>
								<BsFillCaretUpFill />
							</motion.div>
						)}
					</AnimatePresence>
				</>
			)}
		</NavLink>
	);
};

export default NavbarMobileButton;
