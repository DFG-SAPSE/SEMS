import { firestore, auth } from './firebase/config.js';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import {
	enterpriseConverter,
	consultantConverter,
	entrepreneurConverter,
} from './model';
import { Alert } from 'react-native';

/*export const login = (email, password, router) => {
	signInWithEmailAndPassword(auth, email, password)
		.then(async (response) => {
			const uid = response.user.uid;
			const usersRef = doc(firestore, 'users', uid);
			const userSnap = await getDoc(usersRef);
			if (userSnap.exists()) {
				//const user = userSnap.data();
				router.replace('/ProfileCreation');
			} else {
				// docSnap.data() will be undefined in this case
				Alert('User does not exist anymore.');
			}
		})
		.catch((error) => {
			// alert(error);
		});
	//return user;
};*/

export const addConsultant = async (consultantID, dataObject) => {
	const consultantRef = doc(
		firestore,
		'ConsultantTest',
		consultantID,
	).withConverter(consultantConverter);
	await setDoc(consultantRef, dataObject)
		.then(() => {
			console.log('added Consultant to database!');
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
	await setDoc(enterpriseRef, data)
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
