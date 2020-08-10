import * as firebase from "firebase"; 


var firebaseConfig = {
    apiKey: "AIzaSyCRewEu4YZkZrBmG21Qxmi2jr2w8JjwyzA",
    authDomain: "test-a13ed.firebaseapp.com",
    databaseURL: "https://test-a13ed.firebaseio.com",
    projectId: "test-a13ed",
    storageBucket: "test-a13ed.appspot.com",
    messagingSenderId: "471055843776",
    appId: "1:471055843776:web:d993f493410808cb2b0825",
    measurementId: "G-8TVBQRT4ZP"
  };
  
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();