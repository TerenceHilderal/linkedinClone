import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBaJ1dbHl4InyW11UmC4C7c0_Z5YxsmDdw',
	authDomain: 'linkedin-clone-a024d.firebaseapp.com',
	projectId: 'linkedin-clone-a024d',
	storageBucket: 'linkedin-clone-a024d.appspot.com',
	messagingSenderId: '218649477261',
	appId: '1:218649477261:web:dea6592e49aab95c1422c4',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
