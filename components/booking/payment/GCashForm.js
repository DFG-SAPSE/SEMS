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
import Loading from '../../../components/common/Loading';
import { httpsCallable, getFunctions } from 'firebase/functions';
import { app } from '../../../services/firebase/config';

const GCashForm = () => {
	// const [appState, setAppState] = useState(AppState.currentState);
	const [load, setLoad] = useState(false);
	const functions = getFunctions(app);
	const paymentsFunction = httpsCallable(functions, 'payments');
	const paymentsDetailsFunction = httpsCallable(functions, 'paymentsDetails');

	useEffect(() => {
		const link = Linking.addEventListener('url', handleDeepLink);
		return () => {
			link.remove('url', handleDeepLink);
		};
	});

	const handleDeepLink = async (event) => {
		try {
			const queryString = event.url.split('?')[1];
			const redirectResult = queryString.split('redirectResult=')[1];
			let data = {
				redirectResult: redirectResult,
			};
			var res = await paymentsDetailsFunction(data);
			console.log(res);
			res = res.data;
			if (res.resultCode == 'Authorised') {
				// router.push('/PaymentSuccess');
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
			const data = {
				type: 'GCash',
				currency: 'PHP',
				value: 1000,
			};
			var res = await paymentsFunction(data);
			res = res.data;
			let url = res.action.url;
			console.log(res);
			setLoad(false);

			Linking.canOpenURL(url)
				.then((supported) => {
					if (supported) {
						Linking.openURL(url);
					}
				})
				.catch((err) => console.log('handlegcash error'));
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
