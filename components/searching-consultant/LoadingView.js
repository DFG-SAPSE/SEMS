import React from 'react';
import { View, StyleSheet } from 'react-native';
import Loading from '../../components/common/Loading';

const LoadingView = ({ isLoading }) => {
	return isLoading ? (
		<View style={styles.center}>
			<Loading />
		</View>
	) : null;
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: '50%',
	},
});

export default LoadingView;
