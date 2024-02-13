import { firestore, auth } from './config.js';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
import COLLECTION_NAMES from './collectionNames.js';

//Login and Registration Functions
export const login = (email, password, pushNextScreen) => {
	signInWithEmailAndPassword(auth, email, password)
		.then(async (response) => {
			const uid = response.user.uid;
			const usersRef = doc(firestore, 'users', uid);
			const userSnap = await getDoc(usersRef);
			if (userSnap.exists()) {
				const user = userSnap.data();
				pushNextScreen(user);
			} else {
				// docSnap.data() will be undefined in this case
				Alert.alert('User does not exist anymore.');
			}
		})
		.catch((error) => {
			Alert.alert('Invalid login.');
			console.log(error);
		});
	//return user;
};

export const register = (
	fullName,
	email,
	password,
	isConsultant,
	pushNextScreen,
) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then(async (response) => {
			const uid = response.user.uid;
			const user = {
				id: uid,
				email,
				fullName,
				isConsultant,
				isProfileComplete: false,
				isEmailVerified: false,
				isApproved: !isConsultant, //Need approval if consultant
			};

			// create new User object based on schema
			/*const user = User();
			user.id = uid;
			user.email = email;
			user.name = fullName;*/

			const usersRef = doc(firestore, 'users', uid);
			await setDoc(usersRef, user)
				.then(() => {
					// alert('Registration successful');
					//change this later on because it should ask for email confirmation
					pushNextScreen();
				})
				.catch((error) => {
					Alert.alert('An error occured');
					console.log(error);
				});
		})
		.catch((error) => {
			Alert.alert('Invalid registration credential');
			console.log(error);
		});
};

export const getAuthChange = (setAuthChange) => {
	onAuthStateChanged(auth, async (currentUser) => {
		if (currentUser) {
			// User is signed in
			const uid = currentUser.uid;

			// Take user data from the `users` collection
			const userSnap = await getDoc(doc(firestore, 'users', uid));
			if (!userSnap.exists()) {
				return;
			}

			const userData = userSnap.data();

			// Check to see if the full user information is available in
			// either the `Consultants` or `Entrepreneurs` collection
			// This means the user has already completed their onboarding flow
			const collectionName = userData.isConsultant
				? COLLECTION_NAMES.CONSULTANTS
				: COLLECTION_NAMES.ENTREPRENEURS;

			const fullUserSnap = await getDoc(
				doc(firestore, collectionName, uid),
			);
			if (!fullUserSnap.exists()) {
				// If user information does not exist in either `Consultants` or `Entrepreneurs`
				// that means user has not finished their onboarding flow
				// and all info we have about them is stored in `users` collection
				setAuthChange(userData);
				return;
			}

			// If user info does exist in either `Consultants` or `Entrepreneurs`
			// i.e they have finished their onboarding flow
			// we return data from here, because there are more data from these collections
			// then the `users` collection
			const fullUserData = fullUserSnap.data();
			if (fullUserData.availability)
				fullUserData.availability = JSON.parse(
					fullUserData.availability,
				);
			setAuthChange(fullUserData);
		}
	});
};
