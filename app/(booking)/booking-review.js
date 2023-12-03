import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Stack, useNavigation } from "expo-router";
import { StackActions } from "@react-navigation/native";

import { BookingContext } from "../../context/BookingContext";
import ConsultantProfile from "../../components/booking/ConsultantProfile";
import Button from "../../components/common/Button";
import ConfirmBlock from "../../components/booking/review/ConfirmBlock";

import { formatDateAndTime } from "../../utils/dateAndTime";
import { camelCaseToNormalText } from "../../utils/stringFormat";

const BookingReview = () => {
	const { bookingData, consultantData, book } = useContext(BookingContext);
	const navigation = useNavigation();

	// Preparing data for date and time of booking
	const { date: bookingDate, time: startTime } = formatDateAndTime(
		bookingData.startTime
	);
	const { time: endTime } = formatDateAndTime(bookingData.endTime);
	const dateAndTime = [
		["Date", `${bookingDate} (YYYY-MM-DD)`],
		["Time and duration", `${startTime} - ${endTime}`],
	];

	const handleBookingConfirm = async () => {
		const res = await book();
		if (res.ok) {
			navigation.dispatch(StackActions.popToTop());
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Stack.Screen
				options={{
					title: `Booking with ${consultantData.name}`,
				}}
			/>

			<ConsultantProfile />

			<View style={styles.divider} />

			{dateAndTime.map((d, index) => (
				<ConfirmBlock key={index} header={d[0]} body={d[1]} />
			))}

			<View style={styles.divider} />

			{consultantData.questions.map((question, index) => (
				<ConfirmBlock
					key={index}
					header={question}
					body={bookingData.answers[index]}
				/>
			))}

			{bookingData.fileAttachments.map((file, index) => (
				<Text key={index}>{file}</Text>
			))}

			<View style={styles.divider} />

			{Object.entries(bookingData.payment).map(([key, value], index) => (
				<ConfirmBlock
					key={index}
					header={camelCaseToNormalText(key)}
					body={value}
				/>
			))}

			<View style={styles.footer}>
				<Button
					onPress={handleBookingConfirm}
					title={"Confirm"}
					customStyle={styles.button}
				/>
			</View>
		</ScrollView>
	);
};

import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: theme.spacing.large,
	},
	section: {
		marginBottom: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	divider: {
		height: 1,
		backgroundColor: "#e1e1e1",
		marginVertical: 10,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 10,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		padding: 10,
		borderWidth: 1,
		borderColor: "#e1e1e1",
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "bold",
	},
	// Add more styles as needed
});

export default BookingReview;
