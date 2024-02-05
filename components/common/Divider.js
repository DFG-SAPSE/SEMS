import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../styles/theme';

const Divider = () => {
	return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
	divider: {
		height: 1,
		backgroundColor: '#e1e1e1',
		marginTop: theme.spacing.large,
	},
});
export default Divider;
