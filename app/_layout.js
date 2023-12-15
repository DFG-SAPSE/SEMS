import React from 'react';
import { Tabs } from 'expo-router';
import UserProvider from '../context/UserContext';

const Layout = () => {
	return (
		<UserProvider>
			<Tabs screenOptions={{ headerShown: false }} />
		</UserProvider>
	);
};

export default Layout;
