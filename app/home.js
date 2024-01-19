import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Dashboard from '../components/dashboard/dashboard';
import { useFonts } from 'expo-font';
import { fonts } from '../styles/fonts';
import { getAuthChange } from '../services/auth';

export default function Home() {
	const [user, setUser] = useState(''); //stores currently logged in user

	// Handle user state changes
	function setAuthChange(newUser) {
		setUser(newUser);
	}

	useEffect(() => {
		getAuthChange(setAuthChange);
	}, []);
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			<Dashboard user={user} />
		</View>
	);
}

import { theme } from '../styles/theme';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
});
