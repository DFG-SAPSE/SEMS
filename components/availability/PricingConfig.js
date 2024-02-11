import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { theme } from '../../styles/theme';

const PricingConfig = ({ meetingPrice, setMeetingPrice }) => {
	return (
		<View style={styles.configContainer}>
			<View>
				<Text style={styles.pricingHeader}>Price per meeting</Text>
			</View>
			<View>
				<TextInput
					style={styles.configInput}
					onChangeText={setMeetingPrice}
					value={meetingPrice.toString()}
					keyboardType="numeric"
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	configContainer: {
		marginBottom: theme.spacing.xlarge,
	},
	pricingHeader: {
		...theme.typography.mediumBody,
		opacity: 0.6,
		marginBottom: theme.spacing.small,
	},
	configInput: {
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 4,
		padding: theme.spacing.mediumSmall,
		...theme.typography.mediumBody,
	},
});
export default PricingConfig;
