import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import { fonts } from '../../../styles/fonts';
import Loading from '../../common/Loading';
import ErrorMessage from '../common/ErrorView';
import ConsultantItem from './ConsultantItem';

import errorMessages from '../../../locales/en/ErrorMessages.json';
//This is the consultant card component that renders one of 3 things.
//1.An error message if there is no consultants that match that criteria,
//2.another error message that is when a fetch request fails.
//3.he last return statement just returns the card that shows the consultant
const ConsultantCard = ({ consultantData, isLoading, errorMessage }) => {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}

	// Check if there is no consultant data
	if (consultantData.length === 0) {
		// Return Loading component if still loading, otherwise display an error message
		return isLoading ? (
			<View style={styles.centeredContainer}>
				<Loading />
			</View>
		) : (
			<View style={styles.errorViewContainer}>
				<Text style={styles.errorMessageText}>
					{errorMessages.errorConsultingSearching}
				</Text>
			</View>
		);
	}

	// Check if there is an error message, display the ErrorMessage component this is a different error. This would be a fetch error
	if (errorMessage) {
		return (
			<ErrorMessage
				fetchError={errorMessage}
				errorMessage={errorMessage}
			/>
		);
	}

	// If neither fonts are loading, there is no data, nor an error, display the consultant list
	return isLoading ? (
		<View style={styles.centeredContainer}>
			<Loading />
		</View>
	) : (
		<View style={styles.container}>
			{consultantData.map((consultant) => (
				<ConsultantItem key={consultant.id} consultant={consultant} />
			))}
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	errorViewContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing.medium,
		backgroundColor: theme.colors.red.delete,
		borderRadius: theme.spacing.small,
		borderWidth: 1,
		borderColor: theme.colors.red.delete,
		marginTop: '50%',
	},
	errorMessageText: {
		color: theme.colors.white,
		fontSize: theme.typography.mediumBody.fontSize,
		fontFamily: 'Roboto-Medium',
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		backgroundColor: theme.colors.background,
	},
	centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: '50%',
	},
});

export default ConsultantCard;
