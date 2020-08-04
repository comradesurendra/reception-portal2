import React from 'react';
import Header from './Header';



import "./Doctor.css";
import {useState }from 'react';
import 'date-fns';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'date-fns';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from './config/fire';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {useEffect} from 'react';
import TablePagination from '@material-ui/core/TablePagination';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
function Listdoctor(){
    
  const [open, setOpen] = React.useState(false);
  


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [appoint,setAppoint]=useState(false);
  const handleappointment = ()=>{
    setAppoint(true);

  }
  const handleCloseappoint=()=>{
    setAppoint(false)
  }
  



  const [{ date,age,fname,lname,phone,address,email}, setForm] = useState({
    
   date:"",
    
    age:"",
    fname:"",
    lname:"",
    phone:"",
    address:"",
    email:"",
    
   
     
 
 })
 const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

 const [depart,setdepart]=useState("all department");
 const [selecteddate,setdate]=useState();

 const handledepart =(event) =>{
   setdepart(event.target.value)
   console.log(event.target.value)
 }
 
function createData(name,age, sex, contact, slot,Action) {
  return { name,age, sex, contact, slot,Action };
}

const rows = [
  createData('Priya Kashyap', 39, 'Female',  9786575778, "01:00 PM",<div><Button variant="contained"  color="primary">Cancel</Button><Button variant="contained"  color="primary">Reschedule</Button></div> ),
  
]

 const handledate=(event)=>{
   setdate(event.target.value)
   console.log(event.target.value)
 }
 const handleinput = (e) => {
  e.persist()
  
  setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
  }))
  console.log(e.target.value)
}
const onsubmits=(event)=>{
  event.preventDefault();
 
  let  jsonObj={};
  jsonObj["date"]=date
  jsonObj["mode"]=value
  jsonObj["age"]=age
  jsonObj["fname"]=fname
  jsonObj["lname"]=lname
  jsonObj["phone"]=phone
  jsonObj["address"]=address
  jsonObj["email"]=email
  
  console.log(jsonObj)
  // const addpatient=firebase.database().ref("patient");
  // addpatient.push(jsonObj);


  
}
// useEffect(()=>{
//   var database=firebase.database();
//   var ref=database.ref("patient");
//   ref.on("value",function(snapshot){
//     snapshot.forEach(function(childSnapshot){
//       var data=childSnapshot.val();
//       console.log(data);
//     });
//   })
  
// })

const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



    
    return(
        <>
        <Header/>
         
        < Card className="blueback">
            <CardContent>
              
                  <div onChange={handledepart}>
              <select id="department" name="department">
                <option  value="all department" >All Department</option>
                <option  value="dental" >Dental</option>
                <option  value="cardology" >Cardlogy</option>
             
              </select>
                   </div>
                   <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        </MuiPickersUtilsProvider>
        
        </CardContent>

        </ Card>
        <TablePagination
      component="div"
      count={100}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />


        
        <Card >
        
      <CardContent>
        <img src="profile.png"/>
        
        
        <Typography>DR. RAKESH GUPTA</Typography><br/>
        <Typography>MBBS,MD-Dermatology,Hair Transplant,</Typography>
<br/>
<Typography>12 Years Experience(8 Years as Specialist)</Typography>

<Accordion>
<AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        
          <Typography >View Booking</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">AGE</TableCell>
            <TableCell align="right">SEX</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Slot</TableCell>
            <TableCell align="right" >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.sex}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.slot}</TableCell>
              <TableCell align ="right">{row.Action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
      
      
      </CardContent>
      
      <CardActions>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        +Book Appointment
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={onsubmits} >
        <DialogTitle id="form-dialog-title">Patient Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide patient details to proceed for the appointment with DR.PRITTY PAWAREKAR

          </DialogContentText>
          
          <b>Select your Appointment Date</b><span className="require">*</span>
         
          
          <TextField  type="date" name="date" value={date} id="outlined-basic"  label="Select Date" variant="outlined"  onChange={handleinput}/>
          <RadioGroup  aria-label="mode" name="mode" value={value} onChange={handleChange}>
        <FormControlLabel value="Online" control={<Radio />} label="Online" />
        <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
    </RadioGroup>
    
     <p>Age</p>
    <TextField id="outlined-basic" name="age" value={age} label="Type patient Age" variant="outlined"  onChange={handleinput}/>
    
    <p>Available slot</p>
    
    <p>Patient First Name</p>
    <TextField id="outlined-basic" name="fname" value={fname}label="Type patient first name" variant="outlined"  onChange={handleinput}/>
    <p>Patient Last Name</p>
    <TextField id="outlined-basic" value={lname} name="lname"label="Type patient last name" variant="outlined"  onChange={handleinput}/>
    <p>Phone</p>
    <TextField id="outlined-basic"  value={phone}name="phone" label="Type patient contact" variant="outlined"  onChange={handleinput}/>
    <Button  variant="outlined"   color="primary">
            Verify OTP
                 </Button>
    <p>Address</p>
    <TextField id="outlined-basic"  value={address}name="address"label="Type patient Address" variant="outlined"  onChange={handleinput}/>
    <p>Email</p>
    <TextField id="outlined-basic" value={email} name="email" label="Type patient email address" variant="outlined"  onChange={handleinput}/>

    </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  variant="contained" type="submit"  onClick={handleappointment} color="primary">
            +Book Appointment
          </Button>
        </DialogActions>
        </form>
      </Dialog>
      </CardActions>
    </Card>

    <Dialog open={appoint}>
      <DialogContent>
        Patient Added
      </DialogContent>
      <DialogActions>
      <Button onClick={handleCloseappoint} color="primary">
            OK
          </Button>

      </DialogActions>
    </Dialog>
    
  

        </>
    )

}
export default Listdoctor;