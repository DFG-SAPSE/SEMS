import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentMethod = ({ handleSelectPaymentMethod, methodName }) => {
	return (
		<TouchableOpacity
			style={styles.paymentOption}
			onPress={() => handleSelectPaymentMethod(methodName)}
		>
			<Text>{methodName}</Text>
		</TouchableOpacity>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	paymentOption: {
		padding: theme.spacing.medium,
		marginTop: theme.spacing.medium,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
	},
});

export default PaymentMethod;
