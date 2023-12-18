import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CheckBox from '../../../assets/svg/CheckIcon';
import { useSpecialities } from '../../../context/FilterConsultantsContext';
import specialties from '../../../defaultdata/Specialties.json';
import ModalContent from './ModalContent';

const SpecialityModalContent = ({ closeModal }) => {
	const {
		selectedSpecialities,
		addSpeciality,
		removeSpeciality,
		clearSpecialities,
	} = useSpecialities();

	const isSpecialitySelected = (speciality) =>
		selectedSpecialities.includes(speciality);

	const toggleSpeciality = (speciality) => {
		if (isSpecialitySelected(speciality)) {
			removeSpeciality(speciality);
		} else {
			addSpeciality(speciality);
		}
	};

	const scrollViewContent = specialties.map((specialty, index) => (
		<View key={index} style={styles.specialtyContainer}>
			<Text
				onPress={() => toggleSpeciality(specialty)}
				style={[
					styles.specialtyText,
					isSpecialitySelected(specialty) &&
						styles.selectedSpecialtyText,
				]}
			>
				{specialty}
			</Text>
			{isSpecialitySelected(specialty) && (
				<CheckBox
					width={35}
					height={35}
					color={theme.colors.text.dark}
					isChecked={true}
				/>
			)}
		</View>
	));

	return (
		<ModalContent
			closeModal={closeModal}
			headerFilter={'Specialty'}
			headerAction={clearSpecialities}
			scrollViewContent={scrollViewContent}
		/>
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
