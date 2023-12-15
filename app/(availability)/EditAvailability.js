import React, { useContext, useState } from 'react';
import { Stack } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { theme } from '../../styles/theme';

import { UserContext } from '../../context/UserContext';
import DaySchedule from '../../components/availability/DaySchedule';
import TimePicker from '../../components/availability/TimePicker';
import CustomModal from '../../components/common/CustomModal';
import Button from '../../components/common/Button';

const EditAvailability = () => {
	const { userData, updateAvailability } = useContext(UserContext);

	const [timerPickerVisibility, setTimePickerVisibility] = useState(false);
	const [dayOfWeek, setDayOfWeek] = useState(0);
	const [timeSlotIndex, setTimeSlotIndex] = useState(0);
	const [isStartTime, setIsStartTime] = useState(true);
	const [selectedTime, setSelectedTime] = useState(0);

	const handleTimeChange = () => {
		const newTimeSlots = [...userData.availability[dayOfWeek]];

		if (isStartTime) newTimeSlots[timeSlotIndex][0] = selectedTime;
		else newTimeSlots[timeSlotIndex][1] = selectedTime;

		updateAvailability(dayOfWeek, newTimeSlots);
		setTimePickerVisibility(false);
	};

	const openTimePickerModal = (dayIndex, timeSlotIdx, isStart, time) => {
		setDayOfWeek(dayIndex);
		setTimeSlotIndex(timeSlotIdx);
		setIsStartTime(isStart);
		setSelectedTime(time);
		setTimePickerVisibility(true);
	};

	const dayIndices = [0, 1, 2, 3, 4, 5, 6];

	return (
		<SafeAreaView style={styles.wrapper}>
			<ScrollView style={styles.container}>
				<Stack.Screen options={{ headerShown: false }} />

				<View style={styles.titleWrapper}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Your availability</Text>
					</View>

					<View style={styles.titleContainer}>
						<Button
							title={'Save'}
							customBtnStyle={styles.saveButton}
						/>
					</View>
				</View>

				<View style={styles.availabilityContainer}>
					<Text style={{ ...theme.typography.largeBold }}>Hours</Text>
					{dayIndices.map((index) => {
						return (
							<DaySchedule
								key={index}
								dayIndex={index}
								openTimePickerModal={openTimePickerModal}
							/>
						);
					})}
				</View>

				<CustomModal
					isVisible={timerPickerVisibility}
					onDismiss={() => setTimePickerVisibility(false)}
				>
					<TimePicker
						onCancel={() => setTimePickerVisibility(false)}
						onConfirm={handleTimeChange}
						selectedTime={selectedTime}
						setSelectedTime={setSelectedTime}
					/>
				</CustomModal>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	container: {
		flex: 1,
		padding: theme.spacing.large,
	},
	titleWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	titleContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		...theme.typography.extraLargeBold,
		marginVertical: theme.spacing.xlarge,
	},
	saveButton: {
		paddingVertical: theme.spacing.small,
		paddingHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
});

export default EditAvailability;
