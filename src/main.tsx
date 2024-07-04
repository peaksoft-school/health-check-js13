import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Themes from "./components/UI/Theme/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Themes>
			<App />
		</Themes>
	</React.StrictMode>
);
