import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC_enn9eY_m7aCcpNtmlQAGDwd_42JSxPk',
  authDomain: 'react-dev-155ab.firebaseapp.com',
  databaseURL: 'https://react-dev-155ab-default-rtdb.firebaseio.com',
  projectId: 'react-dev-155ab',
  storageBucket: 'react-dev-155ab.appspot.com',
  messagingSenderId: '1065029336289',
  appId: '1:1065029336289:web:1fdd5475cf4a987cbbcba0',
});

var db = firebaseApp.firestore();

export { db };
