import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CheckBox from '../../../../assets/svg/CheckIcon';
import { useConsultantFiltersContext } from '../../../../context/ConsultantFilterContext';
import specialties from '../../../../defaultdata/Specialties.json';
import ModalContent from './FilterModalContainer';
import tabs from '../../../../locales/en/Tabs.json';

const SpecialtyModal = ({ closeModal }) => {
	const {
		selectedSpecialities,
		addSpecialty,
		removeSpecialty,
		clearSpecialities,
	} = useConsultantFiltersContext();

	const isSpecialtySelected = (Specialty) =>
		selectedSpecialities.includes(Specialty);

	const toggleSpecialty = (Specialty) => {
		if (isSpecialtySelected(Specialty)) {
			removeSpecialty(Specialty);
		} else {
			addSpecialty(Specialty);
		}
	};

	const scrollViewContent = specialties.map((specialty, index) => (
		<View key={index} style={styles.specialtyContainer}>
			<Text
				onPress={() => toggleSpecialty(specialty)}
				style={[
					styles.specialtyText,
					isSpecialtySelected(specialty) &&
					styles.selectedSpecialtyText,
				]}
			>
				{specialty}
			</Text>
			{isSpecialtySelected(specialty) && (
				<CheckBox
					width={theme.spacing.xlarge}
					height={theme.spacing.xlarge}
					color={theme.colors.text.dark}
					isChecked={true}
				/>
			)}
		</View>
	));

	return (
		<ModalContent
			closeModal={closeModal}
			headerFilter={tabs.Specialty.label}
			headerAction={clearSpecialities}
			scrollViewContent={scrollViewContent}
		/>
	);
};

import { theme } from '../../../../styles/theme';

const styles = StyleSheet.create({
	modalContent: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '60%',
		backgroundColor: theme.colors.white,
		padding: theme.spacing.xxlarge,
		borderTopEndRadius: theme.spacing.xlarge,
		borderStartStartRadius: theme.spacing.xlarge,
	},
	divider: {
		backgroundColor: theme.colors.border,
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

export default SpecialtyModal;
