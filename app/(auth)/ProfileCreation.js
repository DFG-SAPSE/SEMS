import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import ConsultantForm from '../../components/profileCreation/ConsultantForm';
import EntrepreneurForm from '../../components/profileCreation/EntrepreneurForm';
import { getAuthChange } from '../../services/auth';
import { router, useLocalSearchParams } from 'expo-router';

export default function ProfileCreation() {
	const params = useLocalSearchParams();
	const { enterpriseObject } = params;
	const [user, setUser] = useState(''); //stores currently logged in user
	const [enterprise, setEnterprise] = useState(''); //stores current enterprise
	const [isConsultant, setIsConsultant] = useState(true);

	// Handle user state changes
	function setAuthChange(newUser) {
		setUser(newUser);
	}

	const pushNextScreen = () => {
		router.replace('/home');
	};

	useEffect(() => {
		getAuthChange(setAuthChange);
		setEnterprise(JSON.parse(enterpriseObject));
		setIsConsultant(user.isConsultant);
	}, [enterpriseObject, user]);

	return (
		<View style={styles.container}>
			{user && enterpriseObject ? (
				<View style={styles.container}>
					{isConsultant ? (
						<ConsultantForm
							user={user}
							enterprise={enterprise}
							pushNextScreen={pushNextScreen}
						/>
					) : (
						<EntrepreneurForm
							user={user}
							enterprise={enterprise}
							pushNextScreen={pushNextScreen}
						/>
					)}
				</View>
			) : (
				<Text>Loading!</Text>
			)}
		</View>
	);
}

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
});
