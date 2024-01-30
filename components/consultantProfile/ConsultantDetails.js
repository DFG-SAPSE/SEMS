import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ConsultantDetails = () => {
	return (
		<>
			<View style={styles.consultantInformation}>
				<View style={styles.TitleContainer}>
					<Text style={styles.title}>Position</Text>
					<Text style={styles.subTitle}>President</Text>
				</View>
				<View style={styles.TitleContainer}>
					<Text style={styles.title}>Specialty</Text>
					<Text style={styles.subTitle}>Community Organizing</Text>
				</View>
				<View style={styles.TitleContainer}>
					<Text style={styles.title}>About</Text>
					<Text style={styles.subTitle}>
						I'm a passionate entrepreneur and the driving force
						behind our enterprise, which is dedicated to connecting
						companies and fostering collaboration for mutual
						success.
					</Text>
				</View>
				<View style={styles.TitleContainer}>
					<Text style={styles.title}>Years of experience</Text>
					<Text style={styles.subTitle}>3</Text>
				</View>
				<View style={styles.TitleContainer}>
					<Text style={styles.title}>General consultation</Text>
					<Text style={styles.subTitle}>Yes</Text>
				</View>
				<View style={styles.TitleContainer}>
					<Text style={styles.title}>Special consultation</Text>
					<Text style={styles.subTitle}>Yes</Text>
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
		paddingVertical: theme.spacing.small,
	},
	TitleContainer: {
		letterSpacing: 0.1,
		marginBottom: theme.spacing.medium,
	},
	subTitle: {
		fontFamily: 'Roboto-Regular',
		color: theme.colors.text.dark,
		fontSize: theme.typography.smallBody.fontSize,
	},
	title: {
		color: theme.colors.text.gray,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.tinyBody.fontSize,
		marginVertical: theme.spacing.tiny,
	},
});

export default ConsultantDetails;
