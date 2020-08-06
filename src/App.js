import React from 'react';
import logo from './assets/images/logo.svg';
import './styles/App.css';
import fire from'./config/fire';
import Receptionlogin from './components/Receptionlogin';
import Listofdoctor from './components/Listdoctor';


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
