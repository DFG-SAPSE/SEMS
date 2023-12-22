import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { useConsultantFilters } from '../../../../context/ConsultantFilterContext';
import ModalContent from '../ModalContent';
import tabs from '../../../../locales/en/Tabs.json';

const ExperienceModalContent = ({ closeModal }) => {
	const { experience, setExperience } = useConsultantFilters();

	// Use onSlidingComplete to trigger the update after the user has finished sliding
	const handleSliderValueChange = (value) => {
		setExperience(value);
	};

	const scrollViewContent = (
		<View style={styles.sliderContainer}>
			<Text style={styles.sliderLabel}>
				{experience} {tabs.Experience.text}
			</Text>
			<Slider
				style={styles.slider}
				minimumValue={0}
				maximumValue={20}
				step={1}
				value={experience}
				onValueChange={handleSliderValueChange}
				onSlidingComplete={handleSliderValueChange}
			/>
		</View>
	);

	return (
		<ModalContent
			closeModal={closeModal}
			headerAction={() => setExperience(0)}
			headerFilter={tabs.Experience.label}
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

export default ExperienceModalContent;
