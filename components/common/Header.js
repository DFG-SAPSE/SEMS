import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// You can use any icon library or image for the back arrow
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onBackPress }) => {
	return (
		<View style={styles.headerContainer}>
			<TouchableOpacity onPress={onBackPress} style={styles.backButton}>
				<Icon name="arrow-back" size={24} color="black" />
			</TouchableOpacity>
			<Text style={styles.headerTitle}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: '#f8f8f8',
	},
	backButton: {
		marginLeft: 10,
		marginRight: 10,
	},
	headerTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		flex: 1, // This will make the title center in the available space
		textAlign: 'center', // If you have more buttons you might need to adjust this
	},
});

export default Header;
