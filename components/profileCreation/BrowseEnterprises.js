import React, { useEffect, useState } from 'react';
import {
	Image,
	Text,
	TextInput,
	// TouchableOpacity,
	View,
	SafeAreaView,
	StyleSheet,
	FlatList,
	ScrollView,
	TouchableOpacity,
	Alert,
} from 'react-native';
import EnterpriseList from './search/EnterpriseList';
import SearchBar from './search/SearchBar';
import { router } from 'expo-router';
import Button from '../common/Button';
import { addEnterprise, getAllEnterprises } from '../../services/profile';
import { Enterprise } from '../../services/model';

const BrowseEnterprises = ({ handleCallback, onFooterLinkPress }) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [clicked, setClicked] = useState(false);
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [errorDataSource, setErrorDataSource] = useState([]);
	const [enterprise, setEnterprise] = useState('');
	const [enterpriseIDSlice, setEnterpriseIDSlice] = useState('');
	const [enterpriseName, setEnterpriseName] = useState('');
	const [errors, setErrors] = useState({});
	const [send, setSend] = useState(false);

	const onSubmitPress = () => {
		if (validate()) {
			setSend(true);
		}
	};

	const sendEnterprise = () => {
		var newEnterprise = new Enterprise(
			enterprise.enterpriseID,
			enterpriseName,
			enterprise.description,
		);
		newEnterprise.website = enterprise.website;
		newEnterprise.certificateID = enterprise.certificateID;
		newEnterprise.certificateType = enterprise.certificateType;
		newEnterprise.sector = enterprise.sector;
		newEnterprise.livelihoodActivities = enterprise.livelihoodActivities;
		//console.log(newEnterprise);
		handleCallback(newEnterprise);
	};

	const validate = () => {
		let errors = {};

		if (!enterpriseName) {
			errors.enterpriseName = 'Enterprise Name is required';
		}

		if (!enterpriseIDSlice) {
			errors.enterpriseID = 'Enterprise ID is required';
		} else {
			var data_filter = errorDataSource.filter(
				(element) => element.id.slice(-4) === enterpriseIDSlice,
			);

			if (!data_filter.length) {
				errors.enterpriseID = 'Enterprise ID is incorrect';
			} else if (data_filter[0].enterpriseName !== enterpriseName) {
				errors.enterpriseName = 'Enterprise Name is incorrect';
			} else {
				setEnterprise(data_filter[0]);
				//console.log(enterprise);
			}
		}

		// Set the errors and update form validity
		setErrors(errors);
		let isFormValid = Object.keys(errors).length === 0;
		return isFormValid;
	};

	useEffect(() => {
		getAllEnterprises()
			.then((response) => {
				setFilteredDataSource(response);
				setErrorDataSource(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		if (send) {
			sendEnterprise();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [send]);

	return (
		<SafeAreaView style={styles.root}>
			{!clicked && <Text style={styles.title}>Browse Enterprises</Text>}
			<SearchBar
				searchPhrase={searchPhrase}
				setSearchPhrase={setSearchPhrase}
				clicked={clicked}
				setClicked={setClicked}
			/>
			{clicked ? (
				<EnterpriseList
					searchPhrase={searchPhrase}
					data={filteredDataSource}
					setClicked={setClicked}
				/>
			) : null}
			{!clicked && (
				<View style={styles.footerView}>
					<TextInput
						style={styles.input}
						placeholder="Enterprise Name"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEnterpriseName(text)}
						value={enterpriseName}
						multiline={true}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Enter last 4 digits of enterprise ID to join"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEnterpriseIDSlice(text)}
						value={enterpriseIDSlice}
						multiline={true}
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
					<Button
						title={'Submit'}
						onPress={() => onSubmitPress()}
						customBtnStyle={styles.joinButton}
					/>
					{Object.values(errors).map((error, index) => (
						<Text key={index} style={styles.error}>
							{error}
						</Text>
					))}
				</View>
			)}
			<View style={styles.footerView}>
				<Text style={styles.footerText}>
					Having trouble?{' '}
					<Text onPress={onFooterLinkPress} style={styles.footerLink}>
						Create Enterprise
					</Text>
				</Text>
				<Text style={styles.footerTextSmall}>
					{' '}
					Please confirm the enterprise name and last 4 digits of the
					ID to join existing enterprises.{' '}
				</Text>
			</View>
		</SafeAreaView>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: theme.spacing.xlarge,
		marginVertical: theme.spacing.xlarge,
	},
	title: {
		width: '100%',
		marginTop: 20,
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: '10%',
	},
	footerView: {
		flex: 1,
		width: '100%',
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
});

export default BrowseEnterprises;
