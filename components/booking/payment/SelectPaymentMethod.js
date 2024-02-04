import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import PaymentMethod from './PaymentMethod';

const SelectPaymentMethod = ({ handleSelectPaymentMethod }) => {
	const paymentMethods = [
		'Credit/Debit card',
		'PayPal',
		'Maya',
		'GCash',
		'Pre-stored Account',
	];

	const logos = [
		(size) => <FontAwesomeIcon name="credit-card" size={size} />,
		(size) => <FontAwesomeIcon name="paypal" size={size} />,
		(size) => <MaterialIcon name="account" size={size} />,
		(size) => <MaterialIcon name="account" size={size} />,
		(size) => <AntIcon name="wallet" size={size} />,
	];

	return (
		<View style={styles.paymentContainer}>
			<Text style={styles.paymentTitle}>Payment method</Text>
			{paymentMethods.map((method, index) => (
				<PaymentMethod
					key={index}
					handleSelectPaymentMethod={handleSelectPaymentMethod}
					methodName={method}
					logo={logos[index]}
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
		...theme.typography.mediumHeader,
		fontWeight: 'bold',
		color: theme.colors.text.gray,
	},
});

export default SelectPaymentMethod;
