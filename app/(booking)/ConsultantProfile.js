import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

import { useFonts } from 'expo-font';
import { fonts } from '../../styles/fonts';
import Button from '../../components/common/Button';
import ConsultantProfileHeader from '../../components/consultantProfile/ConsultantProfileHeader';
import ConsultantProfileDetails from '../../components/consultantProfile/ConsultantProfileDetails';
import AvailabilitySchedule from '../../components/consultantProfile/AvailabilitySchedule';
import ConsultantDetails from '../../components/consultantProfile/ConsultantDetails';
import ReviewSection from '../../components/consultantProfile/ReviewsSection';

function ConsultantProfile() {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ScrollView>
			<Stack.Screen
				options={{
					title: `Andrea Beatrice`,
					headerTitleStyle: styles.name,
				}}
			/>
			<View style={styles.container}>
				<ConsultantProfileHeader />

				<ConsultantProfileDetails />

				<AvailabilitySchedule />

				<ConsultantDetails />

				<ReviewSection />
			</View>

			<View styles={styles.marginButton}>
				<Button title={'Book Consultation'} />
			</View>
			<Stack.Screen />
		</ScrollView>
	);
}

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	marginButton: {
		margin: theme.spacing.large,
	},
	container: {
		background:
			'linear-gradient(180deg, #FFF 14.17%, #FCFCFC 18.18%, #FCFCFC 100%)',
		display: 'flex',
		maxWidth: 480,
		width: '100%',
		paddingBottom: 24,
		flexDirection: 'column',
		margin: '0 auto',
	},
	name: {
		letterSpacing: 0.1,
		fontSize: theme.typography.large.fontSize,
		fontFamily: 'Roboto-Bold',
		color: 'rgba(33, 37, 41, 1)', //will be replaced
	},
});

export default ConsultantProfile;
