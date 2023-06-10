
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBU78QGmqJ5NHcsRAvLgTxSA9eKbGXGte8",
  authDomain: "disney-clone-plus-d1c72.firebaseapp.com",
  projectId: "disney-clone-plus-d1c72",
  storageBucket: "disney-clone-plus-d1c72.appspot.com",
  messagingSenderId: "724663003142",
  appId: "1:724663003142:web:fc6a0eb17c7bc09dbcbb87",
  measurementId: "G-0H95H6ZRFK"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;