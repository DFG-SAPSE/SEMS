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
 * The filtering operation is:
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
async function filterConsultantsClientSide(
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

/**
 * Performs a Firestore query to filter consultants based on provided criteria
 * The filtering operation is: 
 * (speciality1) 
 * AND (yearsOfExperience >= minYearsOfExperience) 
 * AND (region1 OR region2 OR ...)
 * AND (inputMinPrice == 0)
 * AND (maxPrice <= inputMaxPrice)
 *
 * @async
 * @param {string[]} specialities An array of specialities to filter by. The first speciality in the array is used for filtering
 * @param {number} minYearsOfExperience The minimum years of experience to filter by
 * @param {string[]} regions An array of regions to filter by. If the array has more than 10 elements, we split into chunks of 10 and multiple queries are performed
 * @returns {Promise<Object[]>} A promise that resolves to an array of consultant objects that match the parameters
 * @throws {Error} Will throw an error if the query operation fails
 */async function filterConsultantsServerSide(
	specialities,
	minYearsOfExperience,
	regions,
	inputMinPrice,
	inputMaxPrice
) {
	try {
		let query = db.collection('Consultants');

		// we create the query
		if (specialities.length > 0) {
			// we only use the first speciality in the array for filtering
			// this is because Firestore does not support array-contains-any for multiple fields
			// this is a limitation of Firestore queries server side filtering
			query = query.where('specialty', '==', specialities[0]);
		}

		if (minYearsOfExperience) {
			query = query.where('experienceYears', '>=', minYearsOfExperience);
		}

		if (inputMinPrice) {
            query = query.where('minPrice', '==', 0);
        }

		if (inputMaxPrice) {
            query = query.where('maxPrice', '<=', inputMaxPrice);
        }

		let results = [];
		// if regions array argument has more than 10 elements, we need to split it into chunks of 10 and perform multiple queries
		if (regions.length > 10) {
			const chunkSize = 10;
			for (let i = 0; i < regions.length; i += chunkSize) {
				const chunk = regions.slice(i, i + chunkSize);

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
				.where('geographic_regions', 'array-contains-any', regions)
				.get();
			snapshot.forEach((doc) => {
				let data = doc.data();
				// avoid duplicates
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

export {
	searchConsultants,
	filterConsultantsClientSide,
	filterConsultantsServerSide,
};
