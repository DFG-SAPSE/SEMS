import { Tab } from "expo-router";
import AppContextProvider from "../context/AppContextProvider";

const Layout = () => {
	return (
		<AppContextProvider>
			<Tab screenOptions={{ headerShown: false }}></Tab>
		</AppContextProvider>
	);
};

export default Layout;
