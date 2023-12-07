import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../../components/searching-consultant/SearchBar';
import FilterTabs from '../../components/searching-consultant/FilterTabs';
import ConsultantCard from '../../components/searching-consultant/ConsultantCard';
export default function Home(props) {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [activeTab, setActiveTab] = React.useState('');

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	return (
		<ScrollView style={styles.containerFull}>
			<SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
			<FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
			<ConsultantCard />
		</ScrollView>
	);
}
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	containerFull: {
		flex: 1,
		paddingHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.background,
	},
});
