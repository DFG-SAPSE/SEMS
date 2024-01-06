import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from '../../styles/fonts';

const ConsultantProfileDetails = () => {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<>
			<View style={styles.consultantInformation}>
				<View style={styles.titleDetailContainer}>
					<Text style={styles.titleDetail}>Social enterprise</Text>
				</View>
				<View style={styles.socialEntepriseInfo}>
					<Text style={styles.subTitleLink}>EcoHarvest</Text>
				</View>

				<View style={styles.titleDetailContainer}>
					<Text style={styles.titleDetail}>Industry</Text>
				</View>
				<View style={styles.view11}>
					<Text style={styles.subTitle}>Community Development</Text>
				</View>

				<View style={styles.titleDetailContainer}>
					<Text style={styles.titleDetail}>
						Consultation sessions
					</Text>
				</View>
				<View style={styles.view13}>
					<Text style={styles.subTitle}>39</Text>
				</View>
			</View>
		</>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	consultantInformation: {
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: theme.colors.white,
		alignSelf: 'stretch',
		display: 'flex',
		flexDirection: 'column',
		paddingHorizontal: theme.spacing.large,
		paddingTop: theme.spacing.small,
		paddingBottom: theme.spacing.medium,
	},
	socialEntepriseInfo: {
		color: '#00367C',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	titleDetail: {
		color: theme.colors.text.gray,
		fontFamily: 'Roboto-Medium',
		fontSize: theme.typography.tinyBody.fontSize,
		marginVertical: theme.spacing.tiny,
		letterSpacing: 0.1,
	},
	titleDetailContainer: {
		color: '#999',
		letterSpacing: 0.1,
		marginTop: 10,
		whiteSpace: 'nowrap',
		font: '700 12px/167% Roboto, sans-serif ',
	},
	IndustryTitle: {
		color: '#999',
		letterSpacing: 0.1,
		marginTop: 10,
		whiteSpace: 'nowrap',
		font: '700 12px/167% Roboto, sans-serif ',
	},
	view11: {
		color: '#000',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	view13: {
		color: '#000',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	subTitle: {
		fontFamily: 'Roboto-Medium',
		color: theme.colors.text.dark,
	},
	subTitleLink: {
		fontFamily: 'Roboto-Medium',
		color: theme.colors.primary.dark,
	},
});

export default ConsultantProfileDetails;
