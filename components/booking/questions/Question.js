import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

const Question = ({ index, question, answer, handleAnswerChange }) => {
	return (
		<View style={styles.questionContainer}>
			<Text style={styles.question}>{question}</Text>
			<TextInput
				style={styles.input}
				value={answer || ""}
				onChangeText={(text) => handleAnswerChange(text, index)}
				placeholder="Type your answer here"
			/>
		</View>
	);
};

import { theme } from "../../../styles/theme";

const styles = StyleSheet.create({
	questionContainer: {
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

export default Question;
