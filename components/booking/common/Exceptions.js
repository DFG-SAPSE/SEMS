import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { BookingContext } from '../../../context/BookingContext';
import { theme } from '../../../styles/theme';

const Exceptions = () => {
	const { consultantData } = useContext(BookingContext);
	const { exceptions } = consultantData;

	return (
		<View style={styles.container}>
			<Text style={styles.largeText}>Exceptions</Text>
			<Text style={styles.exceptionsText}>{exceptions}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: theme.spacing.large,
		padding: theme.spacing.large,
	},
	largeText: {
		...theme.typography.large,
	},
	exceptionsText: {
		marginTop: theme.spacing.mediumSmall,
		fontWeight: 'bold',
	},
});

export default Exceptions;
