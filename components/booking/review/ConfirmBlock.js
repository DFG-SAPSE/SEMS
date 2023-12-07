import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConfirmBlock = ({ header, body }) => {
	return (
		<View style={styles.detailRow}>
			<Text style={styles.title}>{header}</Text>
			<Text style={styles.content}>{body}</Text>
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	detailRow: {
		marginBottom: 8,
	},
	detailRow: {
		marginBottom: theme.spacing.large,
	},
	title: {
		...theme.typography.mediumBodyBold,
		marginBottom: theme.spacing.small,
	},
	content: {
		...theme.typography.mediumBody,
	},
});

export default ConfirmBlock;
