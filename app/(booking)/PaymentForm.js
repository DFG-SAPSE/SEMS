import React, { useState,useContext } from 'react';
import {
	StyleSheet
} from 'react-native';
import { BookingContext } from '../../context/BookingContext';
import CardForm from '../../components/booking/payment/CardForm';
import GCashForm from '../../components/booking/payment/GCashForm';

const PaymentForm = () => {
	const { bookingData, updatePaymentMethod } = useContext(BookingContext);
	return (
		bookingData.payment.paymentMethod == "Card"? <CardForm/>:<GCashForm/>
	)
};

const styles = StyleSheet.create({
});

export default PaymentForm;
