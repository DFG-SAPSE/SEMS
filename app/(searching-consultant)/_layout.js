import React from 'react';
import { Stack } from 'expo-router';
import { theme } from '../../styles/theme';
import { SpecialitiesProvider } from '../../context/FilterConsultantsContext';
const Layout = () => {
	return (
		<>
			<SpecialitiesProvider>
				<Stack
					screenOptions={{
						headerStyle: {
							backgroundColor: theme.colors.secondary.light,
						},
						headerBackTitleVisible: false,
					}}
				/>
			</SpecialitiesProvider>
		</>
	);
};

export default Layout;
