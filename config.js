import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD2PL7s25KFHbHmb8rUlzEX_BKhk8vgZIY",
    authDomain: "pro-c71-c8b9d.firebaseapp.com",
    projectId: "pro-c71-c8b9d",
    storageBucket: "pro-c71-c8b9d.appspot.com",
    messagingSenderId: "983787516707",
    appId: "1:983787516707:web:af22b61698a43025d29296"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
