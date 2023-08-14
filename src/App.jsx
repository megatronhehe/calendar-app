import React from "react";

import NavbarPC from "./components/Navbar/NavbarPC";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Container from "./components/Container";

import Main from "./pages/Main/Main";
import Dashboard from "./pages/Dashboard/Dashboard";
import Info from "./pages/Info/Info";

import { Routes, Route, useLocation } from "react-router-dom";

import ContextProvider from "./context/Context";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<>
			<NavbarPC />
			<NavbarMobile />
			<Container>
				<ContextProvider>
					<AnimatePresence mode="wait">
						<Routes location={location} key={location.pathname}>
							<Route path="/" element={<Main />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/info" element={<Info />} />
						</Routes>
					</AnimatePresence>
				</ContextProvider>
			</Container>
		</>
	);
}

export default App;
