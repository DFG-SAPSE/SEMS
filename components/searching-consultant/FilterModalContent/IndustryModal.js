import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const IndustryModalContent = () => {
	return (
		<View style={styles.modalContent}>
			<Text>Hello</Text>
		</View>
	);
};
import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	modalContent: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '90%',
		backgroundColor: 'white',
		padding: theme.spacing.xxlarge,
		borderRadius: theme.spacing.xlarge,
	},
});
export default IndustryModalContent;
