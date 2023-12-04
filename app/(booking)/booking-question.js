import React from "react";

import QuestionList from "../../components/booking/questions/QuestionList";
import BookingCommon from "../../components/booking/common/BookingCommon";
import NextButton from "../../components/booking/common/NextButton";

const BookingQuestions = () => {
	const nextBtn = <NextButton nextRoute={"/payment"}></NextButton>;
	return (
		<BookingCommon proceedButton={nextBtn}>
			<QuestionList />
		</BookingCommon>
	);
};

export default BookingQuestions;
