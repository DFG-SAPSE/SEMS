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
import RNPickerSelect from 'react-native-picker-select';
//import { RNMultiSelect } from 'rn-multipicker';
import { router } from 'expo-router';
import Button from '../common/Button';
import { addEnterprise, generateNewEnterpriseID } from '../../services/profile';
import {
	Enterprise,
	enterpriseSectorsList,
	certificateTypeList,
} from '../../services/model';

const EnterpriseForm = ({ handleCallback, onFooterLinkPress }) => {
	const [enterpriseID, setEnterpriseID] = useState('');
	const [enterpriseName, setEnterpriseName] = useState('');
	const [description, setDescription] = useState('');
	const [website, setWebsite] = useState('');
	const [sector, setSector] = useState('');
	const [livelihoodActivities, setLivelihoodActivities] = useState('');
	const [certificateType, setCertificateType] = useState(null);
	const [certificateID, setCertificateID] = useState('');
	const [errors, setErrors] = useState({});

	const onSubmitPress = () => {
		if (validate()) {
			if (enterpriseID) {
				var newEnterprise = new Enterprise(
					enterpriseID,
					enterpriseName,
					description,
				);
				newEnterprise.website = website;
				newEnterprise.certificateID = certificateID;
				newEnterprise.certificateType = certificateType;
				newEnterprise.sector = sector;
				newEnterprise.livelihoodActivities = livelihoodActivities;
				addEnterprise(enterpriseID, newEnterprise);
				handleCallback(newEnterprise);
				Alert.alert('Enterprise created successfully');
			} else {
				Alert.alert('Issue creating new Enterprise');
			}
		}
	};

	const validate = () => {
		let errors = {};

		if (!enterpriseName) {
			errors.enterpriseName = 'Enterprise is required';
		}
		if (description.length < 15) {
			errors.description = 'Description must be at least 15 characters.';
		}

		if (!sector) {
			errors.sector = 'Please select a sector';
		}

		if (!livelihoodActivities) {
			errors.livelihoodActivities = 'Livelihood Activities is required';
		}

		if (!certificateType) {
			errors.certificateType = 'Please select a certificate type';
		}

		// Set the errors and update form validity
		setErrors(errors);
		let isFormValid = Object.keys(errors).length === 0;
		return isFormValid;
	};

	useEffect(() => {
		setEnterpriseID(generateNewEnterpriseID());
	}, []);

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
					<Text style={styles.title}>Create an Enterprise</Text>
					<TextInput
						style={styles.input}
						placeholder="Enterprise Name"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEnterpriseName(text)}
						value={enterpriseName}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Description"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setDescription(text)}
						value={description}
						multiline={true}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Website link"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setWebsite(text)}
						value={website}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<View style={styles.wrapper}>
						<RNPickerSelect
							placeholder={{
								label: 'Select a Sector',
								value: null,
							}}
							onValueChange={(value) => setSector(value)}
							style={pickerSelectStyles}
							items={enterpriseSectorsList.map((item) => ({
								label: item,
								value: item,
							}))}
						/>
					</View>
					<TextInput
						style={styles.input}
						placeholder="Enterprise Livelihood Activity"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setLivelihoodActivities(text)}
						value={livelihoodActivities}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<View style={styles.wrapper}>
						<RNPickerSelect
							placeholder={{
								label: 'Select a Certificate Type',
								value: null,
							}}
							onValueChange={(value) => setCertificateType(value)}
							style={pickerSelectStyles}
							items={certificateTypeList.map((item) => ({
								label: item,
								value: item,
							}))}
						/>
					</View>
					<TextInput
						style={styles.input}
						placeholder="Certificate ID"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setCertificateID(text)}
						value={certificateID}
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
					<View style={styles.footerView}>
						<Text style={styles.footerText}>
							Having trouble?{' '}
							<Text
								onPress={onFooterLinkPress}
								style={styles.footerLink}
							>
								Browse Enterprises
							</Text>
						</Text>
						<Text style={styles.footerTextSmall}>
							{' '}
							If your enterprise does not exist on our app, please
							create an enterprise.{' '}
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
		height: 100,
		width: 200,
		alignSelf: 'center',
		margin: theme.spacing.xlarge,
		resizeMode: 'contain',
	},
	title: {
		width: '100%',
		marginTop: 20,
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: '10%',
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
	footerTextSmall: {
		...theme.typography.tinyBody,
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

export default EnterpriseForm;
