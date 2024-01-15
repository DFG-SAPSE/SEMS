import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from '../../../styles/fonts';
import Button from '../../common/Button';
import tabs from '../../../locales/en/Tabs.json';
import { theme } from '../../../styles/theme';

// This component is a common content used in every modal.
// It includes a header with a description and a clear all button,
// as well as a scroll view for modal-specific content and a "Done" button.
const FilterCommonContent = ({
	closeModal,
	headerFilter,
	headerAction,
	scrollViewContent,
}) => {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.modalContent}>
			<View style={styles.header}>
				<Text style={styles.headerText}>{headerFilter}</Text>
				<Pressable onPress={headerAction}>
					<Text style={styles.clearAllText}>{tabs.ClearAll}</Text>
				</Pressable>
			</View>
			<View style={styles.divider} />
			<ScrollView style={styles.scrollView}>
				{scrollViewContent}
			</ScrollView>
			<Button title="Done" onPress={closeModal} />
		</View>
	);
};

const styles = StyleSheet.create({
	modalContent: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '60%',
		backgroundColor: theme.colors.white,
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
		letterSpacing: 0.1,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.large.fontSize,
	},
	clearAllText: {
		color: theme.colors.primary.dark,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.smallBody.fontSize,
	},
	divider: {
		backgroundColor: theme.colors.border,
		marginTop: theme.spacing.medium,
		height: 1,
	},
	scrollView: {
		flex: 1,
	},
});

export default FilterCommonContent;
