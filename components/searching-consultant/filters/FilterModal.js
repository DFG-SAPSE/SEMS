import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';

import FilterModalContent from './FilterModalContent';

// FilterModal Component: Renders a modal for filtering content
const FilterModal = ({ modalVisible, closeModal, filterContent }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible} // Control the visibility of the modal
			onRequestClose={closeModal} // Function to handle modal close request
		>
			<View style={styles.overlay}>
				{/* Modal Container View: Holds the content of the modal */}
				<View style={styles.modalContainer}>
					{/* FilterModalContent Component: Displays the filter content within the modal */}
					<FilterModalContent
						filterCategory={filterContent} // Pass the filter category to the FilterModalContent
						closeModal={closeModal} // Pass the closeModal function to the FilterModalContent
					/>
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

export default FilterModal;
