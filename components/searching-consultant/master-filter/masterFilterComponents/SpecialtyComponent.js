import React, { useState } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '../../../../assets/svg/CheckIcon';
import DropDownIcon from '../../../../assets/svg/DropDownIcon';
import specialties from '../../../../defaultdata/Specialties.json';
import tabs from '../../../../locales/en/Tabs.json';
// SpecialtyComponent is a reusable component for handling Specialty filters
const SpecialtyComponent = ({
	selectedSpecialities,
	removeSpecialty,
	addSpecialty,
}) => {
	// Function to check if a Specialty is selected
	const isSpecialtySelected = (Specialty) =>
		selectedSpecialities.includes(Specialty);

	// Function to toggle the selection of a Specialty
	const toggleSpecialty = (Specialty) => {
		if (isSpecialtySelected(Specialty)) {
			removeSpecialty(Specialty);
		} else {
			addSpecialty(Specialty);
		}
	};

	// State to manage the visibility of the Specialty dropdown
	const [isSpecialtyDropdownOpen, setIsSpecialtyDropdownOpen] =
		useState(false);
	const [selectedSpecialty, setSelectedSpecialty] = useState('');

	return (
		<>
			{/* Dropdown button to open/close the Specialty dropdown */}
			<TouchableOpacity
				style={styles.dropdownButton}
				onPress={() =>
					setIsSpecialtyDropdownOpen(!isSpecialtyDropdownOpen)
				}
			>
				<Text style={styles.dropdownButtonText}>
					{selectedSpecialty || tabs.Specialty.text}
				</Text>
				<DropDownIcon
					width={theme.spacing.xlarge}
					height={theme.spacing.xlarge}
					color={theme.colors.text.dark}
				/>
			</TouchableOpacity>

			{/* Specialty dropdown content */}
			{isSpecialtyDropdownOpen && (
				<ScrollView style={styles.dropdownList}>
					{specialties.map((specialty) => (
						<TouchableOpacity
							key={specialty}
							style={styles.dropdownItem}
							onPress={() => {
								setSelectedSpecialty(specialty);
								toggleSpecialty(specialty);
							}}
						>
							<Text>{specialty}</Text>
							{isSpecialtySelected(specialty) && (
								<CheckBox
									width={theme.spacing.medium}
									height={theme.spacing.medium}
									color={theme.colors.text.dark}
									isChecked={true}
								/>
							)}
						</TouchableOpacity>
					))}
				</ScrollView>
			)}
		</>
	);
};

import { theme } from '../../../../styles/theme';
const styles = StyleSheet.create({
	dropdownButton: {
		borderWidth: 1,
		borderColor: theme.colors.white,
		borderRadius: theme.spacing.small,
		marginBottom: theme.spacing.medium,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	dropdownButtonText: {
		fontSize: theme.typography.mediumBody.fontSize,
		fontFamily: 'Roboto-Regular',
	},
	dropdownList: {
		maxHeight: 150,
		marginBottom: theme.spacing.medium,
	},
	dropdownItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: theme.spacing.small,
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.border,
	},
});

export default SpecialtyComponent;
