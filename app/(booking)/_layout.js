import React from 'react';
import { Stack } from 'expo-router';
import { theme } from '../../styles/theme';
import BookingProvider from '../../context/BookingContext';

const Layout = () => {
	return (
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
	);
};

export default Layout;
