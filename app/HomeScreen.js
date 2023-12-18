import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { firestore, auth } from '../services/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export default function HomeScreen() {
	const route = useRoute();
	const navigation = useNavigation();

	const onFooterLinkPress = () => {
		navigation.navigate('LoginScreen');
	};

	useEffect(() => {
		onAuthStateChanged(auth, async (currentUser) => {
			if (currentUser) {
				// User is signed in
				const uid = currentUser.uid;
				const usersRef = doc(firestore, 'users', uid); //get profile info from database
				await getDoc(usersRef)
					.then((userSnap) => {
						const user = userSnap.data();
						console.log(user);
						navigation.setParams({ user });
					})
					.catch((error) => {
						alert(error);
					});
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	}, [navigation]);

	if (route.params === undefined || route.params.user === undefined) {
		return (
			<View style={styles.container}>
				<Text onPress={onFooterLinkPress} style={styles.footerLink}>
					Please Log in
				</Text>
				<StatusBar style="auto" />
			</View>
		);
	} else {
		const user = route.params.user; //gets profile info of current user
		return (
			<View style={styles.container}>
				<Text>Welcome {user.fullName}</Text>
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	footerView: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20,
	},
	footerText: {
		fontSize: 16,
		color: '#2e2e2d',
	},
	footerLink: {
		color: '#788eec',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
