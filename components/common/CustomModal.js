import React from "react";
import {
	Modal,
	View,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";

const CustomModal = ({ isVisible, onDismiss, children }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={isVisible}
			onRequestClose={onDismiss}
		>
			<TouchableWithoutFeedback onPress={onDismiss}>
				<View style={styles.centeredView}>
					<TouchableWithoutFeedback>
						<View style={styles.modalView}>{children}</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalView: {
		margin: theme.spacing.small,
		padding: theme.spacing.xlarge,
		width: "90%",
		backgroundColor: theme.colors.white,
		borderRadius: 16,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});

export default CustomModal;
