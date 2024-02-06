import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ConsultantProfileHeader = () => {
	const { consultantData } = useContext(BookingContext);

	return (
		<>
			<View style={styles.imageContainer}>
				<Image
					resizeMode="contain"
					source={{
						uri: consultantData.photoURL,
					}}
					style={styles.image}
				/>
			</View>
		</>
	);
};

import { theme } from '../../styles/theme';
import { BookingContext } from '../../context/BookingContext';

const styles = StyleSheet.create({
	image: {
		alignSelf: 'center',
		width: '100%',
		aspectRatio: '1',
		borderRadius: theme.spacing.small,
	},
	imageContainer: {
		padding: theme.spacing.large,
	},
});

export default ConsultantProfileHeader;
