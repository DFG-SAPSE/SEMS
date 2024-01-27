import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { theme } from '../../styles/theme';

const PricingConfig = ({ meetingPrice, setMeetingPrice }) => {
	return (
		<View style={styles.configContainer}>
			<View>
				<Text
					style={{
						...theme.typography.mediumHeader,
					}}
				>
					Price per meeting
				</Text>
			</View>
			<View style={styles.timeSlotContainer}>
				<TextInput
					style={styles.configInput}
					onChangeText={setMeetingPrice}
					value={meetingPrice}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	configContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: theme.spacing.xlarge,
	},
	timeSlotContainer: {
		width: '30%',
		flexDirection: 'flex-end',
	},
	configInput: {
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 4,
		padding: theme.spacing.small,
		...theme.typography.mediumBody,
	},
});
export default PricingConfig;
