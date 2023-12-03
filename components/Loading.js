import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

const Loading = ({ message }) => {
	return (
		<View style={styles.loadingContainer}>
			<ActivityIndicator size="large" color="#0000ff" />
			<Text style={styles.loadingText}>{message || "Loading..."}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	loadingContainer: {
		position: "absolute", // So that the loader can overlay on top of existing content
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent background
	},
	loadingText: {
		marginTop: 10,
		textAlign: "center",
		color: "#fff",
	},
});

export default Loading;
