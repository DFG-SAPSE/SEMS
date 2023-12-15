import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const ModalHeader = ({ onPress, filter }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{filter}</Text>
			<Pressable onPress={onPress}>
				<Text style={styles.clearAllText}>CLEAR ALL</Text>
			</Pressable>
		</View>
	);
};

import { theme } from '../../../../styles/theme';

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerText: {
		color: '#000',
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
