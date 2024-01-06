import { StyleSheet, View } from 'react-native';
import React from 'react';
import Dashboard from '../components/dashboard/dashboard';
import { useFonts } from 'expo-font';
import { fonts } from '../styles/fonts';
export default function Home() {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}
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
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.colors.white,
	},
});
