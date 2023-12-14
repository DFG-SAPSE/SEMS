import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import Button from '../../common/Button';
import { useFonts } from 'expo-font';
import { fonts } from '../../../styles/fonts';
import { useSpecialities } from '../../../context/FilterConsultantsContext';

const ExperienceModalContent = ({ closeModal }) => {
	const { experience, setExperience } = useSpecialities();
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return undefined;
	}

	return (
		<View style={styles.modalContent}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Experience</Text>
			</View>
			<View style={styles.divider} />
			<ScrollView style={styles.scrollView}>
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
			</ScrollView>
			<Button title="Done" onPress={closeModal} />
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	modalContent: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '60%',
		backgroundColor: 'white',
		padding: theme.spacing.xxlarge,
		borderRadius: theme.spacing.xlarge,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerText: {
		color: '#000',
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.large.fontSize,
	},
	divider: {
		backgroundColor: theme.colors.gray.border,
		marginTop: theme.spacing.medium,
		height: 1,
	},
	scrollView: {
		flex: 1,
	},
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
