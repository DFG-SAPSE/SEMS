import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { useSpecialities } from '../../../context/FilterConsultantsContext';
import philippineRegions from '../../../defaultdata/Philippines-Region.json';
import CheckBox from '../../../assets/svg/CheckIcon';
import ModalContent from './ModalContent';

const RegionModalContent = ({ closeModal }) => {
	const { addRegion, removeRegion, selectedRegions, clearRegions } =
		useSpecialities();

	const isRegionSelected = (region) => selectedRegions.includes(region);

	const toggleRegion = (region) => {
		if (isRegionSelected(region)) {
			removeRegion(region);
		} else {
			addRegion(region);
		}
	};

	const scrollViewContent = philippineRegions.map((region, index) => (
		<View key={index} style={styles.regionContainer}>
			<Text
				onPress={() => toggleRegion(region)}
				style={[
					styles.regionText,
					isRegionSelected(region) && styles.selectedRegionText,
				]}
			>
				{region}
			</Text>
			{isRegionSelected(region) && (
				<CheckBox
					width={35}
					height={35}
					color={theme.colors.text.dark}
					isChecked={true}
				/>
			)}
		</View>
	));

	return (
		<ModalContent
			closeModal={closeModal}
			headerAction={clearRegions}
			headerFilter={'Region'}
			scrollViewContent={scrollViewContent}
		/>
	);
};

import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
	regionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	regionText: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		flexGrow: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: theme.typography.mediumBody.fontSize,
		paddingVertical: theme.spacing.medium,
	},
	selectedRegionText: {
		color: theme.colors.secondary.dark,
	},
});

export default RegionModalContent;
