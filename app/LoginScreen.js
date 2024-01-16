/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';
import { login } from '../services/auth';
import { router } from 'expo-router';

export default function LoginScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onFooterLinkPress = () => {
		router.push('/RegistrationScreen');
	};

	const onLoginPress = () => {
		login(email, password, router); //login and pass in navigation
	};

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always"
			>
				<Image
					style={styles.logo}
					source={require('../assets/images/logo.avif')}
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
				<TouchableOpacity
					style={styles.button}
					onPress={() => onLoginPress()}
				>
					<Text style={styles.buttonTitle}>Log in</Text>
				</TouchableOpacity>
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
	);
}

import { theme } from '../styles/theme';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	title: {},
	logo: {
		flex: 1,
		height: 200,
		width: 400,
		alignSelf: 'center',
		margin: theme.spacing.xlarge,
		resizeMode: 'contain',
	},
	input: {
		height: 48,
		borderRadius: theme.spacing.tiny,
		overflow: 'hidden',
		backgroundColor: theme.colors.white,
		marginTop: theme.spacing.small,
		marginBottom: theme.spacing.small,
		marginLeft: theme.spacing.xlarge,
		marginRight: theme.spacing.xlarge,
		paddingLeft: theme.spacing.medium,
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
});
