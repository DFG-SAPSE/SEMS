import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Stack } from "expo-router";

import { BookingContext } from "../../../context/BookingContext";
import CancelConfirmModal from "./CancelModal";
import ConsultantProfile from "./ConsultantProfile";
import CancelBookingButton from "./CancelBookingButton";

const BookingCommon = ({ children, proceedButton }) => {
	const { consultantData } = useContext(BookingContext);

	return (
		<ScrollView style={styles.container}>
			<CancelConfirmModal />

			<Stack.Screen
				options={{
					title: `Booking with ${consultantData.name}`,
				}}
			/>

			<ConsultantProfile />

			{children}

			<View style={styles.footer}>
				<CancelBookingButton />
				{proceedButton}
			</View>
		</ScrollView>
	);
};

import { theme } from "../../../styles/theme";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: theme.spacing.large,
		backgroundColor: theme.colors.background,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: theme.spacing.xlarge,
	},
});

export default BookingCommon;
