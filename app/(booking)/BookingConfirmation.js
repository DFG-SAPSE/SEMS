import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BookingReview from './BookingReview';
import { BookingContext } from '../../context/BookingContext';
import { cancelMeeting } from '../../services/scheduling';

const BookingConfirmation = () => {
	const { consultantData, recentlyBookedMeetingId, resetBookingContext } =
		useContext(BookingContext);

	const handleCancelMeeting = async () => {
		await cancelMeeting(recentlyBookedMeetingId);
	};

	useEffect(() => {
		return () => {
			resetBookingContext();
		};
	}, [resetBookingContext]);

	const footerComponent = (
		<>
			<Divider />
			<View style={styles.cancelMeetingContainer}>
				<Text
					style={styles.cancelMeetingLink}
					onPress={handleCancelMeeting}
				>
					Cancel meeting
				</Text>
			</View>
		</>
	);

	return (
		<BookingReview
			pageTitle={'Booking confirmation'}
			footerComponent={footerComponent}
		>
			<View style={styles.container}>
				<Text style={styles.mainConfirm}>
					You're going to meet {consultantData.name}!
				</Text>
				<Text style={styles.adviceText}>
					Here's the meeting link:{' '}
					{consultantData.permanentMeetingLink}. Please consider add
					this event to your calendar.
				</Text>
			</View>
		</BookingReview>
	);
};

import { theme } from '../../styles/theme';
import Divider from '../../components/common/Divider';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		paddingTop: theme.spacing.medium,
		paddingBottom: theme.spacing.medium,
		marginBottom: theme.spacing.medium,
	},
	section: {
		marginTop: theme.spacing.medium,
	},
	mainConfirm: {
		...theme.typography.mediumBodyBold,
		marginBottom: theme.spacing.medium,
	},
	adviceText: {
		...theme.typography.mediumBody,
	},
	cancelMeetingContainer: {
		marginVertical: theme.spacing.xlarge,
	},
	cancelMeetingLink: {
		textDecorationLine: 'underline',
		color: theme.colors.primary.default,
		...theme.typography.mediumBody,
	},
	divider: {
		height: 1,
		backgroundColor: '#e1e1e1',
		marginVertical: 10,
	},
});

export default BookingConfirmation;
