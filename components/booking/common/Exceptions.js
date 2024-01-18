import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { BookingContext } from '../../../context/BookingContext';
import { theme } from '../../../styles/theme';

const Exceptions = () => {
	const { consultantData } = useContext(BookingContext);
	const { exceptions } = consultantData;

	return (
		<View
			style={{
				marginTop: theme.spacing.large,
				padding: theme.spacing.large,
			}}
		>
			<Text style={{ ...theme.typography.large }}>Exceptions</Text>
			<Text
				style={{
					marginTop: theme.spacing.mediumSmall,
					fontWeight: 'bold',
				}}
			>
				{exceptions}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({});
export default Exceptions;
