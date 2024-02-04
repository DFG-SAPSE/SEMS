import { StyleSheet, View } from 'react-native';
import React from 'react';
import Dashboard from '../components/dashboard/dashboard';

export default function Home() {
	return (
		<View style={styles.container}>
			<Dashboard />
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
