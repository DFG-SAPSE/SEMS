import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { useSpecialities } from '../../../context/FilterConsultantsContext';
import ModalContent from './ModalContent';

const PriceRangeModalContent = ({ closeModal }) => {
	const { price, setPrice } = useSpecialities();

	const scrollViewContent = (
		<View style={styles.sliderContainer}>
			<Text style={styles.sliderLabel}>$ {price}</Text>
			<Slider
				style={styles.slider}
				minimumValue={0}
				maximumValue={30}
				step={1}
				value={price}
				onValueChange={(value) => setPrice(value)}
			/>
		</View>
	);

	return (
		<ModalContent
			closeModal={closeModal}
			headerAction={() => setPrice(0)}
			headerFilter={'Price'}
			scrollViewContent={scrollViewContent}
		/>
	);
};

import { theme } from '../../../styles/theme';

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

export default PriceRangeModalContent;
