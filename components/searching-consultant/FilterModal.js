import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';
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
