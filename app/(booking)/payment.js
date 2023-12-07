import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Stack } from 'expo-router';

import { BookingContext } from '../../context/BookingContext';
import NextButton from '../../components/booking/common/NextButton';
import CancelBookingButton from '../../components/booking/common/CancelBookingButton';
import VoucherForm from '../../components/booking/payment/VoucherForm';
import SelectPaymentMethod from '../../components/booking/payment/SelectPaymentMethod';
import ConsultantProfile from '../../components/booking/common/ConsultantProfile';
import CancelConfirmModal from '../../components/booking/common/CancelConfirmModal';
import { theme } from '../../styles/theme';

const PaymentComponent = () => {
	const [voucher, setVoucher] = useState('');
	const { updatePaymentMethod, consultantData } = useContext(BookingContext);

	const handleApplyVoucher = () => {
		// Logic to apply voucher
	};

	const handleSelectPaymentMethod = (method) => {
		updatePaymentMethod(method);
	};

	return (
		<ScrollView style={styles.container}>
			<CancelConfirmModal />
			<Stack.Screen
				options={{ title: `Booking with ${consultantData.name}` }}
			/>

			<ConsultantProfile />

			<SelectPaymentMethod
				handleSelectPaymentMethod={handleSelectPaymentMethod}
			/>

			<VoucherForm
				voucher={voucher}
				setVoucher={setVoucher}
				handleApplyVoucher={handleApplyVoucher}
			/>

			<View>
				<View style={styles.priceContainer}>
					<Text style={styles.priceContent}>Total</Text>
					<Text style={styles.priceContent}>2974.60 PHP</Text>
				</View>

				<View style={styles.priceContainer}>
					<Text style={styles.priceContent}>
						After apply voucher(s)
					</Text>
					<Text style={styles.priceContent}>2974.60 PHP</Text>
				</View>
			</View>

			<View style={styles.footer}>
				<CancelBookingButton />
				<NextButton nextRoute={'/BookingReview'} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: theme.spacing.large,
		backgroundColor: theme.colors.background,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.spacing.xlarge,
	},
	priceContainer: {
		marginTop: theme.spacing.medium,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	priceContent: {
		...theme.typography.mediumBodyBold,
	},
});

export default PaymentComponent;
