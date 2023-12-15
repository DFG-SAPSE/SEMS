import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Button from '../../common/Button';
import { useFonts } from 'expo-font';
import { fonts } from '../../../styles/fonts';
import CheckBox from '../../../assets/svg/CheckIcon';
import { useSpecialities } from '../../../context/FilterConsultantsContext';
import ModalHeader from './ModalContentComponents/ModalHeader';
const specialties = [
	{ name: 'Community Organizing' },
	{ name: 'Operations' },
	{ name: 'Marketing' },
	{ name: 'Finance' },
	{ name: 'Human Resources' },
	{ name: 'Product Design' },
	{ name: 'Start-up' },
];

const SpecialityModalContent = ({ closeModal }) => {
	const {
		selectedSpecialities,
		addSpeciality,
		removeSpeciality,
		clearSpecialities,
	} = useSpecialities();
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return undefined;
	}

	const clearAll = () => {
		clearSpecialities();
	};

	const isSpecialitySelected = (speciality) =>
		selectedSpecialities.includes(speciality);

	const toggleSpeciality = (speciality) => {
		if (isSpecialitySelected(speciality)) {
			removeSpeciality(speciality);
		} else {
			addSpeciality(speciality);
		}
	};

	return (
		<View style={styles.modalContent}>
			<ModalHeader onPress={clearAll} filter={'Specialty'} />
			<View style={styles.divider} />
			<ScrollView style={styles.scrollView}>
				{specialties.map((specialty, index) => (
					<View key={index} style={styles.specialtyContainer}>
						<Text
							onPress={() => toggleSpeciality(specialty.name)}
							style={[
								styles.specialtyText,
								isSpecialitySelected(specialty.name) &&
									styles.selectedSpecialtyText,
							]}
						>
							{specialty.name}
						</Text>
						{isSpecialitySelected(specialty.name) && (
							<CheckBox
								width={35}
								height={35}
								color={theme.colors.text.dark}
								isChecked={true}
							/>
						)}
					</View>
				))}
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
		borderTopEndRadius: theme.spacing.xlarge,
		borderStartStartRadius: theme.spacing.xlarge,
	},
	divider: {
		backgroundColor: theme.colors.gray.border,
		marginTop: theme.spacing.medium,
		height: 1,
	},
	specialtyContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	specialtyText: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		flexGrow: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: theme.typography.mediumBody.fontSize,
		paddingVertical: theme.spacing.medium,
	},
	selectedSpecialtyText: {
		color: theme.colors.secondary.dark,
	},
	scrollView: {
		flex: 1,
	},
});

export default SpecialityModalContent;
