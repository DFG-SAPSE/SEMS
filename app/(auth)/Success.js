import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

const CheckmarkScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.subConatiner}>
				<Text style={styles.text}>
					You have successfully created an enterprise!
				</Text>
				<FontAwesome name="check-circle" size={150} color="green" />
			</View>
			<View style={styles.subConatiner}>
				<Text style={styles.subtext}>
					You can create projects within your enterprise, and see all
					sorts of data!
				</Text>
				<Button
					title={'Go to dashboard'}
					onPress={() => router.replace('/home')}
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
		fontSize: 24,
		marginTop: theme.spacing.xxxlarge,
		paddingTop: theme.spacing.xxxlarge,
		marginBottom: theme.spacing.xlarge,
		textAlign: 'center',
	},
	subtext: {
		fontSize: 16,
		marginTop: 10,
		color: theme.colors.grey,
		textAlign: 'center',
	},
	homeButton: {
		marginTop: theme.spacing.xlarge,
		marginBottom: theme.spacing.xxlarge,
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.primary.light,
		borderRadius: 24,
	},
});

export default CheckmarkScreen;
