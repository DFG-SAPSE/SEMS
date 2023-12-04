import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, title, customBtnStyle, customTextStyle }) => {
	return (
		<TouchableOpacity style={[styles.button, customBtnStyle]} onPress={onPress}>
			<Text style={[styles.text, customTextStyle]}>{title}</Text>
		</TouchableOpacity>
	);
};

import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: theme.spacing.medium,
		paddingVertical: theme.spacing.small,
		backgroundColor: theme.colors.primary.default,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: theme.colors.text.light,
		...theme.typography.mediumBody,
		fontWeight: "bold",
	},
});

export default Button;
