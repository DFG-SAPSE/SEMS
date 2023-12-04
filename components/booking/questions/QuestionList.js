import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
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
				<Question
					key={index}
                    index={index}
					question={question}
					answer={bookingData.answers[index]}
					handleAnswerChange={handleAnswerChange}
				/>
			))}
		</View>
	);
};

import { theme } from "../../../styles/theme";
import Question from "./Question";

const styles = StyleSheet.create({});

export default QuestionList;
