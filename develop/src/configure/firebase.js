import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA3qiZ5MzSql7n5rFEF9TMMpfkF-KwZguM',
  authDomain: 'family-crest-sns.firebaseapp.com',
  databaseURL: 'https://family-crest-sns-default-rtdb.firebaseio.com',
  projectId: 'family-crest-sns',
  storageBucket: 'family-crest-sns.appspot.com',
  messagingSenderId: '387060685157',
  appId: '1:387060685157:web:80bb4bdd8f868b0d58a98c',
  measurementId: 'G-PWJJ7SKCN8',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();
