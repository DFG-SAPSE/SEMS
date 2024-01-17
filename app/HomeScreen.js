import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getAuthChange } from '../services/auth';

export default function HomeScreen() {
	const [user, setUser] = useState(''); //stores currently logged in user

	// Handle user state changes
	function setAuthChange(newUser) {
		setUser(newUser);
	}

	useEffect(() => {
		getAuthChange(setAuthChange);
	}, []);

	return (
		<View style={styles.container}>
			<Text>Welcome {user.fullName}</Text>
			<StatusBar style="auto" />
		</View>
	);
}
import { theme } from '../styles/theme';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	footerView: {
		flex: 1,
		alignItems: 'center',
		marginTop: theme.spacing.xlarge,
	},
	footerText: {
		...theme.typography.mediumBody,
		color: '#2e2e2d',
	},
	footerLink: {
		color: '#788eec',
		...theme.typography.mediumBodyBold,
	},
});
