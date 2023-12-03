import { Link } from "expo-router";
import React, { useContext, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	Pressable,
} from "react-native";
import { BookingContext } from "../context/BookingContext";

const PaymentComponent = () => {
	const [voucher, setVoucher] = useState("");
	const { consultantData, updatePaymentMethod } = useContext(BookingContext);

	const handleApplyVoucher = () => {
		// Logic to apply voucher
	};

	const handleSelectPaymentMethod = (method) => {
		updatePaymentMethod(method);
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => {
						/* go back action */
					}}
				>
					<Text>Back</Text>
				</TouchableOpacity>
				<Text style={styles.headerText}>
					Booking with {consultantData.name}
				</Text>
			</View>
			<View style={styles.profileContainer}>
				<Image
					source={{
						uri: consultantData.avatar || "https://picsum.photos/200/300",
					}}
					style={styles.profileImage}
				/>
				<Text style={styles.profileName}>{consultantData.name}</Text>
				<Text style={styles.profileTitle}>{consultantData.title}</Text>
				<Text style={styles.profileTitle}>{consultantData.company}</Text>
			</View>
			<View style={styles.paymentContainer}>
				<Text style={styles.paymentTitle}>Payment method</Text>
				<TouchableOpacity
					style={styles.paymentOption}
					onPress={() => handleSelectPaymentMethod("Credit/Debit")}
				>
					<Text>Other Credit/Debit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.paymentOption}
					onPress={() => handleSelectPaymentMethod("PayPal")}
				>
					<Text>PayPal</Text>
				</TouchableOpacity>
				{/* ... other payment options */}
			</View>
			<View style={styles.voucherContainer}>
				<TextInput
					value={voucher}
					onChangeText={setVoucher}
					placeholder="Voucher number"
					style={styles.voucherInput}
				/>
				<TouchableOpacity onPress={handleApplyVoucher}>
					<Text style={styles.applyVoucherText}>Apply voucher</Text>
				</TouchableOpacity>
				<Text>You have 2 vouchers available.</Text>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity
					onPress={() => {
						/* cancel action */
					}}
					style={styles.footerButton}
				>
					<Text>Cancel</Text>
				</TouchableOpacity>
				<Link href="/booking-confirmation" asChild>
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>Next</Text>
					</Pressable>
				</Link>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	profileContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	profileName: {
		fontSize: 18,
		fontWeight: "bold",
	},
	profileTitle: {
		fontSize: 16,
	},
	paymentContainer: {
		marginBottom: 20,
	},
	paymentTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 10,
	},
	paymentOption: {
		padding: 15,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		marginBottom: 10,
		// Add icons and additional styling for each payment option
	},
	voucherContainer: {
		marginBottom: 20,
	},
	voucherInput: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	},
	applyVoucherText: {
		color: "blue",
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	footerButton: {
		padding: 15,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
	},
	nextButton: {
		backgroundColor: "blue",
	},
});

export default PaymentComponent;
