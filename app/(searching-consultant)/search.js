import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import SearchBar from '../../components/searching-consultant/SearchBar';
import FilterTabs from '../../components/searching-consultant/FilterTabs';
import ConsultantCard from '../../components/searching-consultant/ConsultantCard';
import FilterModal from '../../components/searching-consultant/FilterModal';
import useConsultants from '../../services/hooks/useConsultants';
import Loading from '../../components/common/Loading';
export default function SearchConsultant() {
	const [searchQuery, setSearchQuery] = React.useState('');
	const [activeTab, setActiveTab] = React.useState('');
	const [modalVisible, setModalVisible] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const consultantData = useConsultants(searchQuery);

	const onSearch = (query) => {
		setSearchQuery(query);
		setIsLoading(true);
	};

	const openModal = () => {
		setModalVisible(!false);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<ScrollView style={styles.containerFull}>
			<SearchBar searchQuery={searchQuery} onSearch={onSearch} />
			<FilterTabs
				openModal={openModal}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			{isLoading ? (
				<ConsultantCard consultantData={consultantData} />
			) : (
				<View style={styles.center}>
					<Loading />
				</View>
			)}
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
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
