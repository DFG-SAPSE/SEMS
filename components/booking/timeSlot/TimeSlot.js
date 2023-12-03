import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TimeSlot = ({ index, time, handleTimePress }) => {
	return (
		<TouchableOpacity
			key={index}
			style={styles.timeSlot}
			onPress={() => handleTimePress(time)}
		>
			<Text style={styles.timeSlotText}>{time}</Text>
		</TouchableOpacity>
	);
};

import { theme } from "../../../styles/theme";

const styles = StyleSheet.create({
	timeSlot: {
		padding: theme.spacing.small,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 8,
		width: "30%",
		marginBottom: theme.spacing.medium,
		marginRight: theme.spacing.small,
	},
	timeSlotText: {
		textAlign: "center",
	},
});

export default TimeSlot;
