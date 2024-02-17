import React, { useContext } from 'react';
import { Stack } from 'expo-router';
import {
	View,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native';

import { BookingContext } from '../../context/BookingContext';
import ConsultantProfile from '../../components/booking/common/ConsultantProfile';
import CancelConfirmModal from '../../components/booking/common/CancelConfirmModal';
import CancelBookingButton from '../../components/booking/common/CancelBookingButton';

const PaymentMethod = () => {
	const { bookingData, updatePaymentMethod } = useContext(BookingContext);

	return (
		<ScrollView style={styles.wrapper}>
			<ScrollView style={styles.container}>
				<CancelConfirmModal />

				<Stack.Screen options={'Payment Method'} />

				<ConsultantProfile />

				<View style={styles.divider} />
				<View style={styles.payContainer}>
					<Text style={styles.header}>Payment method</Text>

					<TouchableOpacity
						onPress={() => {
							updatePaymentMethod('Card');
						}}
						style={styles.paymentOption}
					>
						<Text>Other Credit/Debit</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							updatePaymentMethod('GCash');
						}}
						style={styles.paymentOption}
					>
						<Text>GCash</Text>
					</TouchableOpacity>

					<View style={styles.divider} />

					<View style={styles.totalSection}>
						<Text>Total</Text>
						<Text style={styles.totalAmount}>2974.60 PHP</Text>
					</View>
				</View>

				<View style={styles.footer}>
					<CancelBookingButton />

					{bookingData.payment.paymentMethod == 'GCash' ||
					bookingData.payment.paymentMethod == 'Card' ? (
						<NextButton nextRoute={'/PaymentForm'} />
					) : (
						<></>
					)}
				</View>
			</ScrollView>
		</ScrollView>
	);
};

import { theme } from '../../styles/theme';
import NextButton from '../../components/booking/common/NextButton';

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: theme.colors.background.white,
	},
	container: {
		flexGrow: 1,
		padding: theme.spacing.large,
	},
	divider: {
		height: 1,
		backgroundColor: '#e1e1e1',
		marginVertical: 10,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.spacing.xlarge,
	},
	payContainer: {
		flex: 1,
	},
	header: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	paymentOption: {
		padding: 15,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		marginBottom: 10,
	},
	totalSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	totalAmount: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default PaymentMethod;
