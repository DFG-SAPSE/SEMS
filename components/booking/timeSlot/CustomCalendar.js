import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const CustomCalendar = ({ onDayPress, markedDates }) => {
	return (
		<View style={styles.chooseDateContainer}>
			<Text style={styles.chooseDateText}>Choose date</Text>
			<Calendar
				current={Date()}
				onDayPress={onDayPress}
				markedDates={markedDates}
				style={styles.calendarContainer}
				theme={styles.calendarParts}
			/>
		</View>
	);
};

import { theme } from "../../../styles/theme";

const styles = StyleSheet.create({
	chooseDateContainer: {
		padding: theme.spacing.large,
	},
	chooseDateText: {
		...theme.typography.large,
		marginBottom: theme.spacing.large,
	},
	calendarParts: {
		selectedDayBackgroundColor: theme.colors.primary.default,
		selectedDayTextColor: theme.colors.text.light,
	},
	calendarContainer: {
		margin: -theme.spacing.medium,
	},
});

export default CustomCalendar;
