import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import ConsultantForm from '../../components/profileCreation/ConsultantForm';
import EntrepreneurForm from '../../components/profileCreation/EntrepreneurForm';
import { getAuthChange } from '../../services/auth';
import { router, useLocalSearchParams } from 'expo-router';

export default function ProfileCreation() {
	const [user, setUser] = useState(''); //stores currently logged in user
	const [enterprise, setEnterprise] = useState(''); //stores current enterprise
	const [isConsultant, setIsConsultant] = useState(true);
	const params = useLocalSearchParams();
	const { enterpriseObject } = params;

	// Handle user state changes
	function setAuthChange(newUser) {
		setUser(newUser);
	}

	useEffect(() => {
		getAuthChange(setAuthChange);
		setEnterprise(JSON.parse(enterpriseObject));
	}, [enterpriseObject]);

	return (
		<View style={styles.container}>
			{user && enterpriseObject ? (
				<View style={styles.container}>
					{isConsultant ? (
						<ConsultantForm user={user} enterprise={enterprise} />
					) : (
						<EntrepreneurForm />
					)}
				</View>
			) : (
				<Text>Loading!</Text>
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
});
