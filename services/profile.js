import { firestore, auth } from './firebase/config.js';
import {
	doc,
	getDoc,
	setDoc,
	collection,
	getDocs,
	updateDoc,
} from 'firebase/firestore';
import {
	enterpriseConverter,
	consultantConverter,
	entrepreneurConverter,
} from './model';
import { Alert } from 'react-native';

export const addConsultant = async (
	consultantID,
	dataObject,
	pushNextScreen,
) => {
	const consultantRef = doc(
		firestore,
		'Consultants',
		consultantID,
	).withConverter(consultantConverter);
	await setDoc(consultantRef, dataObject)
		.then(() => {
			console.log('added Consultant to database!');
			markUserProfileComplete(consultantID, pushNextScreen);
		})
		.catch((error) => {
			console.log(error);
		});
};

export const markUserProfileComplete = async (userID, pushNextScreen) => {
	const userRef = doc(firestore, 'users', userID);
	await updateDoc(userRef, { isProfileComplete: true })
		.then(() => {
			console.log('Marked profile as complete!');
			pushNextScreen();
		})
		.catch((error) => {
			console.log(error);
		});
};

export const addEntrepreneur = async (
	entrepreneurID,
	dataObject,
	pushNextScreen,
) => {
	const entrepreneurRef = doc(
		firestore,
		'Entrepreneurs',
		entrepreneurID,
	).withConverter(entrepreneurConverter);
	await setDoc(entrepreneurRef, dataObject)
		.then(() => {
			console.log('added Entrepreneur to database!');
			markUserProfileComplete(entrepreneurID, pushNextScreen);
		})
		.catch((error) => {
			console.log(error);
		});
};

export const generateNewEnterpriseID = () => {
	// Add a new document with a generated id
	const newEnterpriseRef = doc(collection(firestore, 'Enterprise'));
	return newEnterpriseRef.id;
};

export const addEnterprise = async (newEnterpriseID, dataObject) => {
	const enterpriseRef = doc(
		firestore,
		'Enterprise',
		newEnterpriseID,
	).withConverter(enterpriseConverter);
	await setDoc(enterpriseRef, dataObject)
		.then(() => {
			console.log('added Enterprise to database!');
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getAllEnterprises = async () => {
	const querySnapshot = await getDocs(collection(firestore, 'Enterprise'));
	const tempDoc = [];
	querySnapshot.forEach((doc) => {
		tempDoc.push({ id: doc.id, ...doc.data() });
	});
	return tempDoc;
};
