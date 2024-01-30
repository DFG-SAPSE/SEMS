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
	const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	return (
		<View style={styles.dayContainer}>
			<Text style={styles.dayText}>{daysOfWeek[dayIndex]}</Text>
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
	);
};

const styles = StyleSheet.create({
	dayContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: theme.spacing.small,
	},
	dayText: {
		...theme.typography.mediumHeader,
		marginTop: theme.spacing.small,
	},
	timeSlotsContainer: {
		flexDirection: 'row',
	},
	addButton: {
		paddingTop: theme.spacing.small,
		paddingLeft: theme.spacing.small,
	},
	addButtonText: {
		...theme.typography.large,
	},
});

export default DaySchedule;
