import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  Receptionlogin  from './Receptionlogin'
import Loginpic from './Loginpic';
import Header from './Header';
import Adddoctor from './Adddoctor';
import Listdoctor from './Listdoctor';



import {BrowserRouter as Router} from'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import fire from'./config/fire';



ReactDOM.render(
  
  <React.StrictMode>
    
    <Router>
    
    <Switch>
    <Route  exact path='/' component={Receptionlogin}/>
      <Route exact path='/listdoctor' component={Listdoctor}/>
      <Route exact path='/adddoctor' component={Adddoctor}/>
   

    </Switch> 
    </Router>
    
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
