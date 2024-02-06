import React, { useContext, useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { Stack, router } from 'expo-router';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	TextInput,
} from 'react-native';

import { theme } from '../../styles/theme';

import { UserContext } from '../../context/UserContext';
import DaySchedule from '../../components/availability/DaySchedule';
import TimePicker from '../../components/availability/TimePicker';
import CustomModal from '../../components/common/CustomModal';
import Button from '../../components/common/Button';
import MeetingConfig from '../../components/availability/MeetingConfig';
import CustomPicker from '../../components/availability/CustomPicker';
import PricingConfig from '../../components/availability/PricingConfig';
import { updateUserData } from '../../services/user';

const BREAK_TIME = 'BREAK_TIME';
const START_TIME_INCREMENT = 'START_TIME_INCREMENT';
const MEETING_LENGTH = 'MEETING_LENGTH';

const EditAvailability = () => {
	const {
		userData,
		updateAvailability,
		updateMeetingConfig,
		updateMeetingLength,
		updatePricing,
		updateExceptions,
		updateMeetingLink,
	} = useContext(UserContext);

	const [tempAvail, setTempAvail] = useImmer(userData.availability);
	const [tempMeetingConfig, setTempMeetingConfig] = useState({
		startTimeIncrement: userData.meetingConfig.startTimeIncrement,
		breakTimeLength: userData.meetingConfig.breakTimeLength,
		meetingLength: userData.services[0].meetingLength,
		price: userData.services[0].price,
	});
	const [tempExceptions, setTempExceptions] = useState(userData.exceptions);
	const [tempMeetingLink, setMeetingLink] = useState(userData.meetingLink);

	const [timerPickerVisibility, setTimePickerVisibility] = useState(false);
	const [timePickerState, setTimePickerState] = useState({
		dayIndex: 0,
		timeSlotIndex: 0,
		isStart: true,
		selectedTime: 0,
	});

	const [isMeetingConfigPickerOpen, setIsMeetingConfigPickerOpen] =
		useState(false);
	const [meetingConfigType, setMeetingConfigType] = useState(null);

	useEffect(() => {
		setTempAvail(userData.availability);
	}, [userData.availability, setTempAvail]);

	// UPDATE TO CONTEXT
	const handleSave = async () => {
		// update to UserContext
		updateAvailability(tempAvail);
		updateMeetingConfig(
			tempMeetingConfig.startTimeIncrement,
			tempMeetingConfig.breakTimeLength,
		);
		updatePricing(tempMeetingConfig.price);
		updateMeetingLength(tempMeetingConfig.meetingLength);
		updateExceptions(tempExceptions);
		updateMeetingLink(tempMeetingLink);

		// call to firebase
		const res = await updateUserData(userData);
		if (res.ok) {
			router.back();
		} else {
			// TODO: Develop UI for errors
			console.error(res.error);
		}
	};

	const handleCancel = () => {
		router.replace('/home');
	};

	// WEEKLY AVAILABILITY STATE MANAGEMENT
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

				<View style={{ marginTop: theme.spacing.large }}>
					<Text style={{ ...theme.typography.largeBold }}>
						Permanent meeting link
					</Text>
					<View style={styles.exceptionsContainer}>
						<TextInput
							style={styles.exceptionInput}
							onChangeText={(meetingLink) => {
								setMeetingLink(meetingLink);
							}}
							value={tempExceptions}
							multiline={true}
						/>
					</View>
				</View>

				<Text
					style={{
						...theme.typography.largeBold,
						marginBottom: theme.spacing.large,
					}}
				>
					Meeting configuration
				</Text>

				<MeetingConfig
					currentlySelected={tempMeetingConfig.startTimeIncrement}
					openPicker={() => {
						setMeetingConfigType(START_TIME_INCREMENT);
						setIsMeetingConfigPickerOpen(true);
					}}
				>
					Start time increments
				</MeetingConfig>

				<MeetingConfig
					currentlySelected={tempMeetingConfig.breakTimeLength}
					openPicker={() => {
						setMeetingConfigType(BREAK_TIME);
						setIsMeetingConfigPickerOpen(true);
					}}
				>
					Break between meetings
				</MeetingConfig>

				<MeetingConfig
					currentlySelected={tempMeetingConfig.breakTimeLength}
					openPicker={() => {
						setMeetingConfigType(MEETING_LENGTH);
						setIsMeetingConfigPickerOpen(true);
					}}
				>
					Meeting length
				</MeetingConfig>

				<PricingConfig
					meetingPrice={tempMeetingConfig.price}
					setMeetingPrice={(newPrice) => {
						setTempMeetingConfig((prev) => ({
							...prev,
							price: Number(newPrice),
						}));
					}}
				/>

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

				<View style={{ marginTop: theme.spacing.large }}>
					<Text style={{ ...theme.typography.largeBold }}>
						Exceptions
					</Text>
					<View style={styles.exceptionsContainer}>
						<TextInput
							style={styles.exceptionInput}
							onChangeText={(newExceptionText) => {
								setTempExceptions(newExceptionText);
							}}
							value={tempExceptions}
							multiline={true}
						/>
					</View>
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
					isVisible={isMeetingConfigPickerOpen}
					onDismiss={() => setIsMeetingConfigPickerOpen(false)}
				>
					<CustomPicker
						cancel={() => setIsMeetingConfigPickerOpen(false)}
						updateSelect={(newVal) => {
							setTempMeetingConfig((prev) => {
								const newMeetingConfig = { ...prev };
								switch (meetingConfigType) {
									case BREAK_TIME:
										newMeetingConfig.breakTimeLength =
											newVal;
										break;
									case START_TIME_INCREMENT:
										newMeetingConfig.startTimeIncrement =
											newVal;
										break;
									case MEETING_LENGTH:
										newMeetingConfig.meetingLength = newVal;
								}
								return newMeetingConfig;
							});
							setIsMeetingConfigPickerOpen(false);
						}}
						currentlySelected={
							meetingConfigType === BREAK_TIME
								? tempMeetingConfig.breakTimeLength
								: meetingConfigType === MEETING_LENGTH
									? tempMeetingConfig.meetingLength
									: tempMeetingConfig.startTimeIncrement
						}
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
	exceptionsContainer: {
		marginVertical: theme.spacing.large,
	},
	exceptionInput: {
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 4,
		padding: theme.spacing.mediumSmall,
		...theme.typography.mediumBody,
	},
});

export default EditAvailability;
