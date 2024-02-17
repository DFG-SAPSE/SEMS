import React, { useContext } from 'react';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import QuestionList from '../../components/booking/questions/QuestionList';
import NextButton from '../../components/booking/common/NextButton';
import CancelConfirmModal from '../../components/booking/common/CancelConfirmModal';
import ConsultantProfile from '../../components/booking/common/ConsultantProfile';
import CancelBookingButton from '../../components/booking/common/CancelBookingButton';
import { BookingContext } from '../../context/BookingContext';
import { theme } from '../../styles/theme';
import Divider from '../../components/common/Divider';

const BookingQuestions = () => {
	const { consultantData } = useContext(BookingContext);
	return (
		<ScrollView style={styles.wrapper}>
			<ScrollView style={styles.container}>
				<CancelConfirmModal />
				<Stack.Screen
					options={{ title: `Booking with ${consultantData.name}` }}
				/>
				<ConsultantProfile />

				<Divider />

				<QuestionList />

				<View style={styles.footer}>
					<CancelBookingButton />
					<NextButton nextRoute={'/payment'} />
				</View>
			</ScrollView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'white',
	},
	container: {
		flex: 1,
		padding: theme.spacing.medium,
		backgroundColor: 'white',
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.spacing.xlarge,
	},
});

export default BookingQuestions;
