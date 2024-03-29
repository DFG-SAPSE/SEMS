// ConsultantItem.js
import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { theme } from '../../../styles/theme';
import { BookingContext } from '../../../context/BookingContext';

const ConsultantCardItem = ({ consultant }) => {
	const { changeConsultant } = useContext(BookingContext);

	const handlePress = async () => {
		// Although we have already had the consultant data
		// we fetch whenever the user chooses this consultant
		// to get the newest data. Because between the first time
		// this consultant is fetched and the time the user view the
		// data of this consultant, somebody might have booked a meeting with them
		const res = await changeConsultant(consultant.id);
		if (res.ok) {
			router.push('/ConsultantProfile');
		} else {
			console.error('Cannot fetch consultant data');
		}
	};

	return (
		<TouchableOpacity
			onPress={handlePress}
			style={styles.consultantCardContainer}
		>
			<View style={styles.consultantInfoContainer}>
				<Image
					resizeMode="contain"
					source={{ uri: consultant.photoURL }}
					style={styles.consultantImage}
				/>
				<View style={styles.textInfoContainer}>
					<Text style={styles.consultantNameText}>
						{consultant.name}
					</Text>
				</View>
				<View style={styles.textInfoContainer}>
					<Text style={styles.companyNameText}>
						{consultant.enterpriseRole}
					</Text>
				</View>
				<View style={styles.textInfoContainer}>
					<Text
						style={styles.industryText}
						numberOfLines={1}
						ellipsizeMode="tail"
					>
						{consultant.expertise[0]} {consultant.expertise[1]}
					</Text>
				</View>
				<View style={styles.consultantSessionInfo}>
					<View style={styles.sessionInfoBorderTop} />
					<View style={styles.sessionInfoTextContainer}>
						<Text style={styles.sessionInfoText}>
							{consultant.sessions}
						</Text>
						<Text style={styles.sessionInfoText}>
							Booked Meetings {consultant.bookedMeetings.length}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

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

export default ConsultantCardItem;
