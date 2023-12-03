import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { BookingContext } from "../../../context/BookingContext";

const QuestionList = () => {
	const { bookingData, consultantData, updateAnswers } =
		useContext(BookingContext);

	const handleAnswerChange = (text, index) => {
		const newAnswers = [...bookingData.answers];
		newAnswers[index] = text;
		updateAnswers(newAnswers);
	};

	return (
		<View>
			{consultantData.questions.map((question, index) => (
				<View key={index} style={styles.questionContainer}>
					<Text style={styles.question}>{question}</Text>
					<TextInput
						style={styles.input}
						value={bookingData.answers[index] || ""}
						onChangeText={(text) => handleAnswerChange(text, index)}
						placeholder="Type your answer here"
					/>
				</View>
			))}
		</View>
	);
};

import { theme } from "../../../styles/theme";

const styles = StyleSheet.create({
	questionContainer: {
		// Style for the question container
		marginTop: theme.spacing.large,
	},
	question: {
		...theme.typography.mediumBodyBold,
	},
	input: {
		// Style for the TextInput
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding: 10,
		marginTop: 5, // Space between question and input
	},
});

export default QuestionList;
