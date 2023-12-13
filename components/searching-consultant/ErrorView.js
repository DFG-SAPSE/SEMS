import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorView = ({ fetchError }) => {
	return fetchError ? (
		<View style={styles.errorContainer}>
			<Text style={styles.errorText}>
				Couldn't fetch consultants. Please try again. {fetchError}
			</Text>
		</View>
	) : null;
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

export default ErrorView;
