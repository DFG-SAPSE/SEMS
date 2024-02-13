// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from '@firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
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
export const firestore = initializeFirestore(app, {
	experimentalAutoDetectLongPolling: true,
});
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
