import React from 'react';
import logo from './logo.svg';
import './App.css';
import fire from'./config/fire';
import Receptionlogin from './Receptionlogin';
import Listofdoctor from './Listdoctor';


const App=()=>{
  const addDoc = obj =>{
    fire.child('doctor').push(
      obj,
      err=>{
        console.log(err)
      }
    )

  }
  
}
export default App;
