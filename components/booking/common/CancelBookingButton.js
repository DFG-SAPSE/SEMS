import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import Button from '../../common/Button';
import { BookingContext } from '../../../context/BookingContext';
import { theme } from '../../../styles/theme';

const CancelBookingButton = () => {
	const { showModal } = useContext(BookingContext);
	return (
		<Button
			onPress={showModal}
			title={'Cancel'}
			customBtnStyle={styles.button}
			customTextStyle={styles.text}
		/>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.colors.white,
		width: '46%',
		borderRadius: 32,
		paddingVertical: theme.spacing.medium,
	},
	text: {
		color: theme.colors.primary.default,
	},
});

export default CancelBookingButton;
