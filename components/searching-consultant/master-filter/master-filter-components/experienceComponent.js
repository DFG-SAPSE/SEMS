import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

// ExperienceModal is a component for handling the experience range filter
const ExperienceModal = ({ experience, setExperience }) => {
	return (
		<View style={styles.sliderContainer}>
			{/* Display the selected experience value */}
			<Text style={styles.sliderLabel}>
				{experience} or more Years of Experience
			</Text>

			{/* Slider component for selecting the experience range */}
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
};

// Styles
import { theme } from '../../../../styles/theme';
const styles = StyleSheet.create({
	specialtyText: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		flexGrow: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: theme.typography.mediumBody.fontSize,
		paddingVertical: theme.spacing.medium,
	},
	sliderContainer: {
		marginTop: theme.spacing.medium,
	},
	sliderLabel: {
		fontSize: theme.typography.smallBody.fontSize,
		fontFamily: 'Roboto-Medium',
	},
	slider: {
		marginVertical: theme.spacing.medium,
		width: '100%',
	},
});

export default ExperienceModal;
