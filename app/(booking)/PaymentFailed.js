import React from 'react';
import Button from '../../components/common/Button';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function secondPage() {
	return (
		<View style={styles.container}>
			<View style={styles.paymentContainer}>
				<Text style={styles.paymentTitle}>Payment Failed</Text>
			</View>
			<Text style={styles.description}>
				Your payment has not gone through successfully. Please try again
				with a different payment method.
			</Text>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../../assets/images/redCheck.png')}
				/>
			</View>
			<Button
				onPress={() => {
					router.push('/BookingReview');
				}}
				title={'Back'}
				customBtnStyle={styles.button}
			/>
		</View>
	);
}

// import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	paymentContainer: {
		width: '100%',
		height: 120,
		backgroundColor: 'rgba(229, 236, 249, 1)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	paymentTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		alignItems: 'center',
		position: 'absolute', //Here is the trick
		bottom: 20, //Here is the trick
	},
	description: {
		paddingLeft: 13,
		paddingRight: 13,
		paddingTop: 16,
		fontSize: 16,
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 190,
	},
	image: {
		width: 170,
		height: 170,
		borderRadius: 500,
	},
	button: {
		backgroundColor: '#000',
		width: 300,
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
		position: 'absolute',
		bottom: 60,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
});
