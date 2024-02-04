import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const Question = ({ index, question, answer, handleAnswerChange }) => {
	return (
		<View style={styles.questionContainer}>
			<Text style={styles.question}>{question}</Text>
			<TextInput
				style={styles.input}
				value={answer || ''}
				onChangeText={(text) => handleAnswerChange(text, index)}
				placeholder="Type your answer here"
				multiline={true}
			/>
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	questionContainer: {
		marginTop: theme.spacing.large,
	},
	question: {
		...theme.typography.mediumBodyBold,
		color: theme.colors.text.gray,
	},
	input: {
		// Style for the TextInput
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 8,
		padding: theme.spacing.medium,
		paddingTop: theme.spacing.medium,
		marginTop: theme.spacing.medium,
		...theme.typography.mediumBody,
		minHeight: 100,
	},
});

export default Question;
