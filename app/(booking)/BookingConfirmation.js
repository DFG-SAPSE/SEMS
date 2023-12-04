import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import BookingReview from "./BookingReview";
import { BookingContext } from "../../context/BookingContext";
import { cancelMeeting } from "../../services/scheduling";

const BookingConfirmation = () => {
	const { consultantData, recentlyBookedMeetingId } =
		useContext(BookingContext);

	const handleCancelMeeting = async () => {
		await cancelMeeting(recentlyBookedMeetingId);
	};

	const footerComponent = (
		<>
			<View style={styles.divider} />
			<View>
				<Text style={styles.cancelMeetingLink} onPress={handleCancelMeeting}>
					Cancel meeting
				</Text>
			</View>
		</>
	);

	return (
		<BookingReview
			pageTitle={"Booking confirmation"}
			footerComponent={footerComponent}
		>
			<View style={styles.container}>
				<Text style={styles.mainConfirm}>
					You're going to meet {consultantData.name}!
				</Text>
				<Text style={styles.adviceText}>
					We've sent booking confirmation to your email. Please consider adding
					this event to your calendar.
				</Text>
			</View>
		</BookingReview>
	);
};

import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		paddingTop: theme.spacing.medium,
		paddingBottom: theme.spacing.medium,
	},
	section: {
		marginTop: theme.spacing.medium,
	},
	mainConfirm: {
		...theme.typography.mediumBodyBold,
		marginBottom: theme.spacing.medium,
	},
	adviceText: {
		...theme.typography.mediumBody,
	},
	cancelMeetingLink: {
		textDecorationLine: "underline",
		color: theme.colors.primary.default,
		...theme.typography.mediumBody,
	},
	divider: {
		height: 1,
		backgroundColor: "#e1e1e1",
		marginVertical: 10,
	},
});

export default BookingConfirmation;
