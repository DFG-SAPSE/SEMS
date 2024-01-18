import React from 'react';
import { Tabs, usePathname } from 'expo-router';

import HomeIcon from '../assets/svg/HomeIcon';
import AboutMeIcon from '../assets/svg/AboutMeIcon';
import GrantIcon from '../assets/svg/GrantIcon';
import MessageIcon from '../assets/svg/MessageIcon';

const Layout = () => {
	const currentRouteName = usePathname();
	console.log(currentRouteName);
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					display:
						currentRouteName === '/LoginScreen' ||
							currentRouteName === '/RegistrationScreen'
							? 'none'
							: 'flex',
				},
			}}
		>
			<Tabs.Screen
				name="(auth)"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="EditAvailability"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="home"
				options={{
					href: '/home',
					tabBarIcon: HomeIcon,
					tabBarLabel: '',
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					href: '/about',
					tabBarIcon: AboutMeIcon,
					tabBarLabel: '',
				}}
			/>
			<Tabs.Screen
				name="(booking)"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="grant"
				options={{
					href: '/grant',
					tabBarIcon: GrantIcon,
					tabBarLabel: '',
				}}
			/>
			<Tabs.Screen
				name="message"
				options={{
					href: '/message',
					tabBarIcon: MessageIcon,
					tabBarLabel: '',
				}}
			/>
		</Tabs>
	);
};

export default Layout;
