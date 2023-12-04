import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Stack } from "expo-router";

import { BookingContext } from "../../../context/BookingContext";
import CancelConfirmModal from "./CancelConfirmModal";
import CancelBookingButton from "./CancelBookingButton";

const BookingCommon = ({ children, proceedButton, pageTitle }) => {
	const { consultantData } = useContext(BookingContext);
	const title = pageTitle ? pageTitle : `Booking with ${consultantData.name}`;

	return (
		<ScrollView style={{ backgroundColor: theme.colors.background }}>
			<ScrollView style={styles.container}>
				<CancelConfirmModal />

				<Stack.Screen
					options={{
						title,
					}}
				/>

				{children}

				<View style={styles.footer}>
					<CancelBookingButton />
					{proceedButton}
				</View>
			</ScrollView>
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
