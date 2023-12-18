import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import CheckBox from '../../../../assets/svg/CheckIcon';
import DropDownIcon from '../../../../assets/svg/DropDownIcon';
import philippineRegions from '../../../../defaultdata/Philippines-Region.json';

// RegionComponent is a reusable component for handling region filters
const RegionComponent = ({ selectedRegions, removeRegion, addRegion }) => {
	// State to manage the visibility of the region dropdown
	const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
	const [selectedRegion, setSelectedRegion] = useState('');

	// Function to check if a region is selected
	const isRegionSelected = (region) => selectedRegions.includes(region);

	// Function to toggle the selection of a region
	const toggleRegion = (region) => {
		if (isRegionSelected(region)) {
			removeRegion(region);
		} else {
			addRegion(region);
		}
	};

	return (
		<>
			{/* Heading for the region filter */}
			<Text style={styles.experience}>Region</Text>

			{/* Dropdown button to open/close the region dropdown */}
			<TouchableOpacity
				style={styles.dropdownButton}
				onPress={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
			>
				<Text style={styles.dropdownButtonText}>
					{selectedRegion || 'Select a region'}
				</Text>
				<DropDownIcon
					width={theme.spacing.xlarge}
					height={theme.spacing.xlarge}
					color={'black'}
				/>
			</TouchableOpacity>

			{/* Region dropdown content */}
			{isRegionDropdownOpen && (
				<ScrollView style={styles.dropdownList}>
					{philippineRegions.map((region, index) => (
						<TouchableOpacity
							key={index}
							style={styles.dropdownItem}
							onPress={() => {
								setSelectedRegion(region);
								toggleRegion(region);
							}}
						>
							<Text>{region}</Text>
							{isRegionSelected(region) && (
								<CheckBox
									width={20}
									height={20}
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

// Styles
import { theme } from '../../../../styles/theme';
const styles = StyleSheet.create({
	dropdownButton: {
		borderWidth: 1,
		borderColor: 'white',
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
		borderBottomColor: theme.colors.gray.border,
	},
	experience: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.mediumBody.fontSize,
		paddingVertical: theme.spacing.medium,
	},
});

export default RegionComponent;
