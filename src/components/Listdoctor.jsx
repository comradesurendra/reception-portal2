import React from 'react';
import Header from './Header';
import "../styles/Doctor.css";
import {useState }from 'react';
import 'date-fns';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid ,Card , CardActions , CardContent , Button , Typography , TextField , Dialog , DialogActions ,DialogContent , DialogContentText , DialogTitle , Radio , RadioGroup , FormControlLabel } from '@material-ui/core';
import { TablePagination , Accordion , AccordionSummary , AccordionDetails } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {useEffect} from 'react';

import Doctoritem from './Doctoritem';






function Listdoctor(props){

    
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
  const [reschedule,setreschedule]=useState(false)
  const handlereschedule=()=>{
    setreschedule(true)

  }

  const [{redate,reslots}, setreForm]=useState({
    redate:"",
    reslots:""
  })
  



  const [{ date,age,fname,lname,phone,address,email,slots}, setForm] = useState({
    
   date:"",
    
    age:"",
    fname:"",
    lname:"",
    phone:"",
    address:"",
    email:"",
    slots:""
    
   
     
 
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



 const handledate=(event)=>{
   setdate(event.target.value)
   console.log(event.target.value)
 }
 const handlerescheduleinput = (e)=>{
   e.persist()
   setreForm((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
    
}))
console.log(e.target.value)
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
  jsonObj["slots"]=slots

  
}
const onreschedulesubmits=(event)=>{
  event.preventDefault();
 
  let  jsonObj={};
  jsonObj["redate"]=redate
  jsonObj["reslots"]=reslots
  console.log(jsonObj)
}

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


  const sampleprop = {
    doctorname : 'LIKHITH S R',
    designation : 'MBBS'

  }

    
    return(
        <>
        <Header/>
         
        <Card className="blueback">
            <CardContent>
              
                  <div onChange={handledepart}>
              <select id="department" name="department">
                <option  value="all department" >All Department</option>
                <option  value="dental" >Dental</option>
                <option  value="cardology" >Cardlogy</option>
             
              </select>
                  

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
        </div>
        
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
    <Doctoritem data = {sampleprop} />
    <Doctoritem data = {sampleprop} />
    <Doctoritem data = {sampleprop} />

        </>
    )

}
export default Listdoctor;