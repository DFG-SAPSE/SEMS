import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ConsultantForm from '../../components/profileCreation/ConsultantForm';
import EntrepreneurForm from '../../components/profileCreation/EntrepreneurForm';
import { getAuthChange } from '../../services/auth';

export default function ProfileCreation() {
	const [user, setUser] = useState(''); //stores currently logged in user

	// Handle user state changes
	function setAuthChange(newUser) {
		setUser(newUser);
	}

	useEffect(() => {
		getAuthChange(setAuthChange);
	}, []);
	
	return (
		<View style={styles.container}>
			<ConsultantForm user={user} />
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
