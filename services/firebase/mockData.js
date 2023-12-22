import { faker } from '@faker-js/faker';
import { doc, collection, writeBatch } from 'firebase/firestore';
import { firestore } from './config';

const randomTime = () => {
	var startHrs = Math.round(Math.random() * (12 - 6) + 6);
	var endHrs = Math.round(Math.random() * (24 - startHrs) + startHrs);
	var mins = [':30', ':00'][Math.round(Math.random())];
	var shFormat = startHrs < 10 ? '0' : '';
	var ehFormat = endHrs < 10 ? '0' : '';
	var start = String(shFormat + startHrs + mins);
	var end = String(ehFormat + endHrs + mins);
	var timestamp = [start, end];
	return timestamp;
};
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const generateAvailabilty = () => {
	var avail = [];
	for (let day of daysOfWeek) {
		var timestamp = randomTime();
		var json = {
			daysofWeek: day,
			startTime: timestamp[0],
			endTime: timestamp[1],
		};
		avail.push(json);
	}
	return avail;
};

const generateMentorData = () => {
	var mockData = {
		name: faker.person.fullName(),
		email: faker.internet.email(),
		displayName: faker.internet.displayName(),
		photoURL: faker.image.url(),
		role: faker.person.jobType(),
		enterpriseID: faker.string.uuid(),
		description: faker.lorem.paragraph(),
		mentorCriteria: {
			availability: generateAvailabilty(),
			industry: faker.person.jobArea(),
			experienceYears: Math.round(Math.random() * (30 - 3) + 3),
			price: faker.number.float({ min: 10, max: 500, precision: 0.01 }),
		},
	};
	return mockData;
};

const generateEntrepreneurData = () => {
	var mockData = {
		name: faker.person.fullName(),
		email: faker.internet.email(),
		displayName: faker.internet.displayName(),
		photoURL: faker.image.url(),
		role: faker.person.jobType(),
		enterpriseID: faker.string.uuid(),
		description: faker.lorem.paragraph(),
	};
	return mockData;
};

// seed function
export const generateUserData = async () => {
	// Get a new write batch
	const batch = writeBatch(firestore);

	// Add a new document with a generated id
	for (var i = 0; i < 100; i++) {
		var docData = generateMentorData();
		var newMentorRef = doc(collection(firestore, 'mentors'));
		batch.set(newMentorRef, docData);
	}

	// Add a new document with a generated id
	for (var j = 0; j < 100; j++) {
		var docData = generateEntrepreneurData();
		var newEntrepreneurRef = doc(collection(firestore, 'entrepreneurs'));
		batch.set(newEntrepreneurRef, docData);
	}
	// Commit the batch
	await batch.commit();
	console.log('Success');
};
generateUserData();
