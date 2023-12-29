import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { useConsultantFiltersContext } from '../../../../context/ConsultantFilterContext';
import philippineRegions from '../../../../defaultdata/Philippines-Region.json';
import CheckBox from '../../../../assets/svg/CheckIcon';
import FilterCommonContent from '../FilterCommonContent';
import tabs from '../../../../locales/en/Tabs.json';

const RegionItem = ({ region, onPress, isSelected }) => (
	<View style={styles.regionContainer}>
		<Text
			onPress={onPress}
			style={[styles.regionText, isSelected && styles.selectedRegionText]}
		>
			{region}
		</Text>
		{isSelected && (
			<CheckBox
				width={theme.spacing.xlarge}
				height={theme.spacing.xlarge}
				color={theme.colors.text.dark}
				isChecked={true}
			/>
		)}
	</View>
);

const RegionList = ({ regions, onRegionPress, selectedRegions }) => (
	<>
		{regions.map((region, index) => (
			<RegionItem
				key={index}
				region={region}
				onPress={() => onRegionPress(region)}
				isSelected={selectedRegions.includes(region)}
			/>
		))}
	</>
);

const RegionModal = ({ closeModal }) => {
	const { addRegion, removeRegion, selectedRegions, clearRegions } =
		useConsultantFiltersContext();

	const toggleRegion = (region) => {
		if (selectedRegions.includes(region)) {
			removeRegion(region);
		} else {
			addRegion(region);
		}
	};

	return (
		<FilterCommonContent
			closeModal={closeModal}
			headerAction={clearRegions}
			headerFilter={tabs.Region.text}
			scrollViewContent={
				<RegionList
					regions={philippineRegions}
					onRegionPress={toggleRegion}
					selectedRegions={selectedRegions}
				/>
			}
		/>
	);
};

import { theme } from '../../../../styles/theme';

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

export default RegionModal;
