import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import TimeSlot from './TimeSlot';

const DaySchedule = ({
	dayIndex,
	todayTimeSlots,
	addTimeSlot,
	deleteTimeSlot,
	openTimePickerModal,
}) => {
	const daysOfWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	return (
		<>
			<Text style={styles.dayText}>{daysOfWeek[dayIndex]}</Text>
			<View style={styles.dayContainer}>
				<View style={styles.timeSlotsContainer}>
					<View>
						{todayTimeSlots.map((timeSlot, timeSlotIndex) => (
							<TimeSlot
								key={timeSlotIndex}
								dayIndex={dayIndex}
								timeSlot={timeSlot}
								timeSlotIndex={timeSlotIndex}
								openTimePickerModal={openTimePickerModal}
								deleteTimeSlot={deleteTimeSlot}
							/>
						))}
					</View>
					<TouchableOpacity
						style={styles.addButton}
						onPress={() => addTimeSlot(dayIndex)}
					>
						<Text style={styles.addButtonText}>+</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	dayContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: theme.spacing.small,
	},
	dayText: {
		fontSize: theme.typography.large.fontSize,
		marginTop: theme.spacing.small,
	},
	timeSlotsContainer: {
		flexDirection: 'row',
	},
	addButton: {
		marginTop: theme.spacing.tiny,
		borderRadius: 5,
		borderWidth: 1,
		paddingHorizontal: theme.spacing.medium,
		paddingVertical: theme.spacing.tiny,
		backgroundColor: theme.colors.white,
		borderColor: theme.colors.primary.light,
		height: 38,
	},

	addButtonText: {
		fontSize: 20,
		backgroundColor: theme.colors.white,
		color: theme.colors.primary.light,
		paddingHorizontal: theme.spacing.tiny,
	},
});

export default DaySchedule;
