import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Loading from '../../common/Loading';
import TimeSlot from './TimeSlot';

const AvailableTimes = ({ availableTimes, handleTimePress, isLoading }) => {
	return (
		<View style={styles.availabilityContainer}>
			<Text style={styles.availabilityText}>Available times</Text>

			{isLoading ? (
				<Loading message={'Loading availability...'} />
			) : (
				<View style={styles.timeSlotsContainer}>
					{availableTimes.map((time, index) => (
						<TimeSlot
							key={index}
							time={time}
							handleTimePress={handleTimePress}
						/>
					))}
				</View>
			)}
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	availabilityContainer: {
		padding: theme.spacing.large,
	},
	availabilityText: {
		...theme.typography.large,
		marginBottom: theme.spacing.large,
	},
	timeSlotsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	timeSlot: {
		padding: theme.spacing.small,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 8,
		width: '30%',
		marginBottom: theme.spacing.medium,
		marginRight: theme.spacing.small,
	},
	timeSlotText: {
		textAlign: 'center',
	},
});

export default AvailableTimes;
