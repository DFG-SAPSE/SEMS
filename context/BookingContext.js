import React, { createContext, useEffect, useState } from "react";

import { fetchUserProfile } from "../services/user";
import { finalizeBooking } from "../services/scheduling";

export const BookingContext = createContext(null);

const BookingProvider = ({ children }) => {
	const [bookingData, setBookingData] = useState({
		startTime: null,
		endTime: null,
		answers: [],
		fileAttachments: [],
		payment: {
			paymentMethod: "",
			// other information TBD
			// TODO: consult with payment team
		},
	});

	const [consultantData, setConsultantData] = useState({
		consultantId: "",
		name: "",
		avatar: "",
		title: "",
		company: "",
		question: [],
	});

	/**
	 * TODO
	 * This is a dummy useEffect. In the future, the moment social entrepreneurs
	 * choose a consultant, the consulting filtering team has to call
	 * `changeConsultant` function below to update the consultantProfile
	 * and the list of questions. Delete this dummy when the consultant filtering
	 * team has done so.
	 */
	useEffect(() => {
		changeConsultant("123");
	}, []);

	const chooseTimeSlot = (startTime, endTime) => {
		setBookingData((prev) => ({ ...prev, startTime, endTime }));
	};

	const changeConsultant = async (consultantId) => {
		const userProfile = await fetchUserProfile(consultantId);
		setConsultantData(userProfile);
	};

	const updateAnswers = (answers) => {
		setBookingData((prev) => ({ ...prev, answers }));
	};

	const uploadFile = (fileAttachments) => {
		/**
		 * TODO
		 * Upload file to Cloud storage, retrieve link and add link to fileAttachments
		 * Alternatively, store file in local storage, save link to fileAttachments
		 * upload to cloud storage when submit form
		 */
		setBookingData((prev) => ({ ...prev, fileAttachments }));
	};

	const updatePaymentMethod = (paymentMethod) => {
		setBookingData((prev) => ({
			...prev,
			payment: { ...prev.payment, paymentMethod },
		}));
	};

	// TODO: Payment team write the event handler to handle other information
	// except for the payment method

	const book = async () => {
		const res = await finalizeBooking(bookingData);
		if (res.ok) {
			// TODO: drop the booking Stack to return to consultant filtering screen
		}
	};

	// The context value that will be supplied to any descendants of this provider
	const contextValue = {
		bookingData,
		consultantData,
		chooseTimeSlot,
		changeConsultant,
		updateAnswers,
		uploadFile,
		updatePaymentMethod,
		book,
	};

	return (
		<BookingContext.Provider value={contextValue}>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingProvider;
