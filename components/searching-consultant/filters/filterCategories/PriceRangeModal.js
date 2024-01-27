import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Slider from '@react-native-community/slider';

import { useConsultantFiltersContext } from '../../../../context/ConsultantFilterContext';
import FilterCommonContent from '../FilterCommonContent';
import tabs from '../../../../locales/en/Tabs.json';

const PriceRangeModal = ({ closeModal }) => {
	const { price, setPrice } = useConsultantFiltersContext();
	const handleSliderValueChange = (value) => {
		setPrice(value);
	};

	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxToggle = () => {
		setIsChecked(!isChecked);
	};

	const scrollViewContent = (
		<View style={styles.sliderContainer}>
			<Text style={styles.sliderLabel}>
				{tabs.PriceRange.text}
				{price}
			</Text>
			<Slider
				style={styles.slider}
				minimumValue={0}
				maximumValue={3000}
				step={1}
				value={price}
				onValueChange={handleSliderValueChange}
				onSlidingComplete={handleSliderValueChange}
			/>
			<Text style={styles.sliderLabel}>Pro Bono</Text>
			<TouchableWithoutFeedback onPress={handleCheckboxToggle}>
				<View style={styles.checkboxContainer}>
					<View
						style={[
							styles.checkbox,
							isChecked && styles.checkedCheckbox,
						]}
					/>
					<Text style={styles.sliderLabel}>Pro Bono Consultants</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);

	return (
		<FilterCommonContent
			closeModal={closeModal}
			headerAction={() => setPrice(0)}
			headerFilter={tabs.PriceRange.label}
			scrollViewContent={scrollViewContent}
		/>
	);
};

import { theme } from '../../../../styles/theme';

const styles = StyleSheet.create({
	sliderContainer: {
		marginTop: theme.spacing.medium,
	},
	sliderLabel: {
		fontSize: theme.spacing.medium,
		fontFamily: 'Roboto-Medium',
	},
	slider: {
		marginVertical: theme.spacing.medium,
		width: '100%',
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
	},
	checkbox: {
		width: 20,
		height: 20,
		borderWidth: 1,
		borderColor: 'black',
		marginRight: 8,
	},
	checkedCheckbox: {
		backgroundColor: theme.colors.black,
		borderColor: 'gray',
	},
});

export default PriceRangeModal;
