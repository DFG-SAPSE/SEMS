import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { BookingContext } from "../../context/BookingContext";
import ConfirmBlock from "../../components/booking/review/ConfirmBlock";
import BookingCommon from "../../components/booking/common/BookingCommon";
import ConfirmButton from "../../components/booking/common/ConfirmButton";

import { formatDateAndTime } from "../../utils/dateAndTime";
import { camelCaseToNormalText } from "../../utils/stringFormat";

const BookingReview = () => {
	const { bookingData, consultantData } = useContext(BookingContext);

	// Preparing data for date and time of booking
	const { date: bookingDate, time: startTime } = formatDateAndTime(
		bookingData.startTime
	);
	const { time: endTime } = formatDateAndTime(bookingData.endTime);
	const dateAndTime = [
		["Date", `${bookingDate} (YYYY-MM-DD)`],
		["Time and duration", `${startTime} - ${endTime}`],
	];

	return (
		<BookingCommon proceedButton={<ConfirmButton />}>
			<View style={styles.divider} />

			<View style={styles.section}>
				{dateAndTime.map((d, index) => (
					<ConfirmBlock key={index} header={d[0]} body={d[1]} />
				))}
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				{consultantData.questions.map((question, index) => (
					<ConfirmBlock
						key={index}
						header={question}
						body={bookingData.answers[index]}
					/>
				))}
			</View>

			{/* file attachment */}
			{/* {bookingData.fileAttachments.map((file, index) => (
				<Text key={index}>{file}</Text>
			))} */}

			<View style={styles.divider} />

			<View style={styles.section}>
				{Object.entries(bookingData.payment).map(([key, value], index) => (
					<ConfirmBlock
						key={index}
						header={camelCaseToNormalText(key)}
						body={value}
					/>
				))}
			</View>
		</BookingCommon>
	);
};

import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: theme.spacing.large,
	},
	section: {
		marginTop: theme.spacing.medium,
	},
	divider: {
		height: 1,
		backgroundColor: "#e1e1e1",
		marginVertical: 10,
	},
});

export default BookingReview;
