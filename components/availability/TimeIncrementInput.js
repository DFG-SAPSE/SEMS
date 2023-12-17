import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const TimeIncrementInput = ({ timeIncrement, openTimeIncrementModal }) => {
	return (
		<View style={styles.timeSlotContainer}>
			<TouchableOpacity
				style={styles.timeInput}
				onPress={() => openTimeIncrementModal(timeIncrement)}
			>
				<Text style={styles.timeText}>{timeIncrement} minutes</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	timeInput: {
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 4,
		padding: theme.spacing.small,
		flexDirection: 'row',
	},
	timeText: {
		...theme.typography.mediumBody,
	},
	deleteTimeSlot: {
		marginHorizontal: theme.spacing.medium,
	},
});

export default TimeIncrementInput;
