import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Slider from '@react-native-community/slider';
import { useSpecialities } from '../../../context/FilterConsultantsContext';
import ModalContent from './ModalContent';

const ExperienceModalContent = ({ closeModal }) => {
	const { experience, setExperience } = useSpecialities();

	const scrollViewContent = (
		<View style={styles.sliderContainer}>
			<Text style={styles.sliderLabel}>
				{experience} or more Years of Experience
			</Text>
			<Slider
				style={styles.slider}
				minimumValue={0}
				maximumValue={20}
				step={1}
				value={experience}
				onValueChange={(value) => setExperience(value)}
			/>
		</View>
	);

	return (
		<ModalContent
			closeModal={closeModal}
			headerAction={() => setExperience(0)}
			headerFilter={'Experience'}
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

export default ExperienceModalContent;
