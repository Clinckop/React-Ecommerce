import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCX-k0Nu2hg0tmUIsshnFc-axRy4dkm0rw",
    authDomain: "crwn-db-c85aa.firebaseapp.com",
    projectId: "crwn-db-c85aa",
    storageBucket: "crwn-db-c85aa.appspot.com",
    messagingSenderId: "376989314231",
    appId: "1:376989314231:web:81ff141c5a4f0682ce3132",
    measurementId: "G-23GC6MGWRT"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;