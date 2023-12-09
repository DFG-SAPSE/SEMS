import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, router } from 'expo-router';
import { StackActions } from '@react-navigation/native';

import Button from '../../common/Button';
import { theme } from '../../../styles/theme';
import { BookingContext } from '../../../context/BookingContext';

const ConfirmButton = () => {
	const { book } = useContext(BookingContext);
	const navigation = useNavigation();

	const handleBookingConfirm = async () => {
		const res = await book();
		if (res.ok) {
			navigation.dispatch(StackActions.popToTop());
			router.push('/BookingConfirmation');
		}
	};

	return (
		<Button
			onPress={handleBookingConfirm}
			title={'Confirm'}
			customBtnStyle={styles.button}
		/>
	);
};

const styles = StyleSheet.create({
	button: {
		width: '46%',
		borderRadius: 32,
		paddingVertical: theme.spacing.medium,
	},
});

export default ConfirmButton;
