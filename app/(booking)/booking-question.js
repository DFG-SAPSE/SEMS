import { router, Stack } from "expo-router";
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { BookingContext } from "../../context/BookingContext";
import ConsultantProfile from "../../components/booking/ConsultantProfile";
import QuestionList from "../../components/booking/questions/QuestionList";
import Button from "../../components/common/Button";

const BookingQuestions = () => {
	const { consultantData } = useContext(BookingContext);

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: `Booking with ${consultantData.name}`,
				}}
			/>
			<ConsultantProfile />
			<QuestionList />

			<Button
				onPress={() => {
					router.push("/payment");
				}}
				title={"Next"}
				customStyle={styles.button}
			/>
		</View>
	);
};

import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: theme.spacing.large,
	},
	button: {
		marginTop: theme.spacing.xlarge,
	},
});

export default BookingQuestions;
