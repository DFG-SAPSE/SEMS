import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ searchQuery, onSearch, placeHolder }) => {
	return (
		<View style={styles.searchInputContainer}>
			<TextInput
				style={styles.searchInput}
				onChangeText={onSearch}
				value={searchQuery}
				placeholder={placeHolder}
				placeholderTextColor={theme.colors.text.dark}
			/>
			<Ionicons
				style={styles.searchIcon}
				name="ios-search"
				size={theme.spacing.large}
				color={theme.colors.text.dark}
			/>
		</View>
	);
};
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	searchInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 0,
		borderRadius: theme.spacing.xlarge,
		padding: theme.spacing.tiny,
		height: 60,
		position: 'relative',
		backgroundColor: theme.colors.gray.background,
	},
	searchInput: {
		flex: 1,
		paddingLeft: theme.spacing.medium,
		alignItems: 'center',
		fontSize: theme.typography.mediumBody.fontSize,
		letterSpacing: 0.1,
		borderColor: theme.colors.gray.background,
	},
	searchIcon: {
		position: 'absolute',
		right: theme.spacing.large,
		padding: theme.spacing.small,
	},
});

export default SearchBar;
