import React, { useContext, useState } from 'react';
import { router, Stack } from 'expo-router';
import { StyleSheet, ScrollView } from 'react-native';

import { BookingContext } from '../../context/BookingContext';
import CustomCalendar from '../../components/booking/timeSlot/CustomCalendar';
import AvailableTimes from '../../components/booking/timeSlot/AvailableTimes';
import { getAvailableStartTimes } from '../../services/scheduling';
import { convertTo24HourFormat } from '../../utils/dateAndTime';

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

	const onDayPress = async (day) => {
		setIsLoading(true);
		const {
			availability,
			bookedMeetings,
			meetingConfig: { startTimeIncrement, breakTimeLength },
			meetingLength,
		} = consultantData;

		const times = await getAvailableStartTimes(
			day.dateString,
			availability,
			bookedMeetings,
			startTimeIncrement,
			breakTimeLength,
			meetingLength,
		);

		chooseDate(day.dateString);
		setAvailableTimes(times);
		setIsLoading(false);
	};

	const handleTimePress = async (time) => {
		// Conver time to 24-hour format, combine the date and time
		// and parse into Date
		const startDateString = `${bookingData.date} ${convertTo24HourFormat(
			time,
		)}`;
		const startTime = new Date(startDateString);

		// Dummy: Clone the Date object and add 45 minutes for the end time
		// This will be changed when we give consultants the ability
		// to customize their meeting length
		const endTime = new Date(startTime);
		endTime.setMinutes(startTime.getMinutes() + 45);

		// Convert start and end times to timestamps
		const startTimeStamp = startTime.getTime();
		const endTimeStamp = endTime.getTime();

		await chooseTimeSlot(startTimeStamp, endTimeStamp);

		router.push('/BookingQuestions');
	};

	return (
		<ScrollView style={styles.container}>
			<Stack.Screen
				options={{
					title: `Booking with ${consultantData.name}`,
				}}
			/>

			<Exceptions />

			<CustomCalendar onDayPress={onDayPress} markedDates={markedDates} />

			<AvailableTimes
				availableTimes={availableTimes}
				handleTimePress={handleTimePress}
				isLoading={isLoading}
			/>
		</ScrollView>
	);
};

import { theme } from '../../styles/theme';
import Exceptions from '../../components/booking/common/Exceptions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background.white,
	},
});

export default BookTimeSlot;
