import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { theme } from '../../../styles/theme';
import { BookingContext } from '../../../context/BookingContext';

const Pricing = () => {
	const { consultantData, bookingData } = useContext(BookingContext);
	const service = consultantData.services[bookingData.service];

	return (
		<View>
			<View style={styles.priceContainer}>
				<Text style={styles.priceContent}>Total</Text>
				<Text style={styles.priceContent}>{service.price} PHP</Text>
			</View>

			<View style={styles.priceContainer}>
				<Text style={styles.priceContent}>After apply voucher(s)</Text>
				<Text style={styles.priceContent}>{service.price} PHP</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	priceContainer: {
		marginTop: theme.spacing.medium,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	priceContent: {
		...theme.typography.mediumBodyBold,
	},
});
export default Pricing;
