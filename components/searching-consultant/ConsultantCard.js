import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';

const consultantData = [1, 2, 3, 4, 5, 6, 7, 8];

const ConsultantCard = () => {
	const [fontsLoaded] = useFonts({
		'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
	});

	if (!fontsLoaded) {
		return undefined;
	}

	return (
		<View style={styles.container}>
			{consultantData.map((consultant, index) => (
				<View key={index} style={styles.cardContainer}>
					<View style={styles.marginContainer}>
						<Image
							resizeMode="contain"
							source={{
								uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/131bb728735b5613ad46152ae2fb8afe4ea761c73ca55bb4d43f36db7875ce9d?apiKey=978f41e0131a442f8daf873f3d5553aa&',
							}}
							style={styles.consultantImage}
						/>
						<View style={styles.textContentContainer}>
							<Text style={styles.nameText}>Andrea Beatrice</Text>
						</View>
						<View style={styles.textContentContainer}>
							<Text style={styles.companyText}>GreenCycle</Text>
						</View>
						<View style={styles.textContentContainer}>
							<Text style={styles.specializationText}>
								Healthcare and Wellbeing
							</Text>
						</View>
						<View style={styles.sessionInfoContainer}>
							<View style={styles.borderTop} />
							<View style={styles.sessionTextContainer}>
								<Text style={styles.sessionText}>
									13 sessions
								</Text>
								<Text style={styles.sessionText}>
									(9 reviews)
								</Text>
							</View>
						</View>
					</View>
				</View>
			))}
		</View>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	sessionInfoContainer: {
		position: 'relative',
		marginTop: theme.spacing.small,
	},
	borderTop: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.gray,
	},
	sessionTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.spacing.small,
	},
	sessionText: {
		color: theme.colors.gray,
		fontSize: theme.typography.smallBody.fontSize,
		fontFamily: 'Roboto-Bold',
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	marginContainer: {
		padding: theme.spacing.small,
	},
	consultantImage: {
		width: '100%',
		aspectRatio: 1,
	},
	textContentContainer: {
		marginTop: theme.spacing.small,
	},
	nameText: {
		fontSize: theme.typography.mediumBody.fontSize,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Medium',
	},
	companyText: {
		fontSize: theme.typography.smallBody.fontSize,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Regular',
	},
	specializationText: {
		color: theme.colors.gray,
		fontSize: 13,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Regular',
	},
	cardContainer: {
		width: '46%',
		marginVertical: theme.spacing.medium,
		borderWidth: 1,
		borderRadius: theme.spacing.small,
		borderColor: theme.colors.gray,
		overflow: 'hidden',
	},
});

export default ConsultantCard;
