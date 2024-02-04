import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PaymentMethod from './PaymentMethod';

const SelectPaymentMethod = ({ handleSelectPaymentMethod }) => {
	const paymentMethods = ['Credit/Debit card', 'PayPal', 'Maya', 'GCash'];

	return (
		<View style={styles.paymentContainer}>
			<Text style={styles.paymentTitle}>Payment method</Text>
			{paymentMethods.map((method, index) => (
				<PaymentMethod
					key={index}
					handleSelectPaymentMethod={handleSelectPaymentMethod}
					methodName={method}
				/>
			))}
		</View>
	);
};

import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
	paymentContainer: {
		marginTop: theme.spacing.xlarge,
		marginBottom: theme.spacing.xlarge,
	},
	paymentTitle: {
		...theme.typography.mediumBodyBold,
	},
});

export default SelectPaymentMethod;
