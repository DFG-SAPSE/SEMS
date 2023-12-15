import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from '../../styles/fonts';

const ConsultantCard = ({ consultantData, isLoading }) => {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return undefined;
	}

	const ConsultantMessage = consultantData[0];

	if (ConsultantMessage?.message) {
		return isLoading ? null : (
			<View style={styles.errorContainer}>
				<Text style={styles.errorText}>
					{ConsultantMessage.message}
				</Text>
			</View>
		);
	}

	return isLoading ? null : (
		<View style={styles.container}>
			{consultantData.map((consultant, index) => (
				<View key={index} style={styles.cardContainer}>
					<View style={styles.marginContainer}>
						<Image
							resizeMode="contain"
							source={{ uri: consultant.uri }}
							style={styles.consultantImage}
						/>
						<View style={styles.textContentContainer}>
							<Text style={styles.nameText}>
								{consultant.name}
							</Text>
						</View>
						<View style={styles.textContentContainer}>
							<Text style={styles.companyText}>
								{consultant.companyName}
							</Text>
						</View>
						<View style={styles.textContentContainer}>
							<Text
								style={styles.specializationText}
								numberOfLines={1}
								ellipsizeMode="tail"
							>
								{consultant.industry}
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
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#ff5252',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#ff0000',
		marginTop: '50%',
	},
	errorText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
	sessionInfoContainer: {
		position: 'relative',
		marginTop: theme.spacing.small,
	},
	borderTop: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		borderBottomWidth: 0.5,
		borderBottomColor: theme.colors.gray.border,
	},
	sessionTextContainer: {
		flexDirection: 'row',
		marginTop: theme.spacing.small,
	},
	sessionText: {
		color: theme.colors.gray.text,
		fontSize: theme.typography.tinyBody.fontSize,
		fontFamily: 'Roboto-Bold',
		marginRight: theme.spacing.tiny,
		marginBottom: theme.spacing.tiny,
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		backgroundColor: theme.colors.background,
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
		color: theme.colors.gray.text,
		fontSize: 13,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Regular',
		height: theme.spacing.medium,
		overflow: 'hidden',
	},
	cardContainer: {
		width: '46%',
		marginVertical: theme.spacing.medium,
		borderWidth: 1,
		borderRadius: theme.spacing.small,
		borderColor: theme.colors.gray.border,
		overflow: 'hidden',
		backgroundColor: theme.colors.white,
	},
});

export default ConsultantCard;
