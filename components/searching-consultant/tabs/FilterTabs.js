import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Text,
} from 'react-native';
import { useFonts } from 'expo-font';

import { theme } from '../../../styles/theme';
import { fonts } from '../../../styles/fonts';

import FilterIcon from '../../../assets/svg/FilterIcon';
import FilterModal from '../common/FilterModal';
import filteringOptions from '../../../defaultdata/Filtering-Tabs.json';

// Custom reusable button component for filtering tabs
const TabButton = ({ onPress, children, active }) => (
	<TouchableOpacity
		onPress={onPress}
		style={[
			styles.tabButton,
			{
				backgroundColor: active
					? theme.colors.primary.dark
					: theme.colors.gray.text,
			},
		]}
	>
		{children}
	</TouchableOpacity>
);
//This is for part of the main search UI where we display multiple tabs.
const FilterTabs = () => {
	// State for controlling modal visibility and active filtering tab
	const [modalVisible, setModalVisible] = useState(false);
	const [activeTab, setActiveTab] = useState('');

	// Loading fonts using the useFonts hook
	const [fontsLoaded] = useFonts(fonts);

	// If fonts are not yet loaded, return null (render nothing)
	if (!fontsLoaded) {
		return null;
	}

	// Handler for tab press, sets the active tab and opens the modal
	const handleTabPress = (category) => {
		setActiveTab(category);
		openModal();
	};

	// Opens the modal
	const openModal = () => {
		setModalVisible(true);
	};

	// Closes the modal
	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.filterContainer}>
					{/* Special case for the "All" tab with FilterIcon */}
					<TouchableOpacity
						style={styles.svgContainer}
						onPress={() => handleTabPress('All')}
					>
						<FilterIcon
							width={theme.spacing.xlarge}
							height={theme.spacing.xlarge}
							color={theme.colors.white}
						/>
					</TouchableOpacity>

					{/* Mapping through filtering options and rendering TabButtons */}
					{filteringOptions.map((category) => (
						<TabButton
							key={category}
							onPress={() => handleTabPress(category)}
							active={category === activeTab}
						>
							<Text style={styles.tabText}>{category}</Text>
						</TabButton>
					))}
				</View>
			</ScrollView>

			{/* FilterModal component for displaying additional filtering options */}
			<FilterModal
				modalVisible={modalVisible}
				closeModal={closeModal}
				filterContent={activeTab}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	filterContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: theme.spacing.small,
		justifyContent: 'center',
		marginVertical: theme.spacing.small,
	},
	tabButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		marginHorizontal: theme.spacing.tiny,
	},
	tabText: {
		paddingVertical: theme.spacing.mediumSmall,
		paddingHorizontal: theme.spacing.medium,
		letterSpacing: 0.01,
		color: theme.colors.white,
		fontFamily: 'Roboto-Regular',
		fontSize: theme.typography.mediumBody.fontSize,
	},
	svgContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.colors.primary.dark,
		borderRadius: 100,
		padding: theme.spacing.tiny,
	},
});

export default FilterTabs;
