import React from "react";

const Dashboard = () => {
	return (
		<main className="relative mb-20 font-light">
			<section className="flex flex-col gap-4 ">
				<div className="flex flex-row items-center justify-between w-full py-4 rounded-xl">
					<h2 className="text-2xl">Dashboard</h2>
					<p>Saturday, 12 August 2023</p>
				</div>

				<div className="flex justify-between w-full gap-2 pb-1 overflow-auto text-sm scroll-smooth sm:pb-0">
					<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
						<h2>Upcoming Events</h2>
						<p className="text-sm">
							in <span className="text-xl">8</span> Days
						</p>
					</div>
					<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
						<h2>Activities for today</h2>
						<p className="text-xl ">
							4 <span className="text-sm">Activities</span>
						</p>
					</div>
					<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
						<h2>Activities for tomorrow</h2>
						<p className="text-xl ">
							7 <span className="text-sm">Activities</span>
						</p>
					</div>
					<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-white sm:flex-shrink sm:w-1/4 rounded-xl">
						<h2>Events for this week</h2>
						<p className="text-xl">
							2 <span className="text-sm">Events</span>
						</p>
					</div>
				</div>

				<div className="flex flex-col p-4 bg-white rounded-xl">
					<h1>Activities Stats</h1>
					<div className="flex gap-2 pb-1 mt-4 overflow-auto text-sm sm:pb-0">
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Completed Activities Ratio</h2>
							<p className="text-xl">89%</p>
						</div>
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total activities listed</h2>
							<p className="mt-4 text-xl">
								30 <span className="text-sm">Activities</span>
							</p>
						</div>
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total activities completed</h2>
							<p className="mt-4 text-xl">
								25 <span className="text-sm">Activities</span>
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col p-4 bg-white rounded-xl">
					<h1>Events Stats</h1>
					<div className="flex gap-2 pb-1 mt-4 overflow-auto text-sm sm:pb-0">
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total events</h2>
							<p className="text-xl">
								10 <span className="text-sm">Events</span>
							</p>
						</div>
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total upcoming events</h2>
							<p className="mt-4 text-xl">
								3 <span className="text-sm">Events</span>
							</p>
						</div>
						<div className="flex flex-col justify-between flex-shrink-0 w-32 h-32 p-4 bg-gray-100 sm:flex-shrink sm:w-full rounded-xl">
							<h2>Total past events</h2>
							<p className="mt-4 text-xl">
								7 <span className="text-sm">Events</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Dashboard;
