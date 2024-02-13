import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const PaymentMethod = ({ handleSelectPaymentMethod, methodName, logo }) => {
	return (
		<Pressable
			style={styles.paymentOptionContainer}
			onPress={() => handleSelectPaymentMethod(methodName)}
		>
			{logo(styles.logoSize)}
			<Text style={styles.option}>{methodName}</Text>
		</Pressable>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	paymentOptionContainer: {
		padding: theme.spacing.medium,
		marginTop: theme.spacing.medium,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		flexDirection: 'row',
	},
	option: { marginLeft: 12, ...theme.typography.mediumBody },
	logoSize: 20,
});

export default PaymentMethod;
