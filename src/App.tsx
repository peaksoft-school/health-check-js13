import { FC } from "react";
import UserHeader from "./layout/user/UserHeader";
// import Switcher from "./components/UI/CustomUI/Switcher";

const App: FC = () => {
	return (
		<div>
			{/* <Switcher label="Create"  labelPlacement="bottom" /> */}
			<UserHeader />
		</div>
	);
};

export default App;
