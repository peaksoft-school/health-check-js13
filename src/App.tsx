import { FC } from "react";
import Switcher from "./components/UI/CustomUI/Switcher";
import Column from "./utils/constants/Column";

const App: FC = () => {
	return (
		<div>
			<Switcher label="Create"  labelPlacement="bottom" />
			<Column/>
		</div>
	);
};

export default App;
