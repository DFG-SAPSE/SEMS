import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//errorMessage is for fetch request errors
const ErrorView = ({ fetchError }) => {
	return (
		<View style={styles.errorContainer}>
			<Text style={styles.errorText}>{fetchError}</Text>
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	errorContainer: {
		padding: theme.spacing.medium,
		backgroundColor: theme.colors.red,
		alignItems: 'center',
	},
	errorText: {
		color: theme.colors.white,
	},
});

export default ErrorView;
