import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';
import tabs from '../../../locales/en/Tabs.json';
import { Text } from 'react-native';
import SpecialtyModal from './filterCategories/SpecialtyModal';
import ExperienceModal from './filterCategories/ExperienceModal';
import RegionModal from './filterCategories/RegionModal';
import PriceRangeModal from './filterCategories/PriceRangeModal';
import MasterFilter from '../master-filter/MasterFilter';

// FilterModal Component: Renders a modal for filtering content
const FilterContainer = ({ modalVisible, closeModal, filterContent }) => {
	const renderFilterContent = () => {
		switch (filterContent) {
			case tabs.Specialty.label:
				return <SpecialtyModal closeModal={closeModal} />;
			case tabs.Experience.label:
				return <ExperienceModal closeModal={closeModal} />;
			case tabs.PriceRange.label:
				return <PriceRangeModal closeModal={closeModal} />;
			case tabs.Region.label:
				return <RegionModal closeModal={closeModal} />;
			case tabs.All:
				return <MasterFilter closeModal={closeModal} />;
			default:
				return <Text>{tabs.None}</Text>;
		}
	};

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={closeModal}
		>
			<View style={styles.overlay}>
				<View style={styles.modalContainer}>
					{renderFilterContent()}
				</View>
			</View>
		</Modal>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	overlay: {
		flex: 1,
		backgroundColor: theme.colors.background.transparent,
	},
});

export default FilterContainer;
