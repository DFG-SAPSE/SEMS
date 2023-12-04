import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { StackActions } from "@react-navigation/native";

import CustomModal from "../../common/CustomModal";
import { BookingContext } from "../../../context/BookingContext";
import Button from "../../common/Button";

const CancelConfirmModal = () => {
	const { consultantData, modalVisible, hideModal, resetBookingContext } =
		useContext(BookingContext);
	const navigation = useNavigation();

	const dropBooking = async () => {
		resetBookingContext();
		navigation.dispatch(StackActions.popToTop());
	};

	return (
		<CustomModal isVisible={modalVisible} onDismiss={hideModal}>
			<Text style={styles.modalText}>
				Cancel booking with {consultantData.name}?
			</Text>
			<View style={styles.buttonContainer}>
				<Button
					title={"No"}
					onPress={hideModal}
					customBtnStyle={styles.button}
					customTextStyle={styles.buttonText}
				/>
				<Button
					title={"Yes, cancel"}
					onPress={dropBooking}
					customBtnStyle={styles.button}
					customTextStyle={styles.buttonText}
				/>
			</View>
		</CustomModal>
	);
};

import { theme } from "../../../styles/theme";

const styles = StyleSheet.create({
	modalText: {
		...theme.typography.large,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: theme.spacing.medium,
	},
	button: {
		marginLeft: theme.spacing.xlarge,
		paddingRight: 0,
		paddingBottom: 0,
		backgroundColor: theme.colors.white,
	},
	buttonText: {
		...theme.typography.large,
		color: theme.colors.primary.default,
	},
});

export default CancelConfirmModal;
