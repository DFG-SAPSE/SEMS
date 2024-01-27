import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import CallServer from '../../components/common/CallServer';
import { router } from 'expo-router';

const CreditCardForm = () => {
	const [cardNumber, setCardNumber] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [securityCode, setSecurityCode] = useState('');
	const [nameOnCard, setNameOnCard] = useState('');

	const handleSubmit = async () => {
		if (!cardNumber || !expiryDate || !securityCode || !nameOnCard) {
			return;
		}
		let data = {
			cardNumber: cardNumber,
			expiryDate: expiryDate,
			securityCode: securityCode,
			name: nameOnCard,
			type: 'scheme',
			currency: 'USD',
			value: 1000,
		};
		const res = await CallServer(
			'https://3d5d-142-117-88-178.ngrok-free.app/payments',
			data,
			'POST',
		);
		console.log(res)
		if (res.resultCode == 'Authorised') {
			router.push('/PaymentSuccess');
		} else if (res.resultCode == 'Received') {
			router.push('/PaymentSuccess');
		} else if (res.resultCode == 'Refused') {
			router.push('/PaymentFailed');
		} else {
			//console.log('errrr', res.resultCode);
			router.push('/PaymentFailed');
		}
	};
	const handleNumbers = (text, number) => {
		// Allow only numbers
		const numericValue = text.replace(/[^0-9]/g, '');
		const alpha = text.replace(/[^a-zA-Z ]/g, '');
		if (number == 1) {
			setCardNumber(numericValue);
		} else if (number == 2) {
			if (numericValue.length < 5) setExpiryDate(numericValue);
		} else if (number == 3) {
			if (numericValue.length < 5) setSecurityCode(numericValue);
		} else if (number == 4) {
			setNameOnCard(alpha);
		}
	};
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<Text style={styles.label}>Card number</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => handleNumbers(text, 1)}
					value={cardNumber}
					placeholder="1234 5678 9012 3456"
					keyboardType="numeric"
				/>
				<View style={styles.row}>
					<View style={styles.column}>
						<Text style={styles.label}>Expiry date</Text>
						<TextInput
							style={[styles.input, styles.smallInput]}
							onChangeText={(text) => handleNumbers(text, 2)}
							value={expiryDate}
							placeholder="MMYY"
						/>
					</View>
					<View style={styles.column}>
						<Text style={styles.label}>Security code</Text>
						<TextInput
							style={[styles.input, styles.smallInput]}
							onChangeText={(text) => handleNumbers(text, 3)}
							value={securityCode}
							placeholder="3 digits"
							keyboardType="numeric"
						/>
					</View>
				</View>
				<Text style={styles.label}>Name on card</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => handleNumbers(text, 4)}
					value={nameOnCard}
					placeholder="J. Smith"
				/>
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.buttonText}>Pay $100.00</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		padding: 50,
		backgroundColor: '#fff',
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
	},
	input: {
		fontSize: 16,
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 10,
		marginBottom: 20,
		borderRadius: 5,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	column: {
		flexDirection: 'column',
		width: '48%',
	},
	smallInput: {
		marginBottom: 0,
	},
	button: {
		backgroundColor: '#000',
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
});

export default CreditCardForm;
