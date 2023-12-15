import React from 'react';
import { Stack } from 'expo-router';
import { theme } from '../../styles/theme';

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.colors.secondary.light,
				},
				headerBackTitleVisible: false,
			}}
		/>
	);
};

export default Layout;
