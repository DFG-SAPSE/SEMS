import React, { useContext, useState } from 'react';
import { router, Stack } from 'expo-router';
import { StyleSheet, ScrollView } from 'react-native';

import { BookingContext } from '../../context/BookingContext';
import CustomCalendar from '../../components/booking/timeSlot/CustomCalendar';
import AvailableTimes from '../../components/booking/timeSlot/AvailableTimes';
import { getAvailableStartTimes } from '../../services/scheduling';
import { convertTo24HourFormat } from '../../utils/dateAndTime';
import { theme } from '../../styles/theme';
import Exceptions from '../../components/booking/common/Exceptions';

const BookTimeSlot = () => {
	const [availableTimes, setAvailableTimes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { bookingData, chooseDate, chooseTimeSlot, consultantData } =
		useContext(BookingContext);

	const markedDates = {
		[bookingData.date]: {
			selected: true,
			disableTouchEvent: true,
		},
	};

	/**
	 *
	 * @param dateData: DateData from react-native-calendars
	 */
	const onDayPress = async (dateData) => {
		setIsLoading(true);
		const {
			availability,
			bookedMeetings,
			// meetingConfig: { startTimeIncrement, breakTimeLength },
			services,
		} = consultantData;

		const meetingLength = services[0].meetingLength;
		const startTimeIncrement = 15; // dummy data, waiting for Iyi to update database, this cannot be 0
		const breakTimeLength = 15; // dummy data, waiting for Iyi to update database

		const times = getAvailableStartTimes(
			new Date(dateData.timestamp),
			JSON.parse(availability),
			bookedMeetings,
			startTimeIncrement,
			breakTimeLength,
			meetingLength,
		);

		chooseDate(new Date(dateData.timestamp));
		setAvailableTimes(times);
		setIsLoading(false);
	};

	const handleTimePress = async (startTime) => {
		const { services } = consultantData;
		const meetingLength = services[0].meetingLength;
		const endTime = startTime + meetingLength;

		chooseTimeSlot(startTime, endTime);

		router.push('/BookingQuestions');
	};

	return (
		<ScrollView style={styles.container}>
			<Stack.Screen
				options={{
					title: `Booking with ${consultantData.name}`,
				}}
			/>

			{/* <Exceptions /> */}

			<CustomCalendar
				onDayPress={onDayPress}
				selectedDate={selectedDate}
			/>

			<AvailableTimes
				availableTimes={availableTimes}
				handleTimePress={handleTimePress}
				isLoading={isLoading}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
});

export default BookTimeSlot;
