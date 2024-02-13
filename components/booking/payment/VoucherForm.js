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

			<View style={styles.voucherInfoTextContainer}>
				<Text style={styles.voucherInfoText}>
					You have 2 vouchers available.{' '}
				</Text>
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
		...theme.typography.mediumHeader,
		marginBottom: theme.spacing.small,
		fontWeight: 'bold',
		color: theme.colors.text.gray,
	},
	voucherInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		padding: theme.spacing.medium,
		marginBottom: theme.spacing.medium,
		...theme.typography.mediumBody,
	},
	voucherInfoTextContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	voucherInfoText: {
		...theme.typography.mediumBody,
		color: theme.colors.text.gray,
	},
	applyVoucherText: {
		textDecorationLine: 'underline',
		color: theme.colors.primary.default,
		...theme.typography.mediumBody,
	},
});

export default VoucherForm;
