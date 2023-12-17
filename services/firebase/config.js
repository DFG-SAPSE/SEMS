// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import '@firebase/firestore';
import { getFirestore} from 'firebase/firestore';
import { API_KEY, AUTH_DOMAIN } from '@env';

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: 'dfg-sapse',
	storageBucket: 'dfg-sapse.appspot.com',
	messagingSenderId: '140818285182',
	appId: '1:140818285182:web:bfbc2a7133a968977d4e2f',
	measurementId: 'G-Z0XMDWF8HB',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth();

//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
