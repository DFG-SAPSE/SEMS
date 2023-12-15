import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import Button from '../../common/Button';
import { useFonts } from 'expo-font';
import { fonts } from '../../../styles/fonts';
import { useSpecialities } from '../../../context/FilterConsultantsContext';
import ModalHeader from './ModalContentComponents/ModalHeader';
const PriceRangeModalContent = ({ closeModal }) => {
	const { price, setPrice } = useSpecialities();
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return undefined;
	}

	return (
		<View style={styles.modalContent}>
			<ModalHeader filter={'Price Range'} onPress={() => setPrice(0)} />
			<View style={styles.divider} />
			<ScrollView style={styles.scrollView}>
				<View style={styles.sliderContainer}>
					<Text style={styles.sliderLabel}>$ {price}</Text>
					<Slider
						style={styles.slider}
						minimumValue={0}
						maximumValue={30}
						step={1}
						value={price}
						onValueChange={(value) => setPrice(value)}
					/>
				</View>
			</ScrollView>
			<Button title="Done" onPress={closeModal} />
		</View>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	modalContent: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '30%',
		backgroundColor: 'white',
		padding: theme.spacing.xxlarge,
		borderTopEndRadius: theme.spacing.xlarge,
		borderStartStartRadius: theme.spacing.xlarge,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerText: {
		color: '#000',
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.large.fontSize,
	},
	divider: {
		backgroundColor: theme.colors.gray.border,
		marginTop: theme.spacing.medium,
		height: 1,
	},
	scrollView: {
		flex: 1,
	},
	sliderContainer: {
		marginTop: theme.spacing.medium,
	},
	sliderLabel: {
		fontSize: theme.spacing.medium,
		fontFamily: 'Roboto-Medium',
	},
	slider: {
		marginVertical: theme.spacing.medium,
		width: '100%',
	},
});

export default PriceRangeModalContent;
