import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ searchQuery, onSearch }) => {
	return (
		<View style={styles.container}>
			<View style={styles.searchInputContainer}>
				<TextInput
					style={styles.searchInput}
					onChangeText={onSearch}
					value={searchQuery}
					placeholder="Search consultant"
					placeholderTextColor={theme.colors.text.dark}
				/>
				<Ionicons
					style={styles.searchIcon}
					name="ios-search"
					size={24}
					color={theme.colors.text.dark}
				/>
			</View>
		</View>
	);
};
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	container: {
		marginTop: theme.spacing.medium,
	},
	searchInputContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: theme.spacing.xlarge,
		padding: theme.spacing.tiny,
		width: '100%',
		height: 60,
		position: 'relative',
		gap: theme.spacing.tiny,
	},
	searchInput: {
		flex: 1,
		paddingLeft: theme.spacing.medium,
		alignItems: 'center',
		fontSize: theme.typography.mediumBody.fontSize,
		letterSpacing: 0.1,
	},
	searchIcon: {
		position: 'absolute',
		right: theme.spacing.large,
		padding: theme.spacing.small,
	},
});

export default SearchBar;
