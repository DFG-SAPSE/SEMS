import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../../components/searching-consultant/SearchBar';
import FilterTabs from '../../components/searching-consultant/FilterTabs';
import ConsultantCard from '../../components/searching-consultant/ConsultantCard';
import FilterModal from '../../components/searching-consultant/FilterModal';

export default function SearchConsultant() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [activeTab, setActiveTab] = React.useState('');
	const [modalVisible, setModalVisible] = React.useState(false);

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	const openModal = () => {
		setModalVisible(!false);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<ScrollView style={styles.containerFull}>
			<SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
			<FilterTabs
				openModal={openModal}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<ConsultantCard />
			<FilterModal
				modalVisible={modalVisible}
				closeModal={closeModal}
				filterContent={activeTab}
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
