import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { BookingContext } from '../../../context/BookingContext';

const ConsultantProfile = () => {
	const { consultantData } = useContext(BookingContext);
	const { name, enterpriseId, title, photoURL } = consultantData;

	return (
		<View style={styles.profileContainer}>
			<View style={styles.textContainer}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.company}>{enterpriseId}</Text>
				<Text style={styles.title}>{title}</Text>
			</View>
			<Image
				source={{ uri: photoURL }}
				style={styles.image}
				resizeMode="cover"
			/>
		</View>
	);
};

import { theme } from '../../../styles/theme';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	profileContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		maxHeight: windowHeight * 0.15,
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	name: {
		...theme.typography.extraLargeBold,
		marginTop: theme.spacing.medium,
		marginBottom: theme.spacing.medium,
	},
	company: {
		...theme.typography.mediumBody,
		marginBottom: theme.spacing.small,
		fontWeight: '500',
	},
	title: {
		...theme.typography.smallBody,
		marginBottom: theme.spacing.small,
	},
	image: {
		height: '90%',
		aspectRatio: 1,
		borderRadius: 9999,
	},
});

export default ConsultantProfile;
