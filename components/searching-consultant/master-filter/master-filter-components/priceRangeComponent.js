import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';
import tabs from '../../../../locales/en/Tabs.json';
// PriceModal is a component for handling the price range filter
const PriceModal = ({ setPrice, price }) => {
	return (
		<>
			{/* Title for the price range filter */}
			<Text style={styles.title}>{tabs.PriceRange.label}</Text>

			{/* Container for the price range slider */}
			<View style={styles.sliderContainer}>
				{/* Display the selected price value */}
				<Text style={styles.sliderLabel}>₱ {price}</Text>

				{/* Slider component for selecting the price range */}
				<Slider
					style={styles.slider}
					minimumValue={0}
					maximumValue={3000}
					step={1}
					value={price}
					onValueChange={(value) => setPrice(value)}
				/>
			</View>
		</>
	);
};

// Styles
import { theme } from '../../../../styles/theme';
const styles = StyleSheet.create({
	title: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.mediumBody.fontSize,
		paddingVertical: theme.spacing.medium,
	},
	sliderContainer: {
		marginTop: theme.spacing.medium,
	},
	sliderLabel: {
		fontSize: theme.typography.smallBody.fontSize,
		fontFamily: 'Roboto-Medium',
	},
	slider: {
		marginVertical: theme.spacing.medium,
		width: '100%',
	},
});

export default PriceModal;
