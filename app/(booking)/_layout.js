import React from 'react';
import { Stack } from 'expo-router';
import { theme } from '../../styles/theme';
import BookingProvider from '../../context/BookingContext';
import { ConsultantFiltersProvider } from '../../context/ConsultantFilterContext';
const Layout = () => {
	return (
		<ConsultantFiltersProvider>
			<BookingProvider>
				<Stack
					screenOptions={{
						headerStyle: {
							backgroundColor: theme.colors.secondary.light,
						},
						headerBackTitleVisible: false,
					}}
				/>
			</BookingProvider>
		</ConsultantFiltersProvider>
	);
};

export default Layout;
