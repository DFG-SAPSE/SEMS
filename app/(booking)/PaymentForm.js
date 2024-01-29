import React, { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import CardForm from '../../components/booking/payment/CardForm';
import GCashForm from '../../components/booking/payment/GCashForm';

const PaymentForm = () => {
	const { bookingData } = useContext(BookingContext);
	return bookingData.payment.paymentMethod == 'Card' ? (
		<CardForm />
	) : (
		<GCashForm />
	);
};

export default PaymentForm;
