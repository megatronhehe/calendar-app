import React from "react";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Main from "./pages/Main/Main";

function App() {
	return (
		<>
			<Navbar />
			<Container>
				<Main />
			</Container>
		</>
	);
}

export default App;
