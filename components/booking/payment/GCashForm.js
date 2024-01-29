import React, { useState } from 'react';
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	Linking,
	View,
} from 'react-native';

import { useEffect } from 'react';
import { router } from 'expo-router';
import CallServer from '../../common/CallServer';
import Loading from '../../../components/common/Loading';

const GCashForm = () => {
	// const [appState, setAppState] = useState(AppState.currentState);
	const [load, setLoad] = useState(false);
	const ngrok = 'https://4883-142-117-88-178.ngrok-free.app';

	useEffect(() => {
		const link = Linking.addEventListener('url', handleDeepLink);
		return () => {
			link.remove('url', handleDeepLink);
		};
	}, []);

	const handleDeepLink = async (event) => {
		try {
			const queryString = event.url.split('?')[1];
			const redirectResult = queryString.split('redirectResult=')[1];
			let data = {
				redirectResult: redirectResult,
			};
			const res = await CallServer(
				`${ngrok}/payments/details`,
				data,
				'POST',
			);

			if (res.resultCode == 'Authorised') {
			} else if (
				res.resultCode == 'Cancelled' ||
				res.resultCode == 'Error' ||
				res.resultCode == 'Refused'
			) {
				router.push('/PaymentFailed');
			} else {
				router.push('/PaymentFailed');
			}
		} catch (error) {
			router.push('/PaymentFailed');
		}
	};

	const handleGCash = async () => {
		// setLoad(true);
		try {
			setLoad(true);
			const res = await CallServer(
				`${ngrok}/payments`,
				{ type: 'GCash' },
				'POST',
			);
			const url = res.action.url;
			setLoad(false);
			Linking.canOpenURL(url)
				.then((supported) => {
					if (supported) {
						Linking.openURL(url);
					}
				})
				.catch((err) => router.push('/PaymentFailed'));
		} catch (error) {
			router.push('/PaymentFailed');
		}
	};
	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={handleGCash}>
				<Text style={styles.buttonText}>Pay $100.00</Text>
			</TouchableOpacity>
			{load ? (
				<Loading message={'Redirecting to a browser. Please wait...'} />
			) : (
				<></>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#06367c',
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
	},
});

export default GCashForm;
