import React, { useState } from 'react';
import {
	Text,
	StyleSheet,
	View,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import CheckBox from '../../../assets/svg/CheckIcon';
import Button from '../../common/Button';
import { useFonts } from 'expo-font';
import Slider from '@react-native-community/slider';

import { fonts } from '../../../styles/fonts';
import { useSpecialities } from '../../../context/FilterConsultantsContext';
import ModalHeader from './ModalContentComponents/ModalHeader';
import DropDownIcon from '../../../assets/svg/DropDownIcon';
import specialties from '../../../defaultdata/Specialties.json';
import philippineRegions from '../../../defaultdata/Philippines-Region.json';
import ModalContent from './ModalContent';

const AllFiltersModal = ({ closeModal }) => {
	const {
		clearAllFilters,
		selectedSpecialities,
		removeSpeciality,
		addSpeciality,
		experience,
		setExperience,
		price,
		setPrice,
		addRegion,
		removeRegion,
		selectedRegions,
	} = useSpecialities();

	const [fontsLoaded] = useFonts(fonts);
	const [isSpecialityDropdownOpen, setIsSpecialityDropdownOpen] =
		useState(false);
	const [selectedSpeciality, setSelectedSpeciality] = useState('');
	const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
	const [selectedRegion, setSelectedRegion] = useState('');

	if (!fontsLoaded) {
		return undefined;
	}

	const isSpecialitySelected = (speciality) =>
		selectedSpecialities.includes(speciality);

	const toggleSpeciality = (speciality) => {
		if (isSpecialitySelected(speciality)) {
			removeSpeciality(speciality);
		} else {
			addSpeciality(speciality);
		}
	};

	const isRegionSelected = (region) => selectedRegions.includes(region);

	const toggleRegion = (region) => {
		if (isRegionSelected(region)) {
			removeRegion(region);
		} else {
			addRegion(region);
		}
	};

	const clearAllFiltersAndCloseModal = () => {
		clearAllFilters();
		closeModal();
	};

	return (
		<View style={styles.modalContent}>
			<ModalHeader
				filter={'Filter by'}
				onPress={clearAllFiltersAndCloseModal}
			/>
			<View style={styles.divider} />
			<Text style={styles.experience}>Experience</Text>
			<TouchableOpacity
				style={styles.dropdownButton}
				onPress={() =>
					setIsSpecialityDropdownOpen(!isSpecialityDropdownOpen)
				}
			>
				<Text style={styles.dropdownButtonText}>
					{selectedSpeciality || 'Select a speciality'}
				</Text>
				<DropDownIcon width={24} height={24} color={'black'} />
			</TouchableOpacity>
			{isSpecialityDropdownOpen && (
				<ScrollView style={styles.dropdownList}>
					{specialties.map((specialty) => (
						<TouchableOpacity
							key={specialty.id}
							style={styles.dropdownItem}
							onPress={() => {
								setSelectedSpeciality(specialty.name);
								toggleSpeciality(specialty.name);
							}}
						>
							<Text>{specialty.name}</Text>
							{isSpecialitySelected(specialty.name) && (
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
			<View style={styles.divider} />
			<Text style={styles.experience}>Price Range</Text>
			<View style={styles.sliderContainer}>
				<Text style={styles.sliderLabel}>$ {price}</Text>
				<Slider
					style={styles.slider}
					minimumValue={0}
					maximumValue={30}
					step={1}
					value={price}
					onValueChange={(value) => setPrice(value)}
				/>
			</View>
			<View style={styles.divider} />
			<Text style={styles.experience}>Region</Text>
			<TouchableOpacity
				style={styles.dropdownButton}
				onPress={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
			>
				<Text style={styles.dropdownButtonText}>
					{selectedRegion || 'Select a region'}
				</Text>
				<DropDownIcon width={24} height={24} color={'black'} />
			</TouchableOpacity>
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
		height: '90%',
		backgroundColor: 'white',
		padding: theme.spacing.xxlarge,
		borderTopEndRadius: theme.spacing.xlarge,
		borderStartStartRadius: theme.spacing.xlarge,
	},
	divider: {
		backgroundColor: theme.colors.gray.border,
		marginVertical: theme.spacing.medium,
		height: 1,
	},
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
	experience: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Bold',
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

export default AllFiltersModal;
