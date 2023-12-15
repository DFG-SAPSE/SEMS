import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { theme } from '../../styles/theme';
import { useSpecialities } from '../../context/FilterConsultantsContext';

import SearchBar from '../../components/searching-consultant/SearchBar';
import FilterTabs from '../../components/searching-consultant/FilterTabs';
import ConsultantCard from '../../components/searching-consultant/ConsultantCard';
import ErrorView from '../../components/searching-consultant/ErrorView';
import LoadingView from '../../components/searching-consultant/LoadingView';
import useConsultants from '../../services/hooks/useConsultants';

const filterCategories = ['Speciality', 'Experience', 'Region', 'Price Range'];

export default function SearchConsultant() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [activeTab, setActiveTab] = React.useState('');
	const { selectedSpecialities, experience, selectedRegions, price } =
		useSpecialities();
	const { filteredConsultants, isLoading, fetchError } = useConsultants(
		searchQuery,
		selectedSpecialities,
		experience,
		selectedRegions,
		price,
	);

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

const styles = StyleSheet.create({
	containerFull: {
		flex: 1,
		paddingHorizontal: theme.spacing.large,
		backgroundColor: theme.colors.background,
	},
});
