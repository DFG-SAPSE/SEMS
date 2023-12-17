import React, { useContext, useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { Stack, router } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { theme } from '../styles/theme';

import { UserContext } from '../context/UserContext';
import DaySchedule from '../components/availability/DaySchedule';
import TimePicker from '../components/availability/TimePicker';
import CustomModal from '../components/common/CustomModal';
import Button from '../components/common/Button';
import TimeIncrementInput from '../components/availability/TimeIncrementInput';
import IncrementPicker from '../components/availability/IncrementPicker';

const EditAvailability = () => {
	const { userData, updateAvailability, updateTimeIncrement } =
		useContext(UserContext);

	const [tempAvail, setTempAvail] = useImmer(userData.availability);
	const [tempTimeIncrement, setTempTimeIncrement] = useState(
		userData.startTimeIncrement,
	);

	const [timerPickerVisibility, setTimePickerVisibility] = useState(false);
	const [timePickerState, setTimePickerState] = useState({
		dayIndex: 0,
		timeSlotIndex: 0,
		isStart: true,
		selectedTime: 0,
	});

	const [isIncrementPickerOpen, setIsIncrementPickerOpen] = useState(false);

	useEffect(() => {
		setTempAvail(userData.availability);
	}, [userData.availability, setTempAvail]);

	const handleSave = () => {
		updateAvailability(tempAvail);
		updateTimeIncrement(tempTimeIncrement);
		router.back();
	};

	const handleCancel = () => {
		router.back();
	};

	const addTimeSlot = (dayIndex) => {
		setTempAvail((prevTempAvail) => {
			prevTempAvail[dayIndex].push([0, 0]);
		});
	};

	const updateTimeSlot = () => {
		setTempAvail((prevTempAvail) => {
			const { dayIndex, timeSlotIndex, isStart, selectedTime } =
				timePickerState;
			const startOrEndIdx = isStart ? 0 : 1;
			prevTempAvail[dayIndex][timeSlotIndex][startOrEndIdx] =
				selectedTime;
		});

		setTimePickerVisibility(false);
	};

	const deleteTimeSlot = (dayIndex, timeSlotIndex) => {
		setTempAvail((prevTempAvail) => {
			prevTempAvail[dayIndex].splice(timeSlotIndex, 1);
		});
	};

	const openTimePickerModal = (
		dayIndex,
		timeSlotIndex,
		isStart,
		currentSelectedTime,
	) => {
		setTimePickerState({
			dayIndex,
			timeSlotIndex,
			isStart,
			selectedTime: currentSelectedTime,
		});
		setTimePickerVisibility(true);
	};

	const setSelectedTime = (newTime) => {
		setTimePickerState((prev) => ({ ...prev, selectedTime: newTime }));
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<ScrollView style={styles.container}>
				<Stack.Screen options={{ headerShown: false }} />

				<View style={styles.titleWrapper}>
					<Text style={styles.title}>Scheduling settings</Text>
				</View>

				<View style={styles.timeIncrementContainer}>
					<View>
						<Text
							style={{
								...theme.typography.mediumHeader,
							}}
						>
							Start time increments
						</Text>
					</View>
					<TimeIncrementInput
						timeIncrement={tempTimeIncrement}
						openTimeIncrementModal={() => {
							setIsIncrementPickerOpen(true);
						}}
					/>
				</View>

				<View style={styles.availabilityContainer}>
					<Text style={{ ...theme.typography.largeBold }}>Hours</Text>
					{tempAvail.map((todayTimeSlots, dayIndex) => {
						return (
							<DaySchedule
								key={dayIndex}
								dayIndex={dayIndex}
								todayTimeSlots={todayTimeSlots}
								openTimePickerModal={openTimePickerModal}
								addTimeSlot={addTimeSlot}
								deleteTimeSlot={deleteTimeSlot}
							/>
						);
					})}
				</View>

				<View style={styles.buttonContainer}>
					<Button
						title={'Cancel'}
						customBtnStyle={[styles.button, styles.cancelButton]}
						customTextStyle={styles.cancelButtonText}
						onPress={handleCancel}
					/>
					<Button
						title={'Save'}
						customBtnStyle={styles.button}
						onPress={handleSave}
					/>
				</View>

				<CustomModal
					isVisible={timerPickerVisibility}
					onDismiss={() => setTimePickerVisibility(false)}
				>
					<TimePicker
						onCancel={() => setTimePickerVisibility(false)}
						onConfirm={updateTimeSlot}
						selectedTime={timePickerState.selectedTime}
						setSelectedTime={setSelectedTime}
					/>
				</CustomModal>

				<CustomModal
					isVisible={isIncrementPickerOpen}
					onDismiss={() => setIsIncrementPickerOpen(false)}
				>
					<IncrementPicker
						onCancel={() => setIsIncrementPickerOpen(false)}
						onConfirm={(inc) => {
							setTempTimeIncrement(inc);
							setIsIncrementPickerOpen(false);
						}}
						defaultInc={tempTimeIncrement}
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
	title: {
		...theme.typography.extraLargeBold,
		marginTop: theme.spacing.xlarge,
		marginBottom: theme.spacing.xxlarge,
	},
	timeIncrementContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: theme.spacing.xlarge,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: '46%',
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.primary.light,
		borderWidth: 1.5,
		borderRadius: 24,
		marginTop: theme.spacing.medium,
	},
	cancelButton: {
		backgroundColor: theme.colors.white,
	},
	cancelButtonText: {
		...theme.typography.mediumBodyBold,
		color: theme.colors.primary.light,
	},
});

export default EditAvailability;
