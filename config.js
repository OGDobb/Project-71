import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyC9sd8mEoONYOxUhHUqUSVzCci5VodBL2g",
    authDomain: "project-71-b7fe8.firebaseapp.com",
    projectId: "project-71-b7fe8",
    storageBucket: "project-71-b7fe8.appspot.com",
    messagingSenderId: "424851844365",
    appId: "1:424851844365:web:34c410f64fd2fa0b111444",
    measurementId: "G-K8R3HDMWQP"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


