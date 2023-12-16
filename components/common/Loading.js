import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const Loading = ({ message }) => {
	return (
		<View style={styles.loadingContainer}>
			<ActivityIndicator size="large" color="#0000ff" />
			<Text style={styles.loadingText}>{message || 'Loading...'}</Text>
		</View>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	loadingContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	loadingText: {
		marginTop: theme.spacing.medium,
		textAlign: 'center',
		color: theme.colors.text.dark,
	},
});

export default Loading;
