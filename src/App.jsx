import React from "react";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Main from "./pages/Main/Main";

import ContextProvider from "./context/Context";

function App() {
	return (
		<>
			<Navbar />
			<Container>
				<ContextProvider>
					<Main />
				</ContextProvider>
			</Container>
		</>
	);
}

export default App;
