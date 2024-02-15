import React, { useContext } from 'react';
import { View } from 'react-native';
import { BookingContext } from '../../../context/BookingContext';
import Question from './Question';

const QuestionList = () => {
	const { bookingData, consultantData, updateAnswers } =
		useContext(BookingContext);

	const handleAnswerChange = (text, index) => {
		const newAnswers = [...bookingData.answers];
		newAnswers[index] = text;
		updateAnswers(newAnswers);
	};

	const service = consultantData.services[0];

	return (
		<View>
			{service.questions.map((question, index) => (
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

export default QuestionList;
