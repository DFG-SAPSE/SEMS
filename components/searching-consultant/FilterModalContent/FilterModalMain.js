import React from 'react';
import { Text } from 'react-native';
import SpecialityModalContent from './SpecialityModal';
import ExperienceModalContent from './ExperienceModal';
import RegionModalContent from './RegionModal';
import PriceRangeModalContent from './PriceRangeModal';
import AllFiltersModal from './AllFiltersModal';

const FilterModalContent = ({ filterCategory, closeModal }) => {
	switch (filterCategory) {
		case 'Speciality':
			return <SpecialityModalContent closeModal={closeModal} />;
		case 'Experience':
			return <ExperienceModalContent closeModal={closeModal} />;
		case 'Price Range':
			return <PriceRangeModalContent closeModal={closeModal} />;
		case 'Region':
			return <RegionModalContent closeModal={closeModal} />;
		case 'All':
			return <AllFiltersModal closeModal={closeModal} />;
		default:
			return <Text>No content for this category</Text>;
	}
};

export default FilterModalContent;
