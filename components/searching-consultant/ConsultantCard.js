import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';
const data = [1, 2, 3, 4, 5, 6, 7, 8];

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
			{data.map((item, index) => (
				<View key={index} style={styles.box}>
					<View style={styles.margin}>
						<Image
							resizeMode="contain"
							source={{
								uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/131bb728735b5613ad46152ae2fb8afe4ea761c73ca55bb4d43f36db7875ce9d?apiKey=978f41e0131a442f8daf873f3d5553aa&',
							}}
							style={styles.consultantImage}
						/>
						<View style={styles.textContent}>
							<Text style={styles.textSize}>Andrea Beatrice</Text>
						</View>
						<View style={styles.textContent}>
							<Text style={styles.textSizeCompany}>
								GreenCycle
							</Text>
						</View>
						<View style={styles.textContent}>
							<Text style={styles.colorText}>
								Healthcare and Wellbeing
							</Text>
						</View>
						<View style={styles.sessionAmount}>
							<View style={styles.borderTop} />
							<View style={styles.textContainer}>
								<Text style={styles.text}>13 sessions</Text>
								<Text style={styles.text}>(9 reviews)</Text>
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
	sessionAmount: {
		position: 'relative', // Required for absolute positioning of borderTop
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
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.spacing.small, // Adjust as needed for spacing
	},
	text: {
		color: 'gray',
		fontSize: theme.typography.smallBody.fontSize,
		fontFamily: 'Roboto-Bold',
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	margin: {
		padding: theme.spacing.small,
	},
	consultantImage: {
		width: '100%',
		aspectRatio: 1,
	},
	textContent: {
		marginTop: theme.spacing.small,
	},
	textSize: {
		fontSize: 14,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Medium',
	},
	textSizeCompany: {
		fontSize: 14,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Regular',
	},
	colorText: {
		color: theme.colors.gray,
		fontSize: 13,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Regular',
	},
	box: {
		width: '47%',
		marginVertical: theme.spacing.medium,
		borderWidth: 1,
		borderRadius: theme.spacing.small,
		borderColor: theme.colors.gray,
		overflow: 'hidden',
	},
});

export default ConsultantCard;
