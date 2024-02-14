import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

const InviteOthers = () => {
	return (
		<View style={styles.container}>
			<View style={styles.subConatiner}>
				<Text style={styles.text}>
					Who else is part of this enterprise?
				</Text>
				<Text style={styles.subtext}>
					Invite a few of your teammates.
				</Text>
				<Button
					title={'Share link'}
					onPress={() => router.replace('/Success')}
					customBtnStyle={styles.shareLinkButton}
				/>
				<Button
					title={'Add from contacts'}
					onPress={() => router.replace('/Success')}
					customBtnStyle={styles.addFromContactsButton}
					customTextStyle={styles.buttonText}
				/>
				<Button
					title={'Add by email'}
					onPress={() => router.replace('/Success')}
					customBtnStyle={styles.addByEmailButton}
					customTextStyle={styles.buttonText}
				/>
			</View>
			<View style={styles.subConatiner}>
				<Button
					title={'Continue'}
					onPress={() => router.replace('/Success')}
					customBtnStyle={styles.homeButton}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		textAlign: 'center',
	},
	subConatiner: {
		alignItems: 'center',
		textAlign: 'center',
	},
	text: {
		fontSize: 20,
		marginTop: theme.spacing.xlarge,
		paddingTop: theme.spacing.xxxlarge,
		marginBottom: theme.spacing.medium,
		textAlign: 'center',
		color: theme.colors.black,
	},
	subtext: {
		fontSize: 16,
		color: theme.colors.grey,
		textAlign: 'center',
	},
	shareLinkButton: {
		marginTop: theme.spacing.xlarge,
		marginBottom: theme.spacing.medium,
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: '37%',
		borderRadius: 24,
	},
	addFromContactsButton: {
		marginBottom: theme.spacing.medium,
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: '28%',
		backgroundColor: theme.colors.secondary.white,
		borderColor: theme.colors.primary.dark,
		borderWidth: 1,
		borderRadius: 24,
	},
	buttonText: {
		color: theme.colors.primary.dark,
	},
	addByEmailButton: {
		marginBottom: theme.spacing.medium,
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: '34%',
		backgroundColor: theme.colors.secondary.white,
		borderColor: theme.colors.primary.dark,
		borderWidth: 1,
		borderRadius: 24,
	},
	homeButton: {
		marginTop: theme.spacing.xlarge,
		marginBottom: theme.spacing.xxlarge,
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: '37%',
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
});

export default InviteOthers;
