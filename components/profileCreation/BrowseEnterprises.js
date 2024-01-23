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
import {
	addEnterprise,
	generateNewid,
	getAllEnterprises,
} from '../../services/profile';
import { Enterprise } from '../../services/model';

const BrowseEnterprises = ({ handleCallback }) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [clicked, setClicked] = useState(false);
	const [filteredDataSource, setFilteredDataSource] = useState([]);

	const getItem = (item) => {
		console.log(item);
		console.log('Submit');
	};

	useEffect(() => {
		getAllEnterprises()
			.then((response) => {
				setFilteredDataSource(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

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
		</SafeAreaView>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	root: {
		justifyContent: 'center',
		alignItems: 'center',
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

export default BrowseEnterprises;
