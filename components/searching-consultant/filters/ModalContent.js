import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from '../../../styles/fonts';
import Button from '../../common/Button';
import ModalHeader from '../common/ModalHeader';
//Higher Order Component that is responsible for wrapping all the modals
const ModalContent = ({
	closeModal,
	headerFilter,
	headerAction,
	scrollViewContent,
}) => {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.modalContent}>
			<ModalHeader onPress={headerAction} filter={headerFilter} />
			<View style={styles.divider} />
			<ScrollView style={styles.scrollView}>
				{scrollViewContent}
			</ScrollView>
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
		height: '60%',
		backgroundColor: theme.colors.white,
		padding: theme.spacing.xxlarge,
		borderTopEndRadius: theme.spacing.xlarge,
		borderStartStartRadius: theme.spacing.xlarge,
	},
	divider: {
		backgroundColor: theme.colors.gray.border,
		marginTop: theme.spacing.medium,
		height: 1,
	},
	scrollView: {
		flex: 1,
	},
});

export default ModalContent;
