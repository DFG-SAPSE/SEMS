// import firebase and set up using the config.js file
const firebase = require('firebase/app');
require('firebase/firestore');
const config = require('./firebase/config.js');

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

// create some variable db to access the Firestore database
const db = firebase.firestore();

/**
 * Searches for consultants in a Google Firestore database by name
 *
 * @async
 * @function searchConsultants
 * @param {string} name The name of the consultant to search for
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of consultant objects
 * @throws {Error} Will throw an error if the search operation fails
 */
async function searchConsultants(name) {
	try {
		let results = [];

		if (name) {
			// we create a query for consultants with the given name
			const snapshot = await db
				.collection('Consultants')
				.where('name', '==', name)
				.get();
			snapshot.forEach((doc) => results.push(doc.data()));
		}

		return results;
	} catch (error) {
		console.error('Error searching for consultant:', error);
		throw error;
	}
}

/**
 * Filters consultants from a Google Firestore database based on given parameters
 * The parameters will be used in the following logical operation:
 * (speciality1 OR speciality2 OR ...)
 * AND yearsOfExperience >= minYearsOfExperience
 * AND (region1 OR region2 OR ...)
 *
 * @async
 * @function filterConsultants
 * @param {Array<string>} specialities The specialities to filter by
 * @param {number} minYearsOfExperience The minimum years of experience to filter by
 * @param {Array<string>} regions The regions to filter by
 * @param {number} [maxPrice] The maximum price to filter by (optional)
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of consultant objects that match the parameters
 * @throws {Error} Will throw an error if the query operation fails
 */
async function filterConsultants(
	specialities,
	minYearsOfExperience,
	regions,
	maxPrice,
) {
	try {
		let query = db.collection('Consultants');

		// we create the query
		const snapshot = await query.get();

		let results = [];
		// process the results
		snapshot.forEach((doc) => {
			let data = doc.data();

			// check if the consultant matches all the criteria
			if (
				specialities.some((speciality) =>
					data.speciality.includes(speciality),
				) &&
				data.yearsOfExperience >= minYearsOfExperience &&
				regions.some((region) => data.regions.includes(region))
			) {
				// we add consultants to our return array only if they are not already in the results
				// this prevents duplicate consultants from being added to the array
				if (!results.find((result) => result.id === doc.id)) {
					results.push({ id: doc.id, ...data });
				}
			}
		});

		return results;
	} catch (error) {
		console.error('Error filtering for consultants:', error);
		throw error;
	}
}

module.exports = { searchConsultants, filterConsultants };
