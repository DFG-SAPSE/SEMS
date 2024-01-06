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
			<View style={styles.availibilityTitle}>
				<View style={styles.view15}>
					<Text style={styles.avalibilityText}>
						Availability this week
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						router.push('BookingTimeSlot');
					}}
					style={styles.view16}
				>
					<Text style={styles.viewCalendar}>View calendar</Text>
				</TouchableOpacity>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.availibilitySchedule}>
					<View style={styles.timeBox}>
						<View>
							<Text style={styles.dayOfTheWeek}>Sun</Text>
						</View>
						<View style={styles.view20}>
							<Text style={styles.dayOfWeek}>13 Aug</Text>
						</View>
						<View style={styles.dayAvailable}>
							<Text style={styles.dayAvailable}>6 available</Text>
						</View>
					</View>
					<View style={styles.timeBox}>
						<View style={styles.view23}>
							<Text style={styles.dayOfTheWeek}>Tue</Text>
						</View>
						<View style={styles.view24}>
							<Text style={styles.dayOfWeek}>15 Aug</Text>
						</View>
						<View style={styles.dayAvailable}>
							<Text style={styles.dayAvailable}>3 available</Text>
						</View>
					</View>
					<View style={styles.timeBox}>
						<View style={styles.view27}>
							<Text style={styles.dayOfTheWeek}>Wed</Text>
						</View>
						<View style={styles.view28}>
							<Text style={styles.dayOfWeek}>16 Aug</Text>
						</View>
						<View>
							<Text style={styles.dayAvailable}>9 available</Text>
						</View>
					</View>
					<View style={styles.timeBox}>
						<View style={styles.view31}>
							<Text style={styles.dayOfTheWeek}>Thu</Text>
						</View>
						<View style={styles.view32}>
							<Text style={styles.dayOfWeek}>17 Aug</Text>
						</View>
						<View>
							<Text style={styles.dayAvailable}>7 available</Text>
						</View>
					</View>
					<View style={styles.timeBox}>
						<View style={styles.view31}>
							<Text style={styles.dayOfTheWeek}>Fri</Text>
						</View>
						<View style={styles.view32}>
							<Text style={styles.dayOfWeek}>17 Aug</Text>
						</View>
						<View>
							<Text style={styles.dayAvailable}>9 available</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	availibilityTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: theme.spacing.large,
		paddingTop: theme.spacing.large,
	},
	view15: {
		color: '#000',
		letterSpacing: 0.1,
		font: '400 12px/167% Roboto, sans-serif ',
	},
	avalibilityText: {
		fontFamily: 'Roboto-Medium',
	},
	view16: {
		color: '#00367C',
		letterSpacing: 0.1,
		font: '400 12px/167% Roboto, sans-serif ',
	},
	viewCalendar: {
		fontFamily: 'Roboto-Medium',
		color: theme.colors.primary.dark,
	},
	availibilitySchedule: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.spacing.medium,
		paddingHorizontal: theme.spacing.large,
	},
	timeBox: {
		marginVertical: theme.spacing.small,
		borderRadius: theme.spacing.small,
		border: '0.25px solid rgba(204, 204, 204, 0.50)',
		boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.05)',
		backgroundColor: theme.colors.white,
		display: 'flex',
		flexGrow: '1',
		flexBasis: '0%',
		flexDirection: 'column',
		padding: theme.spacing.medium,
	},
	dayOfTheWeek: {
		fontFamily: 'Roboto-Bold',
		color: theme.colors.text.gray,
		fontSize: theme.typography.tinyBody.fontSize,
		textAlign: 'center',
	},
	view20: {
		color: '#000',
		textAlign: 'center',
		letterSpacing: 0.1,
		marginTop: 4,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	dayAvailable: {
		fontFamily: 'Roboto-Regular',
		color: theme.colors.primary.dark,
		fontSize: 11,
		textAlign: 'center',
		paddingTop: theme.spacing.tiny,
	},
	dayOfWeek: {
		fontFamily: 'Roboto-Medium',
		color: theme.colors.text.dark,
		fontSize: theme.typography.tinyBody.fontSize,
		textAlign: 'center',
		padding: theme.spacing.tiny,
	},
	view23: {
		color: '#999',
		textAlign: 'center',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '800 10px/20px Roboto, sans-serif ',
	},
	view24: {
		color: '#000',
		textAlign: 'center',
		letterSpacing: 0.1,
		marginTop: 4,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	view27: {
		color: '#999',
		textAlign: 'center',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '800 10px/20px Roboto, sans-serif ',
	},
	view28: {
		color: '#000',
		textAlign: 'center',
		letterSpacing: 0.1,
		marginTop: 4,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
	view31: {
		color: '#999',
		textAlign: 'center',
		letterSpacing: 0.1,
		whiteSpace: 'nowrap',
		font: '800 10px/20px Roboto, sans-serif ',
	},
	view32: {
		color: '#000',
		textAlign: 'center',
		letterSpacing: 0.1,
		marginTop: 4,
		whiteSpace: 'nowrap',
		font: '400 14px/143% Roboto, sans-serif ',
	},
});

export default AvailabilitySchedule;
