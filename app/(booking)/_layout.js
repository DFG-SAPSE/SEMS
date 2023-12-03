import { Stack } from "expo-router";
import { theme } from "../../styles/theme";

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.colors.secondary.light,
				},
				headerBackTitle: false,
			}}
		></Stack>
	);
};

export default Layout;
