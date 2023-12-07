import * as React from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Image,
	TouchableOpacity,
	Text,
} from 'react-native';
import filterImage from '../../styles/bi_filter.png';

const filterCategories = [
	'Speciality',
	'Industry',
	'Experience',
	'Consultations',
];

const FilterTabs = ({ activeTab, setActiveTab }) => {
	const handleTabPress = (category) => {
		setActiveTab(category);
	};

	return (
		<View style={styles.container}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.filterContainer}>
					<Image style={styles.filterImage} source={filterImage} />
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
											: theme.colors.gray,
								},
							]}
						>
							<Text style={styles.tabText}>{category}</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
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
	},
	filterImage: {
		width: theme.spacing.xxlarge,
		height: theme.spacing.xxlarge,
		backgroundColor: theme.colors.primary.dark,
		borderRadius: 100,
	},
	tabButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		marginHorizontal: theme.spacing.tiny,
	},
	tabText: {
		paddingVertical: theme.spacing.small,
		paddingHorizontal: theme.spacing.small,
		fontSize: theme.typography.mediumBodyBold.fontSize,
		letterSpacing: 0.01,
		color: theme.colors.white,
	},
});

export default FilterTabs;
