import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';

import { BookingContext } from '../../context/BookingContext';
import NextButton from '../../components/booking/common/NextButton';
import CancelBookingButton from '../../components/booking/common/CancelBookingButton';
import VoucherForm from '../../components/booking/payment/VoucherForm';
import SelectPaymentMethod from '../../components/booking/payment/SelectPaymentMethod';
import ConsultantProfile from '../../components/booking/common/ConsultantProfile';
import CancelConfirmModal from '../../components/booking/common/CancelConfirmModal';
import { theme } from '../../styles/theme';
import Pricing from '../../components/booking/payment/Pricing';
import Divider from '../../components/common/Divider';

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
		<ScrollView style={styles.wrapper}>
			<ScrollView style={styles.container}>
				<CancelConfirmModal />
				<Stack.Screen
					options={{ title: `Booking with ${consultantData.name}` }}
				/>

				<ConsultantProfile />

				<Divider />

				<SelectPaymentMethod
					handleSelectPaymentMethod={handleSelectPaymentMethod}
				/>

				<VoucherForm
					voucher={voucher}
					setVoucher={setVoucher}
					handleApplyVoucher={handleApplyVoucher}
				/>

				<Pricing />

				<View style={styles.footer}>
					<CancelBookingButton />
					<NextButton nextRoute={'/PaymentForm'} />
				</View>
			</ScrollView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: theme.colors.white,
	},
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
});

export default PaymentComponent;
