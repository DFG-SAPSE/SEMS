import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { theme } from '../../../styles/theme';
import { convertMinutesToTime } from '../../../utils/dateAndTime';

const TimeSlot = ({ index, time, handleTimePress }) => {
	return (
		<Pressable
			key={index}
			style={styles.timeSlot}
			onPress={() => handleTimePress(time)}
		>
			<Text style={styles.timeSlotText}>
				{convertMinutesToTime(time)}
			</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	timeSlot: {
		padding: theme.spacing.small,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 8,
		width: '30%',
		marginBottom: theme.spacing.medium,
		marginRight: theme.spacing.small,
	},
	timeSlotText: {
		textAlign: 'center',
	},
});

export default TimeSlot;
