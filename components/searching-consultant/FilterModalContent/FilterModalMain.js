import React from 'react';
import { Text } from 'react-native';
import SpecialityModalContent from './SpecialityModal';
import IndustryModalContent from './IndustryModal';

const FilterModalContent = ({ filterCategory, closeModal }) => {
	switch (filterCategory) {
		case 'Speciality':
			return <SpecialityModalContent closeModal={closeModal} />;
		case 'Industry':
			return <IndustryModalContent />;
		default:
			return <Text>No content for this category</Text>;
	}
};

export default FilterModalContent;
