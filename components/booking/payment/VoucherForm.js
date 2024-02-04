import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const VoucherForm = ({ voucher, setVoucher, handleApplyVoucher }) => {
	return (
		<View style={styles.voucherContainer}>
			<Text style={styles.voucherTitle}>Voucher</Text>
			<TextInput
				value={voucher}
				onChangeText={setVoucher}
				placeholder="Voucher number"
				style={styles.voucherInput}
			/>

			<View style={styles.voucherInfoText}>
				<Text>You have 2 vouchers available. </Text>
				<Text
					onPress={handleApplyVoucher}
					style={styles.applyVoucherText}
				>
					Apply voucher
				</Text>
			</View>
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	voucherContainer: {
		marginBottom: theme.spacing.xlarge,
	},
	voucherTitle: {
		...theme.typography.mediumBodyBold,
		marginBottom: theme.spacing.small,
	},
	voucherInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	},
	voucherInfoText: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	applyVoucherText: {
		textDecorationLine: 'underline',
		color: theme.colors.primary.default,
	},
});

export default VoucherForm;
