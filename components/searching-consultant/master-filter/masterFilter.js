import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Button from '../../common/Button';
import { useFonts } from 'expo-font';

import { fonts } from '../../../styles/fonts';
import { useConsultantFilters } from '../../../context/ConsultantFilterContext';
import ModalHeader from '../common/ModalHeader';
import RegionComponent from './master-filter-components/regionComponent';
import PriceModal from './master-filter-components/priceRangeComponent';
import ExperienceModal from './master-filter-components/experienceComponent';
import SpecialtyComponent from './master-filter-components/specialtyComponent';

// This is the main UI for the master filters.
// Inside the 'master-filter-components' folder is where you would add a new filter if needed.
const AllFiltersModal = ({ closeModal }) => {
	const {
		clearAllFilters,
		selectedSpecialities,
		removeSpecialty,
		addSpecialty,
		experience,
		setExperience,
		price,
		setPrice,
		addRegion,
		removeRegion,
		selectedRegions,
	} = useConsultantFilters();

	const [fontsLoaded] = useFonts(fonts);

	// If fonts are not loaded, return undefined
	if (!fontsLoaded) {
		return undefined;
	}
	// Function to clear all filters and close the modal
	const clearAllFiltersAndCloseModal = () => {
		clearAllFilters();
		closeModal();
	};

	return (
		<ScrollView style={styles.modalContent}>
			<ModalHeader
				filter={'Filter by'}
				onPress={clearAllFiltersAndCloseModal}
			/>
			<View style={styles.divider} />
			<Text style={styles.experience}>Experience</Text>
			<SpecialtyComponent
				selectedSpecialities={selectedSpecialities}
				removeSpecialty={removeSpecialty}
				addSpecialty={addSpecialty}
			/>
			<ExperienceModal
				experience={experience}
				setExperience={setExperience}
			/>
			<View style={styles.divider} />
			<PriceModal setPrice={setPrice} price={price} />
			<View style={styles.divider} />
			<RegionComponent
				selectedRegions={selectedRegions}
				removeRegion={removeRegion}
				addRegion={addRegion}
			/>
			<Button title="Done" onPress={closeModal} />
		</ScrollView>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	modalContent: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '90%',
		backgroundColor: theme.colors.white,
		padding: theme.spacing.xxlarge,
		borderTopEndRadius: theme.spacing.xlarge,
		borderStartStartRadius: theme.spacing.xlarge,
	},
	divider: {
		backgroundColor: theme.colors.gray.border,
		marginVertical: theme.spacing.medium,
		height: 1,
	},
	experience: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.mediumBody.fontSize,
		paddingVertical: theme.spacing.medium,
	},
});

export default AllFiltersModal;
