import React, { useContext, useState, useEffect } from 'react';
import { Stack, router } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { UserContext } from '../../context/UserContext';
import Button from '../../components/common/Button';
import { theme } from '../../styles/theme';
import { convertMinutesToTime } from '../../utils/dateAndTime';
import {
	fetchConsultantById,
	fetchEntrepreneurById,
} from '../../services/user';

const MeetingDashboard = () => {
	const { userData, handleCancelMeeting, fetchUserData } =
		useContext(UserContext);
	const [otherNames, setOtherNames] = useState([]);
	const [meetingLinks, setMeetingLinks] = useState([]);

	useEffect(() => {
		// We are fetching the name the other person and the meeting link
		// based on the field meeting.invitee, which is the document id
		// of the other person.
		// A better way to do this is to denormalize the database:
		// Every bookedMeeting should not only have the document id
		// of the other person, but also the name and the meeting link
		// That way we don't have to do this fetching upfront, which
		// might take time and is error prone
		const fetchMeetingData = async () => {
			const tempOtherNames = {};
			const tempMeetingLinks = {};

			const promises = userData.bookedMeetings.map(
				async (meeting, index) => {
					let fetchPersonById;
					if (userData.isConsultant)
						fetchPersonById = fetchEntrepreneurById;
					else fetchPersonById = fetchConsultantById;

					const res = await fetchPersonById(meeting.invitee);

					if (!res.ok) {
						tempOtherNames[index] = null;
						tempMeetingLinks[index] = null;
						return;
					}

					const other = res.data;
					tempOtherNames[index] = other.name;
					tempMeetingLinks[index] = userData.isConsultant
						? userData.permanentMeetingLink
						: other.permanentMeetingLink;
				},
			);

			await Promise.all(promises);
			setOtherNames(tempOtherNames);
			setMeetingLinks(tempMeetingLinks);
		};

		const fetch = async () => {
			await fetchUserData();
			await fetchMeetingData();
		};

		fetch();
	}, [
		userData.bookedMeetings,
		userData.isConsultant,
		userData.permanentMeetingLink,
		fetchUserData,
	]);

	const renderMeeting = (meeting, index) => {
		const permanentMeetingLink = meetingLinks[index];
		const otherName = otherNames[index];
		// We save the meeting.date field as timestamp in Firebase
		// When timestamp fields are fetched from Firebase, they are returned
		// in form {nanoseconds: number, seconds: number}
		// Here we need to convert that timestamp into the date
		const meetingDate = new Date(
			meeting.date.seconds * 1000,
		).toDateString();

		const handleJoinMeeting = async () => {
			if (permanentMeetingLink == null) {
				return;
			}

			try {
				const supported =
					await Linking.canOpenURL(permanentMeetingLink);
				if (supported) {
					await Linking.openURL(permanentMeetingLink);
				} else {
					console.log(
						"Don't know how to open this URL: " +
							permanentMeetingLink,
					);
				}
			} catch (error) {
				console.error('An error occurred', error);
			}
		};

		return (
			<View style={styles.meetingContainer} key={index}>
				<View style={styles.meetingInfoContainer}>
					<Text style={styles.meetingText}>
						Meeting with {otherName}{' '}
					</Text>
					<Text style={styles.meetingTimeText}>
						{meetingDate} at{' '}
						{convertMinutesToTime(meeting.startTime)} -{' '}
						{convertMinutesToTime(meeting.endTime)}
					</Text>
				</View>
				<View style={styles.joinButtonWrapper}>
					<Button
						title={'Join'}
						customBtnStyle={[
							styles.joinButton,
							permanentMeetingLink === ''
								? styles.disabledButton
								: {},
						]}
						onPress={handleJoinMeeting}
					/>
					<Button
						title={'Cancel'}
						customBtnStyle={styles.cancelButton}
						customTextStyle={{
							color: theme.colors.primary.default,
						}}
						onPress={() =>
							handleCancelMeeting(
								meeting.invitee,
								meeting.startTime,
							)
						}
					/>
				</View>
			</View>
		);
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Stack.Screen options={{ headerShown: false }} />

				<Text style={styles.welcomeText}>Upcoming meetings</Text>

				{/* <View style={styles.meetingListContainer}>
					{userData.bookedMeetings.length > 0 ? (
						userData.bookedMeetings.map((meeting, index) =>
							renderMeeting(meeting, index),
						)
					) : (
						<Text style={{ ...theme.typography.mediumBody }}>
							You currently have no meeting.
						</Text>
					)}
				</View> */}

				{userData.isConsultant ? null : (
					<Button
						title={'Schedule New Meeting'}
						customBtnStyle={styles.scheduleButton}
						onPress={() => {
							// Push to the consultant profile page
							router.push('/SearchConsultant');
						}}
					/>
				)}
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
	disabledButton: {
		backgroundColor: theme.colors.text.gray,
	},
	cancelButton: {
		paddingVertical: theme.spacing.small,
		paddingHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.white,
		borderRadius: 24,
	},
	scheduleButton: {
		paddingVertical: theme.spacing.mediumSmall,
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
});

export default MeetingDashboard;
