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
		<ScrollView style={styles.container}>
			<Stack.Screen
				options={{
					title: `Andrea Beatrice`,
					headerTitleStyle: styles.name,
				}}
			/>
			<View>
				<ConsultantProfileHeader />

				<ConsultantProfileDetails />

				<AvailabilitySchedule />

				<ConsultantDetails />

				<ReviewSection />
			</View>

			<View styles={styles.marginButton}>
				<Button
					customBtnStyle={{ margin: theme.spacing.large }}
					title={'Book Consultation'}
				/>
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
		display: 'flex',
		paddingBottom: 0,
		marginVertical: theme.spacing.large,
	},
	name: {
		letterSpacing: 0.1,
		fontSize: theme.typography.large.fontSize,
		fontFamily: 'Roboto-Bold',
		color: theme.colors.text.black,
	},
});

export default ConsultantProfile;
