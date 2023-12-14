import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import CheckBox from '../../../assets/svg/CheckIcon';
import Button from '../../common/Button';
import { useFonts } from 'expo-font';
import { fonts } from '../../../styles/fonts';
import { useSpecialities } from '../../../context/FilterConsultantsContext';

const philippineRegions = [
	'National Capital Region (NCR)',
	'Cordillera Administrative Region (CAR)',
	'Region I (Ilocos Region)',
	'Region II (Cagayan Valley)',
	'Region III (Central Luzon)',
	'Region IV-A (CALABARZON)',
	'Region IV-B (MIMAROPA)',
	'Region V (Bicol Region)',
	'Region VI (Western Visayas)',
	'Region VII (Central Visayas)',
	'Region VIII (Eastern Visayas)',
	'Region IX (Zamboanga Peninsula)',
	'Region X (Northern Mindanao)',
	'Region XI (Davao Region)',
	'Region XII (SOCCSKSARGEN)',
	'Region XIII (Caraga)',
];
//come back rename and refactor
const RegionModalContent = ({ closeModal }) => {
	const { addRegion, removeRegion, selectedRegions } = useSpecialities();
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return undefined;
	}

	const isRegionSelected = (region) => selectedRegions.includes(region);

	const toggleRegion = (speciality) => {
		if (isRegionSelected(speciality)) {
			removeRegion(speciality);
		} else {
			addRegion(speciality);
		}
	};

	return (
		<View style={styles.modalContent}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Region</Text>
			</View>
			<View style={styles.divider} />
			<ScrollView style={styles.scrollView}>
				{philippineRegions.map((region, index) => (
					<View key={index} style={styles.specialtyContainer}>
						<Text
							onPress={() => toggleRegion(region)}
							style={[
								styles.specialtyText,
								isRegionSelected(region) &&
								styles.selectedSpecialtyText,
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
				))}
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
		height: '60%',
		backgroundColor: 'white',
		padding: theme.spacing.xxlarge,
		borderRadius: theme.spacing.xlarge,
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
	specialtyContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
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
	specialtyText: {
		color: theme.colors.text.dark,
		letterSpacing: 0.1,
		flexGrow: 1,
		fontFamily: 'Roboto-Regular',
		fontSize: theme.typography.mediumBody.fontSize,
		paddingVertical: theme.spacing.medium,
	},
	selectedSpecialtyText: {
		color: theme.colors.secondary.dark,
	},
});

export default RegionModalContent;
