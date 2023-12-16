import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';
// * This component displays a modal with filtering options.
// * It utilizes the Modal component from React Native for the overlay effect.
// * Props:
// * - modalVisible: Boolean indicating whether the modal is visible or not.
// * - closeModal: Function to close the modal.
// * - filterContent: String indicating the category of filtering options to display.

import FilterModalContent from './FilterModalContent/FilterModalMain';

const FilterModal = ({ modalVisible, closeModal, filterContent }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={closeModal}
		>
			<View style={styles.overlay}>
				<View style={styles.modalContainer}>
					<FilterModalContent
						filterCategory={filterContent}
						closeModal={closeModal}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
});

export default FilterModal;
