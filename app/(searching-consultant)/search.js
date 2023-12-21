import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { theme } from '../../styles/theme';
import { useSpecialities } from '../../context/FilterConsultantsContext';
import SearchBar from '../../components/common/SearchBar';
import FilterTabs from '../../components/searching-consultant/tabs/FilterTabs';
import ConsultantList from '../../components/searching-consultant/consultant-card/ConsultantList';
import useConsultants from '../../hooks/useConsultants';
import placeHolder from '../../locales/en/SearchBar.json';

const { consultingSearching } = placeHolder;

export default function SearchConsultant() {
	const [searchQuery, setSearchQuery] = React.useState(''); // holds the state for the search Query

	const { selectedSpecialities, experience, selectedRegions, price } =
		useSpecialities(); // Context that holds all current filtering states

	const { filteredConsultants, isLoading, fetchError } = useConsultants(
		searchQuery,
		selectedSpecialities,
		experience,
		selectedRegions,
		price,
	); //Loads in the data and filters the data through a customHook

	const onSearch = (query) => {
		setSearchQuery(query);
	}; //search Query that allows us to search for consultants

	return (
		<ScrollView style={styles.containerFull}>
			<View style={styles.container}>
				<SearchBar
					searchQuery={searchQuery}
					onSearch={onSearch}
					placeHolder={consultingSearching}
				/>
			</View>
			<FilterTabs />
			<ConsultantList
				consultantData={filteredConsultants}
				isLoading={isLoading}
				errorMessage={fetchError}
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
	container: {
		marginTop: theme.spacing.medium,
	},
});
