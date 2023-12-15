import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import TimeSlot from './TimeSlot';
import { UserContext } from '../../context/UserContext';

const DaySchedule = ({ dayIndex, openTimePickerModal }) => {
	const { userData, updateAvailability } = useContext(UserContext);
	const todayTimeSlots = userData.availability[dayIndex];

	const addTimeSlot = () => {
		const newTimeSlots = [
			...todayTimeSlots,
			[0, 0], // Add default time slot
		];
		updateAvailability(dayIndex, newTimeSlots);
	};

	const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	return (
		<View style={styles.dayContainer}>
			<Text style={styles.dayText}>{daysOfWeek[dayIndex]}</Text>
			<View style={styles.timeSlotsContainer}>
				<View>
					{todayTimeSlots.map((slot, index) => (
						<TimeSlot
							key={index}
							dayIndex={dayIndex}
							timeSlot={slot}
							timeSlotIndex={index}
							openTimePickerModal={openTimePickerModal}
						/>
					))}
				</View>

				<TouchableOpacity
					style={styles.addButton}
					onPress={addTimeSlot}
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
		...theme.typography.large,
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
