// import firebase and set up using the config.js file
import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './firebase/config.js';

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

// create some variable db to access the Firestore database
const db = firebase.firestore();

/**
 * Server-side function. Searches for consultants in a Google Firestore database by name
 *
 * @async
 * @function searchConsultants
 * @param {string} inputName The name of the consultant to search for
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of consultant objects
 * @throws {Error} Will throw an error if the search operation fails
 */
async function searchConsultantsServerSide(inputName) {
	try {
		let results = [];

		if (inputName) {
			// we create a query for consultants with the given name
			const snapshot = await db
				.collection('Consultants')
				.where('name', '==', inputName)
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
 * Performs a server-side Firestore query to filter consultants based on provided criteria
 * The filtering operation is:
 * (expertise == inputExpertise)
 * AND (experienceYears >= inputMinYearsOfExperience)
 * AND (inputRegion1 OR inputRegion2 OR ...)
 * AND (inputMinPrice == 0)
 * AND (maxPrice <= inputMaxPrice)
 *
 * @async
 * @param {string[]} inputExpertise An array of expertise to filter by. The first expertise in the array is used for filtering
 * @param {number} inputMinYearsOfExperience The minimum years of experience to filter by
 * @param {string[]} inputRegions An array of regions to filter by. If the array has more than 10 elements, we split into chunks of 10 and multiple queries are performed
 * @param {number} inputMinPrice Used as a proxy to filter pro-bono consultants. The minimum price to filter by.
 * @param {number} inputMaxPrice The maximum price to filter by
 * @returns {Promise<Object[]>} A promise that resolves to an array of consultant objects that match the parameters
 * @throws {Error} Will throw an error if the query operation fails
 */ async function filterConsultantsServerSide(
	inputExpertise,
	inputMinYearsOfExperience,
	inputRegions,
	inputMinPrice,
	inputMaxPrice,
) {
	try {
		let query = db.collection('Consultants');

		// we create the query
		if (inputExpertise.length > 0) {
			// we only use the first expertise in the array for filtering
			// this is because Firestore does not support array-contains-any for multiple fields
			// this is a limitation of Firestore queries server side filtering
			query = query.where('expertise', '==', inputExpertise[0]);
		}

		if (inputMinYearsOfExperience) {
			query = query.where(
				'experienceYears',
				'>=',
				inputMinYearsOfExperience,
			);
		}

		if (inputMinPrice) {
			query = query.where('minPrice', '==', 0);
		}

		if (inputMaxPrice) {
			query = query.where('maxPrice', '<=', inputMaxPrice);
		}

		let results = [];
		// if regions array argument has more than 10 elements, we need to split it into chunks of 10 and perform multiple queries
		if (inputRegions.length > 10) {
			const chunkSize = 10;
			for (let i = 0; i < inputRegions.length; i += chunkSize) {
				const chunk = inputRegions.slice(i, i + chunkSize);

				const snapshot = await query
					.where('geographic_regions', 'array-contains-any', chunk)
					.get();
				snapshot.forEach((doc) => {
					let data = doc.data();
					// avoid duplicates
					if (!results.find((result) => result.id === doc.id)) {
						results.push({ id: doc.id, ...data });
					}
				});
			}
		} else {
			const snapshot = await query
				.where('geographic_regions', 'array-contains-any', inputRegions)
				.get();
			snapshot.forEach((doc) => {
				let data = doc.data();
				// avoid duplicates in results
				if (!results.find((result) => result.id === doc.id)) {
					results.push({ id: doc.id, ...data });
				}
			});
		}

		return results;
	} catch (error) {
		console.error('Error filtering for consultants:', error);
		throw error;
	}
}

export { searchConsultantsServerSide, filterConsultantsServerSide };
