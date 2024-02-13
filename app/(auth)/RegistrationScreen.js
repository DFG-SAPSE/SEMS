import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {
	Image,
	Text,
	TextInput,
	// TouchableOpacity,
	View,
	SafeAreaView,
	Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { register } from '../../services/auth';
import { router } from 'expo-router';
import Button from '../../components/common/Button';

export default function RegistrationScreen() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [selectedId, setSelectedId] = useState();

	const radioButtons = useMemo(
		() => [
			{
				id: '1', // acts as primary key, should be unique and non-empty string
				label: 'Consultant',
				value: 'Consultant',
				size: 30,
			},
			{
				id: '2',
				label: 'Entrepreneur',
				value: 'Entrepreneur',
				size: 30,
			},
		],
		[],
	);

	const onFooterLinkPress = () => {
		router.replace('/LoginScreen');
	};

	const pushNextScreen = () => {
		router.replace('/LoginScreen'); //replace with email verification in future
	};

	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			Alert.alert("Passwords don't match.");
			return;
		}
		let isConsultant;
		if (selectedId === '1') {
			isConsultant = true;
		} else if (selectedId === '2') {
			isConsultant = false;
		} else {
			Alert.alert('You must select an account type');
			return;
		}
		register(fullName, email, password, isConsultant, pushNextScreen); //register and pass in navigation
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<KeyboardAwareScrollView
					style={styles.keyboardShouldPersistTaps}
					keyboardShouldPersistTaps="always"
				>
					<Image
						resizeMode="contain"
						style={styles.logo}
						source={require('../../assets/images/logo2.avif')}
					/>
					<TextInput
						style={styles.input}
						placeholder="Full Name"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setFullName(text)}
						value={fullName}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="E-mail"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEmail(text)}
						value={email}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholderTextColor="#aaaaaa"
						secureTextEntry
						placeholder="Password"
						onChangeText={(text) => setPassword(text)}
						value={password}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholderTextColor="#aaaaaa"
						secureTextEntry
						placeholder="Confirm Password"
						onChangeText={(text) => setConfirmPassword(text)}
						value={confirmPassword}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<RadioGroup
						radioButtons={radioButtons}
						onPress={setSelectedId}
						selectedId={selectedId}
						layout="row"
					/>
					<Button
						title={'Create Account'}
						onPress={() => onRegisterPress()}
						customBtnStyle={styles.joinButton}
					/>
					<View style={styles.footerView}>
						<Text style={styles.footerText}>
							Already got an account?{' '}
							<Text
								onPress={onFooterLinkPress}
								style={styles.footerLink}
							>
								Log in
							</Text>
						</Text>
					</View>
				</KeyboardAwareScrollView>
			</View>
		</SafeAreaView>
	);
}
import { theme } from '../../styles/theme';
const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: theme.colors.background.white,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: theme.spacing.xlarge,
		marginVertical: theme.spacing.xlarge,
	},
	logo: {
		flex: 1,
		height: 100,
		width: 200,
		alignSelf: 'center',
		margin: theme.spacing.xlarge,
		resizeMode: 'contain',
	},
	joinText: {
		...theme.typography.mediumBody,
		color: theme.colors.text.dark,
	},
	input: {
		height: 60,
		borderRadius: theme.spacing.tiny,
		backgroundColor: theme.colors.white,
		paddingLeft: theme.spacing.medium,
		marginVertical: theme.spacing.medium,
		borderColor: 'rgba(68, 68, 68, 1)',
		borderStyle: 'solid',
		borderWidth: 1,
		fontSize: theme.typography.mediumBody.fontSize,
	},
	button: {
		backgroundColor: theme.colors.button,
		margin: theme.spacing.medium,
		marginLeft: theme.spacing.xlarge,
		marginRight: theme.spacing.xlarge,
		marginTop: theme.spacing.medium,
		height: 48,
		borderRadius: theme.spacing.tiny,
		alignItems: 'center',
		justifyContent: 'center',
	},
	joinButton: {
		marginTop: theme.spacing.xlarge,
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
	buttonTitle: {
		color: theme.colors.white,
		...theme.typography.large,
		fontWeight: 'bold',
	},
	footerView: {
		flex: 1,
		alignItems: 'center',
		marginTop: theme.spacing.xlarge,
	},
	footerText: {
		...theme.typography.mediumBody,
		color: theme.colors.text.dark,
	},
	footerLink: {
		color: theme.colors.button,
		fontWeight: 'bold',
		...theme.typography.mediumBody,
	},
	keyboardShouldPersistTaps: { flex: 1, width: '100%' },
	subContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginVertical: 20, // Add margin to separate the buttons
	},
	firstButton: {
		marginTop: theme.spacing.xxxlarge,
		marginBottom: theme.spacing.xxlarge,
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: '37%',
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
	secondButton: {
		marginBottom: theme.spacing.xxxlarge,
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: '35%',
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
});

/*<Button
						title={'Create Account'}
						onPress={() => onRegisterPress()}
						customBtnStyle={styles.joinButton}
					/>*/
