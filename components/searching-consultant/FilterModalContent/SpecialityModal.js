import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../common/Button';
import { useFonts } from 'expo-font';
import { fonts } from '../../../styles/fonts';
import CheckBox from '../../../assets/svg/CheckIcon';
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
	const [fontsLoaded] = useFonts(fonts);
	const [selectedSpecialties, setSelectedSpecialties] = useState([]);

	if (!fontsLoaded) {
		return undefined;
	}

	const handleSpecialtyPress = (specialty) => {
		const isSelected = selectedSpecialties.includes(specialty);
		if (isSelected) {
			setSelectedSpecialties((prevSelected) =>
				prevSelected.filter((item) => item !== specialty),
			);
		} else {
			setSelectedSpecialties((prevSelected) => [
				...prevSelected,
				specialty,
			]);
		}
	};
	return (
		<View style={styles.modalContent}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Specialty</Text>
			</View>
			<View style={styles.divider} />
			{specialties.map((specialty, index) => (
				<View key={index} style={styles.specialtyContainer}>
					<Text
						onPress={() => handleSpecialtyPress(specialty.name)}
						style={styles.specialtyText}
					>
						{specialty.name}
					</Text>
					{selectedSpecialties.includes(specialty.name) && (
						<CheckBox
							width={35}
							height={35}
							color={theme.colors.text.dark}
							isChecked={true}
						/>
					)}
				</View>
			))}
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
		height: '70%',
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
	headerImage: {
		width: '100%',
	},
	divider: {
		backgroundColor: theme.colors.gray.border,
		marginTop: theme.spacing.medium,
		height: 1,
	},
	specialtyContainer: {
		marginVertical: theme.spacing.medium,
		display: 'flex',
	},
	specialtyText: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		flexGrow: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: theme.typography.mediumBody.fontSize,
	},
});

export default SpecialityModalContent;
