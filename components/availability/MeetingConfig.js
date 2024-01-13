import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/theme';

const MeetingConfig = ({ children, currentlySelected, openPicker }) => {
	return (
		<View style={styles.configContainer}>
			<View>
				<Text
					style={{
						...theme.typography.mediumHeader,
					}}
				>
					{children}
				</Text>
			</View>
			<View style={styles.timeSlotContainer}>
				<TouchableOpacity
					style={styles.configInput}
					onPress={openPicker}
				>
					<Text style={styles.inputText}>
						{currentlySelected} minutes
					</Text>
				</TouchableOpacity>
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
	configInput: {
		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 4,
		padding: theme.spacing.small,
		flexDirection: 'row',
	},
	inputText: {
		...theme.typography.mediumBody,
	},
});
export default MeetingConfig;
