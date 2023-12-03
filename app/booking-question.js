import { Link } from "expo-router";
import React, { useContext } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity,
	Image,
	Pressable,
} from "react-native";

import { BookingContext } from "../context/BookingContext";

const BookingQuestions = () => {
	const { bookingData, consultantData, updateAnswers } =
		useContext(BookingContext);

	// Handler for text input changes
	const handleAnswerChange = (text, index) => {
		const newAnswers = [...bookingData.answers];
		newAnswers[index] = text;
		updateAnswers(newAnswers);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				{/* Replace with actual back navigation function */}
				<Button title="Back" onPress={() => {}} />
				<Text style={styles.headerText}>
					Booking with {consultantData.name}
				</Text>
			</View>
			<View style={styles.profileContainer}>
				<Image
					source={{
						uri: consultantData.avatar || "https://picsum.photos/200/300",
					}}
					style={styles.profileImage}
				/>
				<Text style={styles.profileName}>{consultantData.name}</Text>
				<Text style={styles.profileTitle}>{consultantData.title}</Text>
				<Text style={styles.profileTitle}>{consultantData.company}</Text>
			</View>
			<View style={styles.form}>
				{consultantData.questions.map((question, index) => (
					<TextInput
						key={index}
						style={styles.input}
						placeholder={question}
						value={bookingData.answers[index] || ""}
						onChangeText={(text) => handleAnswerChange(text, index)}
						multiline
					/>
				))}
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Add attachment</Text>
				</TouchableOpacity>
				<Link href="/payment" asChild>
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>Next</Text>
					</Pressable>
				</Link>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	profileContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	profileName: {
		fontSize: 18,
		fontWeight: "bold",
	},
	profileTitle: {
		fontSize: 16,
	},
	form: {
		flex: 1,
	},
	label: {
		fontSize: 16,
		marginBottom: 10,
	},
	input: {
		fontSize: 16,
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginBottom: 20,
		borderRadius: 5,
	},
	button: {
		backgroundColor: "#000",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		marginBottom: 20,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
	},
});

export default BookingQuestions;
