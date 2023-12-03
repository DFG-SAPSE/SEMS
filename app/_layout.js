import { Tabs } from "expo-router";
import AppContextProvider from "../context/AppContextProvider";

const Layout = () => {
	return (
		<AppContextProvider>
			<Tabs screenOptions={{ headerShown: false }}></Tabs>
		</AppContextProvider>
	);
};

export default Layout;
