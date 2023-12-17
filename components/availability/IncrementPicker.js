import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { theme } from '../../styles/theme';

const IncrementPicker = ({ onConfirm, onCancel, defaultInc }) => {
	const incrementOptions = [15, 30, 45, 60, 90];
	const [inc, setInc] = useState(defaultInc);

	return (
		<View style={styles.pickerContainer}>
			<Picker
				style={styles.picker}
				selectedValue={inc}
				onValueChange={(itemValue) => setInc(Number(itemValue))}
			>
				{incrementOptions.map((option) => (
					<Picker.Item key={option} label={option} value={option} />
				))}
			</Picker>
			<View style={styles.buttonContainer}>
				<Button title="Cancel" onPress={onCancel} />
				<Button title="Confirm" onPress={() => onConfirm(inc)} />
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

export default IncrementPicker;
