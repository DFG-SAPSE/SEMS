import React from 'react';
import { Stack } from 'expo-router';

import { theme } from '../../styles/theme';
import { ConsultantFiltersProvider } from '../../context/ConsultantFilterContext';

const Layout = () => {
	return (
		<>
			<ConsultantFiltersProvider>
				<Stack
					screenOptions={{
						headerStyle: {
							backgroundColor: theme.colors.secondary.light,
						},
						headerBackTitleVisible: false,
					}}
				/>
			</ConsultantFiltersProvider>
		</>
	);
};

export default Layout;
