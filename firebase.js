import React from "react"
import  firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"



  var firebaseConfig = {
    apiKey: "AIzaSyDBiw9dFbIqWTyro9faMODnxXeHvZZXvl0",
    authDomain: "dataapp-6b883.firebaseapp.com",
    projectId: "dataapp-6b883",
    storageBucket: "dataapp-6b883.appspot.com",
    messagingSenderId: "1006073506431",
    appId: "1:1006073506431:web:4079604a6e4e2202e86d4a",
    measurementId: "G-JD6LMPXJYS"
  };
 
  firebase.initializeApp(firebaseConfig);
  export default firebase;