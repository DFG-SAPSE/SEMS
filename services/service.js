// import firebase and set up using the config.js file
const firebase = require('firebase/app');
require('firebase/firestore');
const config = require('./firebase/config.js');

firebase.initializeApp(config);

// create some variable db to access the firestore database
const db = firebase.firestore();

// function to search consultants by name
// takes in a name and returns a list of consultants
async function searchConsultants(name) {
	try {
		let query = db.collection('people');

		if (name) {
			query = query.where('name', 'array-contains', name);
		}

		// run the query
		const snapshot = await query.get();

		// process the results
		const results = [];
		snapshot.forEach((doc) => {
			results.push(doc.data());
		});

		return results;
	} catch (error) {
		console.error('Error searching for consultant:', error);
		throw error;
	}
}

async function filterConsultants(
	specialities,
	minYearsOfExperience,
	region,
	maxPrice,
) {
	try {
		let results = [];

		for (let speciality of specialities) {
			let query = db
				.collection('people')
				.where('speciality', '==', speciality);

			// run the query
			const snapshot = await query.get();

			// process the results
			snapshot.forEach((doc) => {
				// we add consultants if they are not already in the results
				if (!results.find((result) => result.id === doc.id)) {
					results.push(doc.data());
				}
			});
		}

		return results;
	} catch (error) {
		console.error('Error filtering for consultants:', error);
		throw error;
	}
}
