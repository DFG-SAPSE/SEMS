import * as React from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Text,
} from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from '../../styles/fonts';
import FilterIcon from '../../assets/svg/FilterIcon';
import FilterModal from './FilterModal';

const FilterTabs = ({ activeTab, setActiveTab, filterCategories }) => {
	const [fontsLoaded] = useFonts(fonts);
	const [modalVisible, setModalVisible] = React.useState(false);

	if (!fontsLoaded) {
		return undefined;
	}
	const handleTabPress = (category) => {
		setActiveTab(category);
		openModal();
	};

	const openModal = () => {
		setModalVisible(!false);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.filterContainer}>
					<TouchableOpacity
						onPress={() => handleTabPress('All')}
						style={styles.filterImage}
					>
						<FilterIcon width={35} height={35} color="white" />
					</TouchableOpacity>
					{filterCategories.map((category) => (
						<TouchableOpacity
							key={category}
							onPress={() => handleTabPress(category)}
							style={[
								styles.tabButton,
								{
									backgroundColor:
										category === activeTab
											? theme.colors.primary.dark
											: theme.colors.gray.text,
								},
							]}
						>
							<Text style={styles.tabText}>{category}</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
			<FilterModal
				modalVisible={modalVisible}
				closeModal={closeModal}
				filterContent={activeTab}
			/>
		</View>
	);
};

import { theme } from '../../styles/theme';

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
	filterImage: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.colors.primary.dark,
		borderRadius: 100,
		padding: theme.spacing.tiny,
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
});

export default FilterTabs;
