import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { BookingContext } from '../../../context/BookingContext';
import { theme } from '../../../styles/theme';
import WarningIcon from '../../../assets/svg/WarningIcon';
const Exceptions = () => {
	const { consultantData } = useContext(BookingContext);
	const { exceptions } = consultantData;

	return (
		<View style={styles.exceptionsFullContainer}>
			<View style={styles.exceptionTextContainer}>
				<WarningIcon width={30} height={30} color="red" />
				<Text
					style={{
						...theme.typography.largeBold,
						marginLeft: theme.spacing.small,
					}}
				>
					Exceptions
				</Text>
			</View>
			<View style={styles.exceptionsContainer}>
				<Text style={styles.exceptionInput}>{exceptions}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	exceptionTextContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'left',
		alignItems: 'center',
	},
	exceptionsFullContainer: {
		marginTop: theme.spacing.medium,
		marginHorizontal: 16,
		padding: theme.spacing.medium,
		borderColor: theme.colors.black,
		borderWidth: 2,
		borderRadius: theme.spacing.large,
		backgroundColor: '#ffe066',
	},
	exceptionsContainer: {
		marginVertical: theme.spacing.small,
	},
	exceptionInput: {
		fontSize: theme.typography.smallBody.fontSize,
	},
});

export default Exceptions;
