import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyBWvPt4T92QCCvb-JzB9Sjd5H0eGp10hHU",
  authDomain: "book-santa-app-123.firebaseapp.com",
  databaseURL: "https://book-santa-app-123.firebaseio.com",
  projectId: "book-santa-app-123",
  storageBucket: "book-santa-app-123.appspot.com",
  messagingSenderId: "571441362706",
  appId: "1:571441362706:web:b0bfd2d237b94bdfa2e5cb"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
