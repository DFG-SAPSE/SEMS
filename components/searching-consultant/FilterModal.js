import React from 'react';
import { StyleSheet, Modal, View, Text, Button } from 'react-native';

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
					<View style={styles.modalContent}>
						<Text>{filterContent}</Text>
						<Button title="Close Modal" onPress={closeModal} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	modalContent: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '90%',
		backgroundColor: 'white',
		padding: theme.spacing.xxlarge,
		borderRadius: theme.spacing.xlarge,
	},
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
});

export default FilterModal;
