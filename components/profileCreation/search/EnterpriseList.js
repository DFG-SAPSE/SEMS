// List.js
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{name}</Text>
	</View>
);

//The filter
const EnterpriseList = ({ searchPhrase, setClicked, data }) => {
	const renderItem = ({ item }) => {
		//When there is no input, show all
		if (searchPhrase === '') {
			return <Item name={item.enterpriseName} />;
		}
		// filter of the name
		if (
			item.enterpriseName
				.toUpperCase()
				.includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
		) {
			return <Item name={item.enterpriseName} />;
		}
	};

	return (
		<SafeAreaView style={styles.list__container}>
			<View
				onStartShouldSetResponder={() => {
					setClicked(false);
				}}
			>
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</SafeAreaView>
	);
};

export default EnterpriseList;

const styles = StyleSheet.create({
	list__container: {
		margin: 10,
		height: '85%',
		width: '100%',
	},
	item: {
		margin: 30,
		borderBottomWidth: 2,
		borderBottomColor: 'lightgrey',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 5,
		fontStyle: 'italic',
	},
});
