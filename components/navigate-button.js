import * as React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NavigateButton() {
	return (
		<View style={styles.outline}>
			<TouchableOpacity
				accessibilityLabel="Complete Profile Button"
				accessibilityRole="button"
				title="search-consultant"
				style={styles.Button}
			>
				<Text style={styles.buttonText}>Complete Profile</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	outline: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	Button: {
		color: '#FFFFFF',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		backgroundColor: '#00367C',
		width: 328,
		height: 40,
		marginBottom: 8,
		marginHorizontal: 16,
		paddingVertical: 8,
		paddingHorizontal: 24,
		flexShrink: 0,
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFF',
		letterSpacing: 0.1,
		fontWeight: 400,
		fontSize: 14,
	},
});
