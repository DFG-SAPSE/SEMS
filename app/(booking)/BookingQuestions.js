import React, { useContext } from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

import QuestionList from "../../components/booking/questions/QuestionList";
import NextButton from "../../components/booking/common/NextButton";
import CancelConfirmModal from "../../components/booking/common/CancelConfirmModal";
import ConsultantProfile from "../../components/booking/common/ConsultantProfile";
import CancelBookingButton from "../../components/booking/common/CancelBookingButton";
import { BookingContext } from "../../context/BookingContext";

const BookingQuestions = () => {
	const { consultantData } = useContext(BookingContext);
	return (
		<ScrollView style={styles.container}>
			<CancelConfirmModal />
			<Stack.Screen
				options={{ title: `Booking with ${consultantData.name}` }}
			/>
			<ConsultantProfile />
			<QuestionList />

			<View style={styles.footer}>
				<CancelBookingButton />
				<NextButton nextRoute={"/Payment"}></NextButton>
			</View>
		</ScrollView>
	);
};

import { theme } from "../../styles/theme";

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

export default BookingQuestions;
