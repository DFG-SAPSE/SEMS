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
					{convertMinutesToTime(startHour)}
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
					{convertMinutesToTime(endHour)}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.deleteTimeSlot}
				onPress={() => deleteTimeSlot(dayIndex, timeSlotIndex)}
			>
				<Text style={styles.removeTimeSlot}> X </Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	timeSlotContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: theme.spacing.tiny,
	},
	timeInput: {
		borderWidth: 1,
		borderColor: theme.colors.primary.light,
		borderRadius: 4,
		padding: theme.spacing.small,
		width: 86,
		flexDirection: 'row',
	},
	timeText: {
		...theme.typography.mediumBody,
		color: theme.colors.primary.light,
	},
	deleteTimeSlot: {
		marginHorizontal: theme.spacing.medium,
		height: 38,
		paddingHorizontal: theme.spacing.medium,
		paddingVertical: theme.spacing.tiny,
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: theme.colors.text,
		borderColor: theme.colors.primary.light,
	},
	removeTimeSlot: {
		fontSize: 15,
		marginTop: theme.spacing.tiny,
		color: theme.colors.primary.light,
		backgroundColor: theme.colors.text,
	},
});

export default TimeSlot;
