import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { useConsultantFiltersContext } from '../../../../context/ConsultantFilterContext';
import ModalContent from './FilterModalContainer';
import tabs from '../../../../locales/en/Tabs.json';

const PriceRangeModal = ({ closeModal }) => {
	const { price, setPrice } = useConsultantFiltersContext();

	const handleSliderValueChange = (value) => {
		setPrice(value);
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
		</View>
	);

	return (
		<ModalContent
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
});

export default PriceRangeModal;
