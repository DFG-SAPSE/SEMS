import React, { useEffect, useState } from 'react';
import {
	Image,
	Text,
	TextInput,
	// TouchableOpacity,
	View,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RNMultiSelect } from 'rn-multipicker';
import { router } from 'expo-router';
import Button from '../common/Button';
import { Consultant, regions } from '../../services/model';
import { addConsultant } from '../../services/profile';

const ConsultantForm = ({ user, enterprise, pushNextScreen }) => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [enterpriseID, setEnterpriseID] = useState('');
	const [enterpriseName, setEnterpriseName] = useState('');
	const [enterpriseRole, setEnterpriseRole] = useState('');
	const [description, setDescription] = useState('');
	const [experienceYears, setExperienceYears] = useState(0);
	const [geographic_regions, setGeographic_regions] = useState([]);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	const [errors, setErrors] = useState({});

	const onSubmitPress = () => {
		if (!user) {
			Alert.alert('Sorry Try again');
			router.replace('/LoginScreen');
		} else {
			Alert.alert(
				'Confirm Service Price',
				'Please confirm you set minimum price to 0 if you offer ProBono services',
				[
					{
						text: 'Yes',
						onPress: () => complete(),
					},
					{
						text: 'No',
						onPress: () =>
							(errors.minPrice =
								'Please set the minimum price correctly'),
					},
				],
				{ cancelable: false },
			);
		}
	};

	const complete = () => {
		if (validate()) {
			var newUser = new Consultant(user.id, fullName, email);
			newUser.enterpriseID = enterpriseID;
			newUser.description = description;
			newUser.experienceYears = experienceYears;
			newUser.geographic_regions = geographic_regions;
			newUser.enterpriseRole = enterpriseRole;
			newUser.minPrice = minPrice;
			newUser.maxPrice = maxPrice;
			addConsultant(newUser.id, newUser, pushNextScreen);
		}
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
			errors.enterpriseRolee = 'Enterprise Role is required.';
		}

		if (experienceYears < 1) {
			errors.experienceYears = 'Must have at least 1 year of experience';
		} else if (!Number.isInteger(experienceYears)) {
			errors.experienceYears = 'Years of experience must be an integer';
		}

		if (geographic_regions.length < 1) {
			errors.geographic_regions =
				'Must set at least one geographic region';
		}

		if (minPrice < 0) {
			errors.minPrice = 'Please set the minimum price correctly';
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
						Complete your Consultant Profile
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
						placeholder="Enterprise Role"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEnterpriseRole(text)}
						value={enterpriseRole}
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
						placeholder="Years of Experience"
						placeholderTextColor="#aaaaaa"
						inputMode="decimal"
						onChangeText={(text) =>
							setExperienceYears(Number(text))
						}
						//value={experienceYears.toString()}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Minimum Price of Services"
						placeholderTextColor="#aaaaaa"
						inputMode="decimal"
						onChangeText={(text) => setMinPrice(Number(text))}
						//value={minPrice.toString()}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Maximum Price of Services"
						placeholderTextColor="#aaaaaa"
						inputMode="decimal"
						onChangeText={(text) => setMaxPrice(Number(text))}
						//value={maxPrice.toString()}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<View style={styles.wrapper}>
						<RNMultiSelect
							placeholder="Geographic regions"
							data={regions}
							onSelectedItemsChange={(value) =>
								setGeographic_regions(value)
							}
							selectedItems={geographic_regions}
						/>
					</View>
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

export default ConsultantForm;
