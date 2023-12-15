import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { theme } from '../../styles/theme';
import {
	convertMinutesToTime,
	generate15MinuteIntervals,
} from '../../utils/dateAndTime';

const TimePicker = ({ onConfirm, onCancel, selectedTime, setSelectedTime }) => {
	const timeOptions = generate15MinuteIntervals();

	return (
		<View style={styles.pickerContainer}>
			<Picker
				style={styles.picker}
				selectedValue={selectedTime}
				onValueChange={(itemValue) => setSelectedTime(itemValue)}
			>
				{timeOptions.map((option) => (
					<Picker.Item
						key={option}
						label={convertMinutesToTime(option)}
						value={option}
					/>
				))}
			</Picker>
			<View style={styles.buttonContainer}>
				<Button title="Cancel" onPress={onCancel} />
				<Button title="Confirm" onPress={onConfirm} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	pickerContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: theme.colors.white,
	},
	picker: {
		width: '100%',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingBottom: 20,
	},
});

export default TimePicker;
