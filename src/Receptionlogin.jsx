import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


import Typography from '@material-ui/core/Typography';


function Receptionlogin(){
  const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const onsubmit=(event)=>{
    event.preventDefault();
    setemail(email)
    setpassword(password)
    console.log(email)
    console.log(password)
    let  jsonObj={};
    jsonObj["email"]=email
    jsonObj["password"]=password
    console.log(jsonObj)
}
const InputEvent=(event)=>{
    console.log(event.target.value)
    setemail(event.target.value)
}
const InputEventTwo=(event)=>{
    console.log(event.target.value)
    setpassword(event.target.value)
}


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Wellnexus Technologies Pvt. Ltd.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



return( <>
<img src="login.png" className="loginpic"/>
<div className="back-bg">
  <Typography variant="body2"  align="center">
  <div className="welcome">
  <p className="text">Welcome to<br></br>Receptionist mananagement system! </p>
    
    </div>
</Typography> 
    <div className="bg-img">
       
        <form onSubmit={onsubmit} Validate className="container">
          
            <h1>Login</h1>
            <label for="email"><b>Email</b></label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              
              onChange={InputEvent}
              value={email}
              autoFocus
            />
            <label for="psw"><b>Password</b></label>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={InputEventTwo}
              value={password}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <button
              type="submit"
              fullWidth
              variant="contained"
              
              className="btn"
            >
              Log In
            </button>
            <Typography variant="body2" color="textSecondary" align="center">
            <span className="bottom">Having trouble Signing up?<br></br><Link href="#" variant="body2">
                  Forgot password?
                </Link>or<Link href="#" variant="body2">
                  {"Contact Support"}
                </Link>

</span>
</Typography>
              <Box mt={5}>
              <Copyright />
            </Box>

            </form>


</div>
</div>
</> );
  
}
export default Receptionlogin;

