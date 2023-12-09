/* eslint-disable prettier/prettier */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA-1dM8YRzPFo3jeIoJtj6g4VFhzPvDyQg",
    authDomain: "dfg-sapse.firebaseapp.com",
    projectId: "dfg-sapse",
    storageBucket: "dfg-sapse.appspot.com",
    messagingSenderId: "140818285182",
    appId: "1:140818285182:web:bfbc2a7133a968977d4e2f",
    measurementId: "G-Z0XMDWF8HB"
};

if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}

export { firebase };