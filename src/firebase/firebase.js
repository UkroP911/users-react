import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyDenD6_PTra4v_KSKyW0zjbzIs3LwrAXbc",
    authDomain: "react-firebase-c4b3c.firebaseapp.com",
    databaseURL: "https://react-firebase-c4b3c.firebaseio.com",
    projectId: "react-firebase-c4b3c",
    storageBucket: "react-firebase-c4b3c.appspot.com",
    messagingSenderId: "549781663530"
};

const devConfig = {
    apiKey: "AIzaSyDenD6_PTra4v_KSKyW0zjbzIs3LwrAXbc",
    authDomain: "react-firebase-c4b3c.firebaseapp.com",
    databaseURL: "https://react-firebase-c4b3c.firebaseio.com",
    projectId: "react-firebase-c4b3c",
    storageBucket: "react-firebase-c4b3c.appspot.com",
    messagingSenderId: "549781663530"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};
