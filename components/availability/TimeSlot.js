import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { convertMinutesToTime } from '../../utils/dateAndTime';

const TimeSlot = ({
	dayIndex,
	timeSlot,
	timeSlotIndex,
	openTimePickerModal,
	deleteTimeSlot,
}) => {
	const startHour = timeSlot[0];
	const endHour = timeSlot[1];

	return (
		<View style={styles.timeSlotContainer}>
			<TouchableOpacity
				style={styles.timeInput}
				onPress={() =>
					openTimePickerModal(
						dayIndex,
						timeSlotIndex,
						true,
						startHour,
					)
				}
			>
				<Text style={styles.timeText}>
					{convertMinutesToTime(startHour) || 'Start Time'}
				</Text>
			</TouchableOpacity>
			<Text> - </Text>
			<TouchableOpacity
				style={styles.timeInput}
				onPress={() =>
					openTimePickerModal(dayIndex, timeSlotIndex, false, endHour)
				}
			>
				<Text style={styles.timeText}>
					{convertMinutesToTime(endHour) || 'End Time'}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.deleteTimeSlot}
				onPress={() => deleteTimeSlot(dayIndex, timeSlotIndex)}
			>
				<Text style={{ ...theme.typography.mediumBody }}> X </Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	timeSlotContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: theme.spacing.tiny,
	},
	timeInput: {
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 4,
		padding: theme.spacing.small,
		width: 86,
		flexDirection: 'row',
	},
	timeText: {
		...theme.typography.mediumBody,
	},
	deleteTimeSlot: {
		marginHorizontal: theme.spacing.medium,
	},
});

export default TimeSlot;
