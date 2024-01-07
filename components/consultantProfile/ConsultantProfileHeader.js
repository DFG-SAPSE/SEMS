import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ConsultantProfileHeader = () => {
	return (
		<>
			<View style={styles.imageContainer}>
				<Image
					resizeMode="contain"
					source={{
						uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51d92ab1cdd650febd5fe87242bcf6062499a5c5a937fe3f5dbb77dd142a6e8c?apiKey=978f41e0131a442f8daf873f3d5553aa&',
					}}
					style={styles.image}
				/>
			</View>
		</>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	image: {
		alignSelf: 'center',
		width: '100%',
		aspectRatio: '1',
		borderRadius: theme.spacing.small,
	},
	imageContainer: {
		padding: theme.spacing.large,
	},
});

export default ConsultantProfileHeader;
