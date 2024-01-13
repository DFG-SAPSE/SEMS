import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { theme } from '../../styles/theme';

const CustomPicker = ({ updateSelect, cancel, currentlySelected }) => {
	const incrementOptions = [15, 30, 45, 60, 90];
	const [newVal, setNewVal] = useState(currentlySelected);

	return (
		<View style={styles.pickerContainer}>
			<Picker
				style={styles.picker}
				selectedValue={newVal}
				onValueChange={(itemValue) => setNewVal(Number(itemValue))}
			>
				{incrementOptions.map((option) => (
					<Picker.Item key={option} label={option} value={option} />
				))}
			</Picker>
			<View style={styles.buttonContainer}>
				<Button title="Cancel" onPress={cancel} />
				<Button title="Confirm" onPress={() => updateSelect(newVal)} />
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

export default CustomPicker;
