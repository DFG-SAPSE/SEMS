import React, { useContext } from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";

import { BookingContext } from "../context/BookingContext";
import { timeStampToDateTime } from "../utils/dateAndTime";

const BookingConfirmation = () => {
	const { bookingData, consultantData, book } = useContext(BookingContext);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.section}>
				<Text style={styles.title}>General Consultation</Text>
				<View style={styles.divider} />
				<Text>Date: {timeStampToDateTime(bookingData.startTime)}</Text>
				<Text>
					Time and Duration: {timeStampToDateTime(bookingData.startTime)} -{" "}
					{timeStampToDateTime(bookingData.endTime)}
				</Text>
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				<Text style={styles.title}>Consultant Information</Text>
				<View style={styles.divider} />
				<Image
					source={{ uri: consultantData.avatar }}
					style={styles.profileImage}
				/>
				<Text>Name: {consultantData.name}</Text>
				<Text>Title: {consultantData.title}</Text>
				<Text>Company: {consultantData.company}</Text>
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				<Text style={styles.title}>Questions and Answers</Text>
				<View style={styles.divider} />
				{consultantData.questions.map((question, index) => (
					<View key={index}>
						<Text>Q: {question}</Text>
						<Text>A: {bookingData.answers[index]}</Text>
					</View>
				))}
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				<Text style={styles.title}>File Attachments</Text>
				<View style={styles.divider} />
				{/* List out attachments if any */}
				{bookingData.fileAttachments.map((file, index) => (
					<Text key={index}>{file}</Text>
				))}
			</View>

			<View style={styles.divider} />

			<View style={styles.section}>
				<Text style={styles.title}>Payment Information</Text>
				<View style={styles.divider} />
				<Text>Payment Method: {bookingData.payment.paymentMethod}</Text>
				{/* Include additional payment information here */}
			</View>

			<View style={styles.divider} />

			<View style={styles.footer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={book}>
					<Text style={styles.buttonText}>Confirm</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 20,
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

export default BookingConfirmation;
