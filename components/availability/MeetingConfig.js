import React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { theme } from '../../styles/theme';

const MeetingConfig = ({ children, currentlySelected, openPicker }) => {
	return (
		<View style={styles.configContainer}>
			<View style={styles.configHeaderContainer}>
				<Text style={styles.configHeader}>{children}</Text>
			</View>
			<View style={styles.timeSlotContainer}>
				<Pressable style={styles.configInput} onPress={openPicker}>
					<Text style={styles.inputText}>
						{currentlySelected} minutes
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	configContainer: {
		marginBottom: theme.spacing.large,
	},
	configHeaderContainer: {
		marginBottom: theme.spacing.small,
	},
	configHeader: {
		...theme.typography.mediumBody,
		opacity: 0.6,
	},
	configInput: {
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 4,
		padding: theme.spacing.mediumSmall,
		flexDirection: 'row',
	},
	inputText: {
		...theme.typography.mediumBody,
	},
});
export default MeetingConfig;
