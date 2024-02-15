import React, { createContext, useState } from 'react';

import { fetchConsultantById } from '../services/user';
import { finalizeBooking } from '../services/scheduling';

const DEFAULT_BOOKING_DATA = {};
const DEFAULT_CONSULTANT_DATA = {};
const DEFAULT_MODAL_VISIBLE = false;

export const BookingContext = createContext(null);

const BookingProvider = ({ children }) => {
	// Booking information user provides
	const [bookingData, setBookingData] = useState(DEFAULT_BOOKING_DATA);
	// Information about the consultant that user is booking
	const [consultantData, setConsultantData] = useState(
		DEFAULT_CONSULTANT_DATA,
	);
	// Control the ConfirmCancelModal
	const [modalVisible, setModalVisible] = useState(DEFAULT_MODAL_VISIBLE);

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

	const bookAppointment = async () => {
		const res = await finalizeBooking(
			{ ...bookingData },
			consultantData.id,
		);
		if (res.ok) {
			resetBookingContext();
		} else console.error('Error booking', res.error);
		return { ok: res.ok, data: bookingData };
	};

	const changeConsultant = async (consultantId) => {
		const res = await fetchConsultantById(consultantId);
		if (res.ok) {
			setConsultantData(res.data);
		}

		return res;
	};

	const showModal = () => setModalVisible(true);
	const hideModal = () => setModalVisible(false);

	const resetBookingContext = () => {
		setBookingData(DEFAULT_BOOKING_DATA);
		setConsultantData(DEFAULT_CONSULTANT_DATA);
		setModalVisible(DEFAULT_MODAL_VISIBLE);
	};

	// The context value that will be supplied to any descendants of this provider
	const contextValue = {
		bookingData,
		consultantData,
		modalVisible,
		chooseDate,
		chooseTimeSlot,
		updateAnswers,
		uploadFile,
		updatePaymentMethod,
		bookAppointment,
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
