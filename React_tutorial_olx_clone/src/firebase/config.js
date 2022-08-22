import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVlE-EveW-dEZSZsFF0mGokQ3U-1jog_k",
    authDomain: "olxclone-5cc7d.firebaseapp.com",
    projectId: "olxclone-5cc7d",
    storageBucket: "olxclone-5cc7d.appspot.com",
    messagingSenderId: "1077887630783",
    appId: "1:1077887630783:web:b1f2e2593a357888c2b50a",
    measurementId: "G-XYNQ19VY09"
  };

  export default  firebase.initializeApp(firebaseConfig)