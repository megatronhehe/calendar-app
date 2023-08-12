import React from "react";

import NavbarPC from "./components/Navbar/NavbarPC";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Container from "./components/Container";

import Main from "./pages/Main/Main";
import Dashboard from "./pages/Dashboard/Dashboard";

import { Routes, Route } from "react-router-dom";

import ContextProvider from "./context/Context";

function App() {
	return (
		<>
			<NavbarPC />
			<NavbarMobile />
			<Container>
				<ContextProvider>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</ContextProvider>
			</Container>
		</>
	);
}

export default App;
