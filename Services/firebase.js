// Import the functions you need from the SDKs you need

// import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
const firebase = require('firebase');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB36Zv6KE2ch_gQekLmYOUOQD6b0ohImUA',
	authDomain: 'e-shop-1626e.firebaseapp.com',
	databaseURL: 'https://e-shop-1626e-default-rtdb.firebaseio.com',
	projectId: 'e-shop-1626e',
	storageBucket: 'e-shop-1626e.appspot.com',
	messagingSenderId: '37641869664',
	appId: '1:37641869664:web:1c54209eeea2d30cf56605',
	measurementId: 'G-PD12EMP5ZD',
};

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();
const authenticate = firebase.auth;
export { firestore, authenticate };
