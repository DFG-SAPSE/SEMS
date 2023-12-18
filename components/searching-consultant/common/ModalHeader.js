import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import tabs from '../../../locales/en/Tabs.json';
//This component is in every modal. It is header with a description of what is for and a clear all button.
//Onpress is usually the Clear all button, and filter is the label of the Modal.
const ModalHeader = ({ onPress, filter }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{filter}</Text>
			<Pressable onPress={onPress}>
				<Text style={styles.clearAllText}>{tabs.ClearAll}</Text>
			</Pressable>
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerText: {
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.large.fontSize,
	},
	clearAllText: {
		color: theme.colors.primary.dark,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.smallBody.fontSize,
	},
});

export default ModalHeader;
