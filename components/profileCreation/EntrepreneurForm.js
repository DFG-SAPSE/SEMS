import React, { useEffect, useState } from 'react';
import {
	Image,
	Text,
	TextInput,
	// TouchableOpacity,
	View,
	SafeAreaView,
	StyleSheet,
	Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import { router } from 'expo-router';
import Button from '../common/Button';
import {
	Entrepreneur,
	enterpriseSectorsList,
	certificateTypeList,
} from '../../services/model';
import { addEntrepreneur } from '../../services/profile';

const EntrepreneurForm = ({ user, enterprise, pushNextScreen }) => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [enterpriseID, setEnterpriseID] = useState('');
	const [enterpriseName, setEnterpriseName] = useState('');
	const [enterpriseSector, setEnterpriseSector] = useState(null);
	const [enterpriseRole, setEnterpriseRole] = useState('');
	const [enterpriseLivelihoodActivities, setEnterpriseLivelihoodActivities] =
		useState('');
	const [certificateType, setCertificateType] = useState(null);
	const [certificateId, setCertificateId] = useState('');
	const [description, setDescription] = useState('');
	const [errors, setErrors] = useState({});

	const onSubmitPress = () => {
		if (!user) {
			Alert.alert('Sorry Try again');
			router.replace('/LoginScreen');
		} else if (validate()) {
			var newUser = new Entrepreneur(user.id, fullName, email);
			newUser.enterpriseID = enterpriseID;
			newUser.description = description;
			newUser.enterpriseLivelihoodActivities =
				enterpriseLivelihoodActivities;
			newUser.enterpriseName = enterpriseName;
			addEntrepreneur(newUser.id, newUser, pushNextScreen);
			//router.replace('/InviteOthers');
		}
	};

	const pickerSelectStyles = {
		inputIOS: {
			fontSize: 16,
			paddingVertical: 12,
			paddingHorizontal: 10,
			marginTop: theme.spacing.medium,
			marginBottom: theme.spacing.medium,
			borderWidth: 1,
			borderColor: 'gray',
			borderRadius: 4,
			color: 'black',
			paddingRight: 30,
		},
		placeholder: {
			color: 'gray',
		},
	};

	const validate = () => {
		let errors = {};
		// Validate name field
		if (!fullName) {
			errors.fullName = 'Name is required.';
		}

		// Validate email field
		if (!email) {
			errors.email = 'Email is required.';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Email is invalid.';
		}

		if (description.length < 15) {
			errors.description = 'Description must be at least 30 characters.';
		}

		if (!enterpriseRole) {
			errors.fullName = 'Enterprise Role is required.';
		}

		if (!enterpriseLivelihoodActivities) {
			errors.fullName = 'Enterprise Liveliehood Activity is required.';
		}

		if (!enterpriseSector) {
			errors.fullName = 'Enterprise Sector is required.';
		}

		if (!certificateType) {
			errors.fullName = 'Certificate Type or No Certificate is required.';
		}

		if (certificateType != 'No Certificate' && certificateId.length < 5) {
			errors.description =
				'Certificate ID must be at least 5 characters.';
		}

		// Set the errors and update form validity
		setErrors(errors);
		let isFormValid = Object.keys(errors).length === 0;
		return isFormValid;
	};

	useEffect(() => {
		setFullName(user.fullName);
		setEmail(user.email);
		setEnterpriseID(enterprise.enterpriseID);
		setEnterpriseName(enterprise.enterpriseName);
	}, [
		enterprise.enterpriseID,
		enterprise.enterpriseName,
		user.email,
		user.fullName,
	]);

	if (!(user && enterprise)) {
		return <Text>Loading!</Text>;
	}

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
					<Text style={styles.title}>
						Complete your Entrepreneur Profile
					</Text>
					<TextInput
						style={styles.input}
						placeholder={fullName}
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setFullName(text)}
						value={fullName}
						editable={false}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder={email}
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEmail(text)}
						value={email}
						editable={false}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Entreprise Name"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEnterpriseName(text)}
						value={enterpriseName}
						editable={false}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Describe yourself..."
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setDescription(text)}
						value={description}
						multiline={true}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Enterprise Role"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEnterpriseRole(text)}
						value={enterpriseRole}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<Button
						title={'Submit'}
						onPress={() => onSubmitPress()}
						customBtnStyle={styles.joinButton}
					/>
					{/* Display error messages */}
					{Object.values(errors).map((error, index) => (
						<Text key={index} style={styles.error}>
							{error}
						</Text>
					))}
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
	title: {
		width: '100%',
		marginTop: 20,
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: '10%',
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
	error: {
		color: 'red',
		fontSize: theme.typography.mediumBody.fontSize,
		marginBottom: theme.spacing.medium,
	},
	keyboardShouldPersistTaps: { flex: 1, width: '100%' },
});

export default EntrepreneurForm;
