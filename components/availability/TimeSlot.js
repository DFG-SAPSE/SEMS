import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { convertMinutesToTime } from '../../utils/dateAndTime';
import { UserContext } from '../../context/UserContext';

const TimeSlot = ({
	dayIndex,
	timeSlot,
	timeSlotIndex,
	openTimePickerModal,
}) => {
	const { userData, updateAvailability } = useContext(UserContext);
	const startHour = timeSlot[0];
	const endHour = timeSlot[1];

	const handleTimeChange = (isStart, time) => {
		openTimePickerModal(dayIndex, timeSlotIndex, isStart, time);
	};

	const handleDeleteTimeSlot = () => {
		const newTimeSlots = [...userData.availability[dayIndex]];
		newTimeSlots.splice(timeSlotIndex, 1);
		updateAvailability(dayIndex, newTimeSlots);
	};

	return (
		<View style={styles.timeSlotContainer}>
			<TouchableOpacity
				style={styles.timeInput}
				onPress={() => handleTimeChange(true, startHour)}
			>
				<Text style={styles.timeText}>
					{convertMinutesToTime(startHour) || 'Start Time'}
				</Text>
			</TouchableOpacity>
			<Text> - </Text>
			<TouchableOpacity
				style={styles.timeInput}
				onPress={() => handleTimeChange(false, endHour)}
			>
				<Text style={styles.timeText}>
					{convertMinutesToTime(endHour) || 'End Time'}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.deleteTimeSlot}
				onPress={handleDeleteTimeSlot}
			>
				<Text> X </Text>
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
		marginLeft: theme.spacing.small,
	},
});

export default TimeSlot;
