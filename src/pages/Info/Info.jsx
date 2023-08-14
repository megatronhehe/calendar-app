import React from "react";

import { motion } from "framer-motion";

import { FaCrown } from "react-icons/fa";
import {
	BsCircleFill,
	BsFillSuitDiamondFill,
	BsInstagram,
	BsGithub,
	BsLinkedin,
} from "react-icons/bs";

const Info = () => {
	const today = new Date();

	return (
		<motion.main
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -30 }}
			transition={{ type: "tween" }}
			className="relative mb-20 font-light"
		>
			<section className="flex flex-col gap-4 ">
				<div className="flex flex-row items-center justify-between w-full py-4 rounded-xl">
					<h1 className="text-2xl">Info</h1>
				</div>
				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="flex flex-col w-full gap-4 p-4 bg-white rounded-xl">
						<h2>Legends</h2>
						<p className="text-sm">
							This app is filled with markings to indicate certain things. here
							are the summary of each markings;
						</p>
						<ul className="flex flex-col gap-2 text-sm text-gray-500">
							<li className="flex items-center w-full gap-4 p-2 bg-gray-100 rounded-full">
								<motion.div whileHover={{ scale: 1.6 }}>
									<FaCrown className="flex items-center justify-center w-8 h-8 p-2 text-yellow-300 bg-white rounded-full" />
								</motion.div>
								<h3>important events</h3>
							</li>
							<li className="flex items-center w-full gap-4 p-2 bg-gray-100 rounded-full">
								<motion.div whileHover={{ scale: 1.6 }}>
									<BsCircleFill className="flex items-center justify-center w-8 h-8 p-2 text-yellow-300 bg-white rounded-full" />
								</motion.div>
								<h3>every activities is completed </h3>
							</li>
							<li className="flex items-center w-full gap-4 p-2 bg-gray-100 rounded-full">
								<motion.div whileHover={{ scale: 1.6 }}>
									<BsFillSuitDiamondFill className="flex items-center justify-center w-8 h-8 p-2 text-blue-500 bg-white rounded-full" />
								</motion.div>
								<h3>activities not completed yet </h3>
							</li>
							<li className="flex items-center w-full gap-4 p-2 bg-gray-100 rounded-full">
								<motion.div
									whileHover={{ scale: 1.6 }}
									className="flex items-center justify-center w-8 h-8 p-2 bg-blue-300 rounded-full"
								></motion.div>
								<h3>today's date </h3>
							</li>
							<li className="flex items-center w-full gap-4 p-2 bg-gray-100 rounded-full">
								<motion.div
									whileHover={{ scale: 1.6 }}
									className="flex items-center justify-center w-8 h-8 p-2 bg-blue-500 rounded-full"
								></motion.div>
								<h3>selected date</h3>
							</li>
						</ul>
					</div>
					<div className="flex flex-col w-full gap-4 p-4 bg-white rounded-xl">
						<h1>Message</h1>
						<p className="text-sm">
							{" "}
							idk what to add here so if youre reading this, im just gonna say
							this. pretty cool app that i made, inspired by Sam Selikoff with
							bit of twist here and there. as a junior developer, obviously the
							code is all over the place but i tried to maintain it to be
							atleast readable. I personally use this app daily because its
							actaully helpful on making me keep track on things that i have to
							do in life. surely i will get better at this thing but surely its
							going to take time. thats pretty much it, thanks for reading.
						</p>
						<p className="text-end">satya</p>
						<nav className="flex justify-center gap-4 text-2xl">
							<a href="https://www.instagram.com/007satya_/" target="_blank">
								<BsInstagram />
							</a>
							<a href="https://github.com/megatronhehe" target="_blank">
								<BsGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/"
								target="_blank"
							>
								<BsLinkedin />
							</a>
						</nav>
					</div>
				</div>
			</section>
		</motion.main>
	);
};

export default Info;
