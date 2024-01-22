import React, { createContext, useEffect, useState } from 'react';

import { fetchConsultantById } from '../services/user';
import { finalizeBooking } from '../services/scheduling';

export const BookingContext = createContext(null);

const DEFAULT_BOOKING_DATA = {
	service: 0,
	date: null,
	startTime: null,
	endTime: null,
	answers: [],
	fileAttachments: [],
	payment: {
		paymentMethod: '',
		// other information TBD
		// TODO: consult with payment team
	},
};

const DEFAULT_CONSULTANT_DATA = {
	consultantId: '',
	name: '',
	avatar: '',
	title: '',
	company: '',
	services: [],
};

const DEFAULT_MODAL_VISIBLE = false;

const BookingProvider = ({ children }) => {
	// Booking information user provides
	const [bookingData, setBookingData] = useState(DEFAULT_BOOKING_DATA);

	// Information about the consultant that user is booking
	const [consultantData, setConsultantData] = useState(
		DEFAULT_CONSULTANT_DATA,
	);

	// Control the ConfirmCancelModal
	const [modalVisible, setModalVisible] = useState(DEFAULT_MODAL_VISIBLE);

	// After we book the meeting, we save the meeting id in case user wants to
	// reschedule or cancel
	const [recentlyBookedMeetingId, setRecentlyBookedMeetingId] =
		useState(null);

	/**
	 * TODO
	 * This is a dummy useEffect. In the future, the moment social entrepreneurs
	 * choose a consultant, the consulting filtering team has to call
	 * `changeConsultant` function below to update the consultantProfile
	 * and the list of questions. Delete this dummy when the consultant filtering
	 * team has done so.
	 */
	useEffect(() => {
		changeConsultant('123');
	}, []);

	const chooseDate = (date) => {
		setBookingData((prev) => ({ ...prev, date }));
	};

	const chooseTimeSlot = (startTime, endTime) => {
		setBookingData((prev) => ({ ...prev, startTime, endTime }));
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
		console.log('consultantData', consultantData);
		const res = await finalizeBooking(bookingData, consultantData.id);
		if (res.ok) {
			// setRecentlyBookedMeetingId(data.meetingId);
		} else console.error('Error booking', res.error);
		return { ok: res.ok };
	};

	const changeConsultant = async (consultantId) => {
		const userProfile = await fetchConsultantById(consultantId);
		setConsultantData(userProfile);
	};

	const showModal = () => setModalVisible(true);
	const hideModal = () => setModalVisible(false);

	const resetBookingContext = () => {
		setBookingData(DEFAULT_BOOKING_DATA);
		setConsultantData(DEFAULT_CONSULTANT_DATA);
		setModalVisible(DEFAULT_MODAL_VISIBLE);
		// Dummy, delete once consultant filtering team implements their part
		changeConsultant('123');
	};

	// The context value that will be supplied to any descendants of this provider
	const contextValue = {
		bookingData,
		consultantData,
		modalVisible,
		recentlyBookedMeetingId,
		chooseDate,
		chooseTimeSlot,
		updateAnswers,
		uploadFile,
		updatePaymentMethod,
		book,
		changeConsultant,
		setConsultantData,
		showModal,
		hideModal,
		resetBookingContext,
	};

	return (
		<BookingContext.Provider value={contextValue}>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingProvider;
