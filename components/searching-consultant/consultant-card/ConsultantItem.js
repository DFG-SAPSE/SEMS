// ConsultantItem.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
//This is just responsible for the consunltants card that displays their information. This is just a UI to be filled with data
const ConsultantItem = ({ consultant }) => (
	<View style={styles.consultantCardContainer}>
		<View style={styles.consultantInfoContainer}>
			<Image
				resizeMode="contain"
				source={{ uri: consultant.uri }}
				style={styles.consultantImage}
			/>
			<View style={styles.textInfoContainer}>
				<Text style={styles.consultantNameText}>{consultant.name}</Text>
			</View>
			<View style={styles.textInfoContainer}>
				<Text style={styles.companyNameText}>
					{consultant.companyName}
				</Text>
			</View>
			<View style={styles.textInfoContainer}>
				<Text
					style={styles.industryText}
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{consultant.industry}
				</Text>
			</View>
			<View style={styles.consultantSessionInfo}>
				<View style={styles.sessionInfoBorderTop} />
				<View style={styles.sessionInfoTextContainer}>
					<Text style={styles.sessionInfoText}>
						{consultant.sessions}
					</Text>
					<Text style={styles.sessionInfoText}>
						{consultant.reviews}
					</Text>
				</View>
			</View>
		</View>
	</View>
);

export default ConsultantItem;

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	consultantSessionInfo: {
		position: 'relative',
		marginTop: theme.spacing.small,
	},
	sessionInfoBorderTop: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		borderBottomWidth: 0.5,
		borderBottomColor: theme.colors.border,
	},
	sessionInfoTextContainer: {
		flexDirection: 'row',
		marginTop: theme.spacing.small,
	},
	sessionInfoText: {
		color: theme.colors.text.gray,
		fontSize: theme.typography.tinyBody.fontSize,
		fontFamily: 'Roboto-Bold',
		marginRight: theme.spacing.tiny,
		marginBottom: theme.spacing.tiny,
	},
	consultantInfoContainer: {
		padding: theme.spacing.small,
	},
	consultantImage: {
		width: '100%',
		aspectRatio: 1,
	},
	textInfoContainer: {
		marginTop: theme.spacing.small,
	},
	consultantNameText: {
		fontSize: theme.typography.mediumBody.fontSize,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Medium',
	},
	companyNameText: {
		fontSize: theme.typography.smallBody.fontSize,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Regular',
	},
	industryText: {
		color: theme.colors.text.gray,
		fontSize: theme.typography.tinyBody.fontSize,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Regular',
		height: theme.spacing.medium,
		overflow: 'hidden',
	},
	consultantCardContainer: {
		width: '46%',
		marginVertical: theme.spacing.medium,
		borderWidth: 1,
		borderRadius: theme.spacing.small,
		borderColor: theme.colors.border,
		overflow: 'hidden',
		backgroundColor: theme.colors.white,
	},
});
