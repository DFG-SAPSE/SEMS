import React from 'react';
import { Text } from 'react-native';
import SpecialtyModalContent from './filters-tabs/SpecialtyModal';
import ExperienceModalContent from './filters-tabs/ExperienceModal';
import RegionModalContent from './filters-tabs/RegionModal';
import PriceRangeModalContent from './filters-tabs/PriceRangeModal';
import AllFiltersModal from '../master-filter/masterFilter';
import tabs from '../../../locales/en/Tabs.json';
//Depending on the filterCategory This component is used to render a specific modal.
const FilterModalContent = ({ filterCategory, closeModal }) => {
	switch (filterCategory) {
		case tabs.Specialty:
			return <SpecialtyModalContent closeModal={closeModal} />;
		case tabs.Experience.label:
			return <ExperienceModalContent closeModal={closeModal} />;
		case tabs.PriceRange.label:
			return <PriceRangeModalContent closeModal={closeModal} />;
		case tabs.Region:
			return <RegionModalContent closeModal={closeModal} />;
		case tabs.All:
			return <AllFiltersModal closeModal={closeModal} />;
		default:
			return <Text>{tabs.None}</Text>;
	}
};

export default FilterModalContent;
