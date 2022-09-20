import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAU0m9CgeSocplk4V0xV1JTmn6TdaHBEAY",
    authDomain: "crwn-db-53569.firebaseapp.com",
    projectId: "crwn-db-53569",
    storageBucket: "crwn-db-53569.appspot.com",
    messagingSenderId: "927104326106",
    appId: "1:927104326106:web:58d926a9d7a778eca508e3",
    measurementId: "G-C0PENX8X05"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;