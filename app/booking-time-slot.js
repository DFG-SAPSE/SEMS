import React, { useContext, useState } from "react";
import { router } from "expo-router";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";

import { BookingContext } from "../context/BookingContext";
import Loading from "../components/Loading";
import { fetchAvailableTimes } from "../services/scheduling";
import { convertTo24HourFormat } from "../utils/dateAndTime";

const BookTimeSlot = () => {
	const [selectedDate, setSelectedDate] = useState("");
	const [availableTimes, setAvailableTimes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { chooseTimeSlot } = useContext(BookingContext);

	const markedDates = {
		[selectedDate]: {
			selected: true,
			disableTouchEvent: true,
			selectedColor: "blue",
			selectedTextColor: "white",
		},
	};

	const onDayPress = async (day) => {
		setIsLoading(true);
		const times = await fetchAvailableTimes(day.dateString);
		setSelectedDate(day.dateString);
		setAvailableTimes(times);
		setIsLoading(false);
	};

	const handleTimePress = async (time) => {
		// Conver time to 24-hour format, combine the date and time
		// and parse into Date
		const startDateString = `${selectedDate} ${convertTo24HourFormat(time)}`;
		const startTime = new Date(startDateString);

		// Dummy: Clone the Date object and add 45 minutes for the end time
		// This will be changed when we give consultants the ability
		// to customize their meeting length
		const endTime = new Date(startTime);
		endTime.setMinutes(startTime.getMinutes() + 45);

		// Convert start and end times to timestamps
		const startTimeStamp = startTime.getTime();
		const endTimeStamp = endTime.getTime();

		await chooseTimeSlot(startTimeStamp, endTimeStamp);

		router.push("/booking-question/");
	};

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.chooseDateText}>Choose date</Text>
			<Calendar
				current={Date()}
				onDayPress={onDayPress}
				markedDates={markedDates}
				theme={{
					todayTextColor: "blue",
					selectedDayBackgroundColor: "blue",
					selectedDayTextColor: "#ffffff",
				}}
			/>
			{isLoading ? (
				<Loading message={"Loading availability..."} />
			) : (
				<View style={styles.availabilityContainer}>
					<Text style={styles.availabilityText}>Available times:</Text>
					<View style={styles.timeSlotsContainer}>
						{availableTimes.map((time, index) => (
							<TouchableOpacity
								key={index}
								style={styles.timeSlot}
								onPress={() => handleTimePress(time)}
							>
								<Text>{time}</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	chooseDateText: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 20,
		marginLeft: 20,
	},
	availabilityContainer: {
		padding: 20,
	},
	availabilityText: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 10,
	},
	timeSlotsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	timeSlot: {
		padding: 10,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		marginBottom: 10,
	},
});

export default BookTimeSlot;
