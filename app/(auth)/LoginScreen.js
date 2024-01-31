import React, { useState, useEffect } from 'react';
import {
	Image,
	Text,
	TextInput,
	View,
	SafeAreaView,
	Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { login, getAuthChange } from '../../services/auth';
import { router } from 'expo-router';
import Button from '../../components/common/Button';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [currentUser, setUser] = useState(''); //stores currently logged in user

	const onFooterLinkPress = () => {
		router.replace('/RegistrationScreen');
	};

	const pushNextScreen = (user) => {
		//console.log(user);
		if (user && user.isConsultant && !user.isApproved) {
			Alert.alert('No access', 'Consultants need to wait for approval');
		} else if (user && user.isProfileComplete) {
			router.replace('/home');
		} else if (user && !user.isProfileComplete) {
			router.replace('/JoinEnterprise');
		} else {
			console.log('Error moving past login screen');
		}
	};

	const onLoginPress = () => {
		login(email, password, pushNextScreen);
	};

	/*
	// Handle user state changes
	function setAuthChange(newUser) {
		setUser(newUser);
	}

	useEffect(() => {
		getAuthChange(setAuthChange);
	}, []);*/

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<KeyboardAwareScrollView
					style={styles.keyBoardAwareScrollView}
					keyboardShouldPersistTaps="always"
				>
					<Image
						resizeMode="contain"
						style={styles.logo}
						source={require('../../assets/images/logo2.avif')}
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
					<Button
						title={'Log in'}
						onPress={() => onLoginPress()}
						customBtnStyle={styles.joinButton}
					/>
					<View style={styles.footerView}>
						<Text style={styles.footerText}>
							Don't have an account?{' '}
							<Text
								onPress={onFooterLinkPress}
								style={styles.footerLink}
							>
								Sign up
							</Text>
						</Text>
					</View>
				</KeyboardAwareScrollView>
			</View>
		</SafeAreaView>
	);
};

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
		height: 250,
		width: 400,
		alignSelf: 'center',
		marginVertical: theme.spacing.xlarge,
		resizeMode: 'contain',
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
	keyBoardAwareScrollView: { flex: 1, width: '100%' },
});

export default LoginScreen;
