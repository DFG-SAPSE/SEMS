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
import { sortAvailability } from '../../utils/checkOrderPicker';
import WarningIcon from '../../assets/svg/WarningIcon';
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
	const [error, setError] = useState('');

	useEffect(() => {
		setTempAvail(userData.availability);
	}, [userData.availability, setTempAvail]);

	// UPDATE TO CONTEXT
	const handleSave = async () => {
		// update to UserContext
		const sorting = sortAvailability(tempAvail);
		console.log(sorting[0]);
		if (sorting[0] === false) {
			setError('Invalid time slots');
			return;
		} else {
			updateAvailability(sorting);
			updateMeetingConfig(
				tempMeetingConfig.startTimeIncrement,
				tempMeetingConfig.breakTimeLength,
			);
			updatePricing(tempMeetingConfig.price);
			updateMeetingLength(tempMeetingConfig.meetingLength);
			updateExceptions(tempExceptions);
			updateMeetingLink(tempMeetingLink);
		}

		// call to firebase
		const userDataToDatabase = { ...userData };
		userDataToDatabase.availability = JSON.stringify(
			userDataToDatabase.availability,
		);
		const res = await updateUserData(userDataToDatabase);
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
					<Text style={styles.title}>Meeting settings</Text>
				</View>

				<View>
					<Text style={styles.bigHeader}>Event details</Text>
				</View>

				<View style={{ marginBottom: theme.spacing.large }}>
					<View style={{ marginBottom: theme.spacing.large }}>
						<Text style={styles.header}>
							Permanent meeting link
						</Text>
						<View>
							<TextInput
								style={styles.meetingLinkInput}
								onChangeText={(meetingLink) => {
									setMeetingLink(meetingLink);
								}}
								value={tempMeetingLink}
							/>
						</View>
					</View>

					<PricingConfig
						meetingPrice={tempMeetingConfig.price}
						setMeetingPrice={(newPrice) => {
							setTempMeetingConfig((prev) => ({
								...prev,
								price: Number(newPrice),
							}));
						}}
					/>

					<View>
						<Text style={styles.header}>Exceptions</Text>
						<View>
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
				</View>

				<View>
					<Text style={styles.bigHeader}>Scheduling settings</Text>
				</View>

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

				<View style={styles.exceptionsFullContainer}>
					<View style={styles.exceptionTextContainer}>
						<WarningIcon width={30} height={30} color="red" />
						<Text
							style={{
								...theme.typography.largeBold,
								marginLeft: theme.spacing.small,
							}}
						>
							Exceptions
						</Text>
					</View>
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
				{error && (
					<View style={styles.errorMessageContainer}>
						<Text style={styles.errorMessageText}>{error}</Text>
					</View>
				)}
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
		marginBottom: theme.spacing.large,
	},
	title: {
		...theme.typography.titleBold,
		marginTop: theme.spacing.xlarge,
		marginBottom: theme.spacing.large,
	},
	bigHeader: {
		...theme.typography.extraLargeBold,
	},
	header: {
		...theme.typography.mediumBody,
		opacity: 0.6,
		marginBottom: theme.spacing.small,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: theme.spacing.xxlarge,
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
	meetingLinkInput: {
		marginVertical: theme.spacing.small,
	},
	exceptionInput: {
		fontSize: theme.typography.smallBody.fontSize,
	},
	errorMessageContainer: {
		backgroundColor: '#FFCCCC',
		padding: theme.spacing.large,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 4,
		padding: theme.spacing.mediumSmall,
		...theme.typography.mediumBody,
	},
	errorMessageText: {
		...theme.typography.largeBold,
		color: '#FF0000',
		textAlign: 'center',
	},
	exceptionTextContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'left',
		alignItems: 'center',
	},
	exceptionsFullContainer: {
		marginTop: theme.spacing.medium,
		padding: theme.spacing.medium,
		borderColor: theme.colors.black,
		borderWidth: 2,
		borderRadius: theme.spacing.large,
		backgroundColor: '#ffe066',
		minHeight: 80,
	},
});

export default EditAvailability;
