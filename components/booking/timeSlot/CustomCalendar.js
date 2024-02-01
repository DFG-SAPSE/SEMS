import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { theme } from '../../../styles/theme';
// import { getAvailableStartTimes } from '../../../services/scheduling';

const CustomDayComponent = ({ date, state, selectedDate, onDayPress }) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const currentDate = new Date(date.year, date.month - 1, date.day);
	currentDate.setHours(12);

	// default styling
	let dayWrapperStyle = {};
	let dayTextStyle = {
		textAlign: 'center',
		padding: theme.spacing.small,
		paddingBottom: 4,
	};
	let markStyle = {
		height: 5,
		width: 5,
		borderRadius: 2.5,
		backgroundColor: 'transparent', // Default to transparent (no mark)
		alignSelf: 'center',
	};

	// Check if there are time slots available for the day
	// const times = getAvailableStartTimes(
	// 	new Date(dateData.timestamp),
	// 	JSON.parse(availability),
	// 	bookedMeetings,
	// 	startTimeIncrement,
	// 	breakTimeLength,
	// 	meetingLength,
	// );

	// Dummy code. Delete, and uncomment the above when getAvailableStartTimes have been implemented
	const times = [0];

	// If the date is in the past
	if (currentDate < today || times.length === 0) {
		dayTextStyle.color = 'grey';
		dayTextStyle.opacity = 0.5;
		markStyle.opacity = 0.5;
	}

	// If the date is today
	if (currentDate.toLocaleDateString() === today.toLocaleDateString()) {
		markStyle.backgroundColor = theme.colors.text.gray;
	}

	// If the date is selected
	if (selectedDate === currentDate.toISOString().slice(0, 10)) {
		dayWrapperStyle.backgroundColor = theme.colors.secondary.default;
		dayWrapperStyle.borderRadius = 4;

		dayTextStyle.color = theme.colors.white;
	}

	const onPress = () => {
		if (currentDate < today) {
			return;
		}

		onDayPress(date);
	};

	return (
		<Pressable onPress={onPress}>
			<View style={dayWrapperStyle}>
				<Text style={dayTextStyle}>{date.day}</Text>
				<View style={markStyle} />
			</View>
		</Pressable>
	);
};

const CustomCalendar = ({ onDayPress, selectedDate }) => {
	return (
		<View style={styles.chooseDateContainer}>
			<Text style={styles.chooseDateText}>Choose Date</Text>
			{/* <View> */}
			<Calendar
				style={styles.calendarContainer}
				theme={styles.calendarParts}
				hideExtraDays={true}
				firstDay={1}
				// eslint-disable-next-line react/no-unstable-nested-components
				dayComponent={({ date, state, marking }) => (
					<CustomDayComponent
						date={date}
						state={state}
						marking={marking}
						onDayPress={onDayPress}
						selectedDate={selectedDate}
					/>
				)}
			/>
			{/* </View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	chooseDateContainer: {
		padding: theme.spacing.medium,
	},
	chooseDateText: {
		...theme.typography.large,
		marginTop: theme.spacing.medium,
		marginBottom: theme.spacing.xxlarge,
	},
	calendarParts: {
		arrowColor: theme.colors.black,
		textMonthFontWeight: 'bold',
		textMonthFontSize: theme.typography.mediumHeader.fontSize,
		textDayHeaderFontWeight: 'bold',
		textDayHeaderFontSize: theme.typography.smallBody.fontSize,
		textDayFontWeight: '400',
		textDayFontSize: theme.typography.smallBody.fontSize,
	},
	calendarContainer: {
		margin: -theme.spacing.medium,
	},
});

export default CustomCalendar;
