import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../../components/searching-consultant/SearchBar';
import FilterTabs from '../../components/searching-consultant/FilterTabs';
import ConsultantCard from '../../components/searching-consultant/ConsultantCard';
import useConsultants from '../../services/hooks/useConsultants';
import ErrorView from '../../components/searching-consultant/ErrorView';
import LoadingView from '../../components/searching-consultant/LoadingView';
const filterCategories = [
	'Speciality',
	'Industry',
	'Experience',
	'Consultations',
];

export default function SearchConsultant() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [activeTab, setActiveTab] = React.useState('');
	const { filteredConsultants, isLoading, fetchError } =
		useConsultants(searchQuery);

	const onSearch = (query) => {
		setSearchQuery(query);
	};

	return (
		<ScrollView style={styles.containerFull}>
			<SearchBar searchQuery={searchQuery} onSearch={onSearch} />
			<FilterTabs
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				filterCategories={filterCategories}
			/>
			<ErrorView fetchError={fetchError} />
			<LoadingView isLoading={isLoading} />
			<ConsultantCard
				consultantData={filteredConsultants}
				isLoading={isLoading}
			/>
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
