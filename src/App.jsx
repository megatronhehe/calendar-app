import React from "react";

import NavbarMobile from "./components/NavbarMobile";
import NavbarPC from "./components/NavbarPC";
import Container from "./components/Container";
import Main from "./pages/Main/Main";

import ContextProvider from "./context/Context";

function App() {
	return (
		<>
			<NavbarPC />
			<NavbarMobile />
			<Container>
				<ContextProvider>
					<Main />
				</ContextProvider>
			</Container>
		</>
	);
}

export default App;
