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
			<View style={styles.container}>
				<View style={styles.detailContainer}>
					<Text style={styles.detailTitle}>Social Enterprise</Text>
					<Text style={styles.detailSubTitleLink}>EcoHarvest</Text>
				</View>

				<View style={styles.detailContainer}>
					<Text style={styles.detailTitle}>Industry</Text>
					<Text style={styles.detailSubTitle}>
						Community Development
					</Text>
				</View>

				<View style={styles.detailContainer}>
					<Text style={styles.detailTitle}>
						Consultation Sessions
					</Text>
					<Text style={styles.detailSubTitle}>39</Text>
				</View>
			</View>
		</>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		paddingHorizontal: theme.spacing.large,
		paddingTop: theme.spacing.small,
		paddingBottom: theme.spacing.medium,
		shadowOffset: { width: 0, height: 0.1 },
		shadowOpacity: 0.05,
	},
	detailTitle: {
		color: theme.colors.text.gray,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.tinyBody.fontSize,
		marginVertical: theme.spacing.tiny,
		letterSpacing: 0.1,
	},
	detailContainer: {
		letterSpacing: 0.1,
		marginBottom: theme.spacing.mediumSmall,
		whiteSpace: 'nowrap',
	},
	detailSubTitle: {
		fontFamily: 'Roboto-Regular',
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		fontSize: theme.typography.smallBody.fontSize,
	},
	detailSubTitleLink: {
		fontFamily: 'Roboto-Regular',
		color: theme.colors.primary.dark,
		letterSpacing: 0.1,
		fontSize: theme.typography.smallBody.fontSize,
	},
});

export default ConsultantProfileDetails;
