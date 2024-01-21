import React, { useContext } from 'react';
import { Stack, router } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { UserContext } from '../../context/UserContext';
import Button from '../../components/common/Button';
import { theme } from '../../styles/theme';
import { convertMinutesToTime } from '../../utils/dateAndTime';

const MeetingDashboard = () => {
	const { userData } = useContext(UserContext);

	const renderMeeting = (meeting, index) => {
		const serviceName = userData.services[meeting.service].name;
		return (
			<View style={styles.meetingContainer} key={index}>
				<View style={styles.meetingInfoContainer}>
					<Text style={styles.meetingText}>
						{serviceName} with {meeting.invitee}{' '}
					</Text>
					<Text style={styles.meetingTimeText}>
						{meeting.date} at{' '}
						{convertMinutesToTime(meeting.startTime)} -{' '}
						{convertMinutesToTime(meeting.endTime)}
					</Text>
				</View>
				<View style={styles.joinButtonWrapper}>
					<Button title={'Join'} customBtnStyle={styles.joinButton} />
				</View>
			</View>
		);
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Stack.Screen options={{ headerShown: false }} />

				<Text style={styles.welcomeText}>Upcoming meetings</Text>

				<View style={styles.meetingListContainer}>
					{userData.bookedMeetings ? (
						userData.bookedMeetings.map((meeting, index) =>
							renderMeeting(meeting, index),
						)
					) : (
						<Text style={{ ...theme.typography.mediumBody }}>
							You currently have no meeting.
						</Text>
					)}
				</View>

				{/* {userData.isConsultant ? null : ( */}
				<Button
					title={'Schedule New Meeting'}
					customBtnStyle={styles.scheduleButton}
					onPress={() => {
						// Push to the consultant profile page
						router.push('/SearchConsultant');
					}}
				/>
				{/* )} */}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colors.background.white,
	},
	container: {
		padding: theme.spacing.large,
	},
	welcomeText: {
		...theme.typography.extraLargeBold,
		marginVertical: theme.spacing.xlarge,
	},
	upcomingMeetingsText: {
		...theme.typography.extraLarge,
	},
	meetingListContainer: {
		marginVertical: theme.spacing.xlarge,
	},
	meetingContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: theme.spacing.xlarge,
	},
	meetingInfoContainer: {
		width: '70%',
	},
	meetingText: {
		...theme.typography.mediumBodyBold,
		marginBottom: theme.spacing.small,
	},
	meetingTimeText: {
		...theme.typography.mediumBody,
	},
	joinButtonWrapper: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	joinButton: {
		paddingVertical: theme.spacing.small,
		paddingHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
	scheduleButton: {
		paddingVertical: theme.spacing.mediumSmall,
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
});

export default MeetingDashboard;
