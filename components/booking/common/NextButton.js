import React from 'react';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';

import Button from '../../common/Button';
import { theme } from '../../../styles/theme';

const NextButton = ({ nextRoute }) => {
	return (
		<Button
			onPress={() => {
				router.push(nextRoute);
			}}
			title={'Next'}
			customBtnStyle={styles.button}
		/>
	);
};

const styles = StyleSheet.create({
	button: {
		width: '46%',
		borderRadius: 32,
		paddingVertical: theme.spacing.medium,
	},
});

export default NextButton;
