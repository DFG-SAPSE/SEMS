import { firestore, auth } from './config.js';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

//Login and Registration Functions
export const login = (email, password, navigation) => {
	signInWithEmailAndPassword(auth, email, password)
		.then(async (response) => {
			const uid = response.user.uid;
			const usersRef = doc(firestore, 'users', uid);
			const userSnap = await getDoc(usersRef);
			if (userSnap.exists()) {
				const user = userSnap.data();
				navigation.navigate('HomeScreen', { user });
			} else {
				// docSnap.data() will be undefined in this case
				alert('User does not exist anymore.');
			}
		})
		.catch((error) => {
			alert(error);
		});
	//return user;
};

export const register = (fullName, email, password, navigation) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then(async (response) => {
			const uid = response.user.uid;
			const user = {
				id: uid,
				email,
				fullName,
			};
			const usersRef = doc(firestore, 'users', uid);
			await setDoc(usersRef, user)
				.then(() => {
					alert('Registration successful');
					//change this later on because it should ask for email confirmation
					navigation.navigate('HomeScreen', { user });
				})
				.catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getCurrentUser = (navigation) => {
	onAuthStateChanged(auth, async (currentUser) => {
		if (currentUser) {
			// User is signed in
			const uid = currentUser.uid;
			const usersRef = doc(firestore, 'users', uid); //get profile info from database
			await getDoc(usersRef)
				.then((userSnap) => {
					const user = userSnap.data();
					navigation.setParams({ user });
				})
				.catch((error) => {
					alert(error);
				});
			// ...
		} else {
			// User is signed out
			// ...
		}
	});
};
