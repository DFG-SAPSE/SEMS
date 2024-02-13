import React, { useContext } from 'react';
import { Stack } from 'expo-router';
import { View, ScrollView, StyleSheet } from 'react-native';

import { BookingContext } from '../../context/BookingContext';
import ConfirmBlock from '../../components/booking/review/ConfirmBlock';
import ConfirmButton from '../../components/booking/common/ConfirmButton';
import ConsultantProfile from '../../components/booking/common/ConsultantProfile';
import CancelConfirmModal from '../../components/booking/common/CancelConfirmModal';
import CancelBookingButton from '../../components/booking/common/CancelBookingButton';
import Divider from '../../components/common/Divider';

import { convertMinutesToTime, formatDate } from '../../utils/dateAndTime';
import { camelCaseToNormalText } from '../../utils/stringFormat';

const BookingReview = ({ pageTitle, children, footerComponent }) => {
	const { bookingData, consultantData } = useContext(BookingContext);
	const { date, startTime, endTime } = bookingData;

	const dateAndTime = [
		['Date', `${formatDate(date)} (YYYY-MM-DD)`],
		[
			'Time and duration',
			`${convertMinutesToTime(startTime)} - ${convertMinutesToTime(
				endTime,
			)}`,
		],
	];

	const service = consultantData.services[bookingData.service];

	return (
		<ScrollView style={styles.wrapper}>
			<ScrollView style={styles.container}>
				<CancelConfirmModal />

				<Stack.Screen
					options={{ title: pageTitle ? pageTitle : 'Review' }}
				/>

				{children}

				<ConsultantProfile />

				<Divider />

				<View style={styles.section}>
					{dateAndTime.map((d, index) => (
						<ConfirmBlock key={index} header={d[0]} body={d[1]} />
					))}
				</View>

				<Divider />

				<View style={styles.section}>
					{service.questions.map((question, index) => (
						<ConfirmBlock
							key={index}
							header={question}
							body={bookingData.answers[index]}
						/>
					))}
				</View>

				{/* file attachment */}
				{/* {bookingData.fileAttachments.map((file, index) => (
				<Text key={index}>{file}</Text>
			))} */}

				<Divider />

				<View style={styles.section}>
					{Object.entries(bookingData.payment).map(
						([key, value], index) => (
							<ConfirmBlock
								key={index}
								header={camelCaseToNormalText(key)}
								body={value}
							/>
						),
					)}
				</View>

				{footerComponent ? (
					footerComponent
				) : (
					<View style={styles.footer}>
						<CancelBookingButton />
						<ConfirmButton />
					</View>
				)}
			</ScrollView>
		</ScrollView>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: theme.colors.background.white,
	},
	container: {
		flexGrow: 1,
		padding: theme.spacing.large,
	},
	section: {},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: theme.spacing.xlarge,
	},
});

export default BookingReview;
