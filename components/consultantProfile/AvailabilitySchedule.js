import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';

const AvailabilitySchedule = () => {
	return (
		<>
			<View style={styles.availabilityTitle}>
				<View>
					<Text style={styles.availabilityText}>
						Availability this week
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						router.push('BookingTimeSlot');
					}}
				>
					<Text style={styles.viewCalendarText}>View calendar</Text>
				</TouchableOpacity>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.availabilitySchedule}>
					<View style={styles.timeSlot}>
						<View>
							<Text style={styles.dayOfTheWeek}>Sun</Text>
						</View>
						<View style={styles.dateContainer}>
							<Text style={styles.date}>13 Aug</Text>
						</View>
						<View style={styles.availableSlots}>
							<Text style={styles.availableSlotsText}>
								6 available
							</Text>
						</View>
					</View>
					<View style={styles.timeSlot}>
						<View>
							<Text style={styles.dayOfTheWeek}>Tue</Text>
						</View>
						<View style={styles.dateContainer}>
							<Text style={styles.date}>15 Aug</Text>
						</View>
						<View style={styles.availableSlots}>
							<Text style={styles.availableSlotsText}>
								3 available
							</Text>
						</View>
					</View>
					<View style={styles.timeSlot}>
						<View>
							<Text style={styles.dayOfTheWeek}>Wed</Text>
						</View>
						<View style={styles.dateContainer}>
							<Text style={styles.date}>16 Aug</Text>
						</View>
						<View style={styles.availableSlots}>
							<Text style={styles.availableSlotsText}>
								9 available
							</Text>
						</View>
					</View>
					<View style={styles.timeSlot}>
						<View>
							<Text style={styles.dayOfTheWeek}>Thu</Text>
						</View>
						<View style={styles.dateContainer}>
							<Text style={styles.date}>17 Aug</Text>
						</View>
						<View style={styles.availableSlots}>
							<Text style={styles.availableSlotsText}>
								7 available
							</Text>
						</View>
					</View>
					<View style={styles.timeSlot}>
						<View>
							<Text style={styles.dayOfTheWeek}>Fri</Text>
						</View>
						<View style={styles.dateContainer}>
							<Text style={styles.date}>17 Aug</Text>
						</View>
						<View style={styles.availableSlots}>
							<Text style={styles.availableSlotsText}>
								9 available
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	availabilityTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: theme.spacing.large,
		paddingTop: theme.spacing.large,
	},
	availabilityText: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Regular',
		fontSize: theme.typography.smallBody.fontSize,
	},
	viewCalendarText: {
		fontFamily: 'Roboto-Regular',
		color: theme.colors.primary.dark,
		letterSpacing: 0.1,
	},
	availabilitySchedule: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.spacing.medium,
		paddingHorizontal: theme.spacing.large,
		marginVertical: theme.spacing.mediumSmall,
	},
	timeSlot: {
		marginVertical: theme.spacing.small,
		borderRadius: theme.spacing.small,
		backgroundColor: theme.colors.white,
		flexDirection: 'column',
		padding: theme.spacing.medium,
	},
	dayOfTheWeek: {
		fontFamily: 'Roboto-Bold',
		color: theme.colors.text.gray,
		fontSize: theme.typography.smallBody.fontSize,
		textAlign: 'center',
	},
	dateContainer: {
		letterSpacing: 0.1,
		marginTop: theme.spacing.tiny,
	},
	availableSlots: {
		fontFamily: 'Roboto-Regular',
		color: theme.colors.primary.dark,
		textAlign: 'center',
		paddingTop: theme.spacing.tiny,
	},
	availableSlotsText: {
		fontFamily: 'Roboto-Bold',
		color: theme.colors.primary.dark,
		fontSize: 10,
		textAlign: 'center',
		paddingTop: theme.spacing.tiny,
		letterSpacing: 0.1,
	},
	date: {
		fontFamily: 'Roboto-Regular',
		color: theme.colors.text.dark,
		fontSize: theme.typography.mediumBody.fontSize,
		textAlign: 'center',
		padding: theme.spacing.tiny,
	},
});

export default AvailabilitySchedule;
