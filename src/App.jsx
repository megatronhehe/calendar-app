import React from "react";

import NavbarMobile from "./components/NavbarMobile";
import NavbarPC from "./components/NavbarPC";
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
