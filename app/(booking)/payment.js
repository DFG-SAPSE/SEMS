import { router, Stack } from "expo-router";
import React, { useContext, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { BookingContext } from "../../context/BookingContext";
import ConsultantProfile from "../../components/booking/ConsultantProfile";
import Button from "../../components/common/Button";
import VoucherForm from "../../components/booking/payment/VoucherForm";
import SelectPaymentMethod from "../../components/booking/payment/SelectPaymentMethod";

const PaymentComponent = () => {
	const [voucher, setVoucher] = useState("");
	const { updatePaymentMethod, consultantData } = useContext(BookingContext);

	const handleApplyVoucher = () => {
		// Logic to apply voucher
	};

	const handleSelectPaymentMethod = (method) => {
		updatePaymentMethod(method);
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Stack.Screen
				options={{
					title: `Booking with ${consultantData.name}`,
				}}
			/>

			<ConsultantProfile />

			<SelectPaymentMethod
				handleSelectPaymentMethod={handleSelectPaymentMethod}
			></SelectPaymentMethod>

			<VoucherForm
				voucher={voucher}
				setVoucher={setVoucher}
				handleApplyVoucher={handleApplyVoucher}
			></VoucherForm>

			<Button
				onPress={() => {
					router.push("/booking-review");
				}}
				title={"Next"}
			/>
		</ScrollView>
	);
};

import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: theme.spacing.large,
	},
});

export default PaymentComponent;
