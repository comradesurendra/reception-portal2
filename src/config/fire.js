import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAGC2aRv9D1OTvC335zC7pY0YsqGM3At7s",
    authDomain: "reception-portal.firebaseapp.com",
    databaseURL: "https://reception-portal.firebaseio.com",
    projectId: "reception-portal",
    storageBucket: "reception-portal.appspot.com",
    messagingSenderId: "208177611572",
    appId: "1:208177611572:web:4821ee2550405de3af5b61",
    measurementId: "G-BDDN3BHCR2"
  };
  class Firebase{
    constructor(){
  
   app.initializeApp(firebaseConfig);
  firebase.analytics();
  this.auth=app.auth()
  this.db=app.firestore()
    }
    login(email,password){
      return this.auth.signInWithEmailAndPassword(email,password)
    }

    isInitialized(){
      return new Promise(resolve =>{
        this.auth.onAuthStateChanged(resolve)
      })
    }
  }



  export default new Firebase()