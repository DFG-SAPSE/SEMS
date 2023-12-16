import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ fetchError }) => {
	return (
		<View style={styles.errorContainer}>
			<Text style={styles.errorText}>{fetchError}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	errorContainer: {
		padding: 10,
		backgroundColor: 'red',
		alignItems: 'center',
	},
	errorText: {
		color: 'white',
	},
});

export default ErrorMessage;
