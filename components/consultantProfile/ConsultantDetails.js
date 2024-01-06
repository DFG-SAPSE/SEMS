import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ConsultantDetails = () => {
	return (
		<>
			<View style={styles.consultantInformation}>
				<View style={styles.view35}>
					<Text style={styles.title}>Position</Text>
				</View>
				<View style={styles.view36}>
					<Text style={styles.subTitle}>President</Text>
				</View>
				<View style={styles.view37}>
					<Text style={styles.title}>Specialty</Text>
				</View>
				<View style={styles.view38}>
					<Text style={styles.subTitle}>Community Organizing</Text>
				</View>
				<View style={styles.view39}>
					<Text style={styles.title}>About</Text>
				</View>
				<View style={styles.view40}>
					<Text style={styles.subTitle}>
						I'm a passionate entrepreneur and the driving force
						behind our enterprise, which is dedicated to connecting
						companies and fostering collaboration for mutual
						success.
					</Text>
				</View>
				<View style={styles.view41}>
					<Text style={styles.title}>Years of experience</Text>
				</View>
				<View style={styles.view42}>
					<Text style={styles.subTitle}>3</Text>
				</View>
				<View style={styles.view43}>
					<Text style={styles.title}>General consultation</Text>
				</View>
				<View style={styles.view44}>
					<Text style={styles.subTitle}>Yes</Text>
				</View>
				<View style={styles.view45}>
					<Text style={styles.title}>Special consultation</Text>
				</View>
				<View style={styles.view46}>
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
	view35: {
		color: '#999',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '700 12px/167% Roboto, sans-serif ',
	},
	view36: {
		color: '#000',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	view37: {
		color: '#999',
		letterSpacing: 0.1,
		marginTop: 16,
		whiteSpace: 'nowrap',
		font: '700 12px/167% Roboto, sans-serif ',
	},
	view38: {
		color: '#000',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	view39: {
		color: '#999',
		letterSpacing: 0.1,
		marginTop: 16,
		whiteSpace: 'nowrap',
		font: '700 12px/167% Roboto, sans-serif ',
	},
	view40: {
		color: '#000',
		letterSpacing: 0.1,
		font: '400 14px/20px Roboto, sans-serif ',
	},
	view41: {
		color: '#999',
		letterSpacing: 0.1,
		marginTop: 16,
		whiteSpace: 'nowrap',
		font: '700 12px/167% Roboto, sans-serif ',
	},
	view42: {
		color: '#000',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	view43: {
		color: '#999',
		letterSpacing: 0.1,
		marginTop: 16,
		whiteSpace: 'nowrap',
		font: '700 12px/167% Roboto, sans-serif ',
	},
	view44: {
		color: '#000',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	view45: {
		color: '#999',
		letterSpacing: 0.1,
		marginTop: 16,
		whiteSpace: 'nowrap',
		font: '700 12px/167% Roboto, sans-serif ',
	},
	view46: {
		color: '#000',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	subTitle: {
		fontFamily: 'Roboto-Medium',
		color: theme.colors.text.dark,
	},
	title: {
		color: theme.colors.text.gray,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.tinyBody.fontSize,
		marginVertical: theme.spacing.tiny,
	},
});

export default ConsultantDetails;
