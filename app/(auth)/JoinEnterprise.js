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
import { router } from 'expo-router';
import EnterpriseForm from '../../components/profileCreation/EnterpriseForm';
import BrowseEnterprises from '../../components/profileCreation/BrowseEnterprises';
import { getAuthChange } from '../../services/auth';

export default function JoinEnterprise() {
	//const [user, setUser] = useState(''); //stores currently logged in user
	//const [enterprise, setEnterprise] = useState('');
	const [browse, setBrowse] = useState(false);

	/*
	// Handle user state changes
	function setAuthChange(newUser) {
		setUser(newUser);
	}*/

	const handleCallback = (childEnterpriseObject) => {
		// Update the name in the component's state
		console.log(childEnterpriseObject);
		pushNextScreen(childEnterpriseObject);
	};
	const pushNextScreen = (enterpriseObj) => {
		router.push({
			pathname: '/ProfileCreation',
			params: {
				enterpriseObject: JSON.stringify(enterpriseObj),
			},
		});
	};

	const onFooterLinkPress = () => {
		setBrowse(!browse);
	};

	/*useEffect(() => {
		getAuthChange(setAuthChange);
	}, []);*/

	/*if (user === null) {
		return <div>Loading!</div>;
	}*/
	return (
		<View style={styles.container}>
			{browse ? (
				<>
					<BrowseEnterprises
						handleCallback={handleCallback}
						onFooterLinkPress={onFooterLinkPress}
					/>
				</>
			) : (
				<>
					<EnterpriseForm
						handleCallback={handleCallback}
						onFooterLinkPress={onFooterLinkPress}
					/>
				</>
			)}
		</View>
	);
}

//<ConsultantForm user={user} />
import { theme } from '../../styles/theme';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	footerView: {
		flex: 1,
		alignItems: 'center',
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
