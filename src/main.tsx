import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Themes from "./theme/ThemeProvider.tsx";
import Notification from "./components/UI/Notification.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Themes>
			<Notification />
			<App />
		</Themes>
	</React.StrictMode>
);
