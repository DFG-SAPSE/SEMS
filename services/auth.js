import { firestore, auth } from './config.js';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
import User from '../schema/user.js';

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
			const usersRef = doc(firestore, 'users', uid);
			await getDoc(usersRef)
				.then((userSnap) => {
					const user = userSnap.data();
					user.id = uid;
					user.availability = JSON.parse(user.availability);
					setAuthChange(user);
				})
				.catch((error) => {
					Alert.alert('Error fetching user data:', error);
				});
			// ...
		}
	});
};
