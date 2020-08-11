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


 const [depart,setdepart]=useState("all department");
 const [selecteddate,setdate]=useState();

 const handledepart =(event) =>{
   setdepart(event.target.value)
   console.log(event.target.value)
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
  const [{redate,reslots}, setreForm]=useState({
    redate:"",
    reslots:""
  })


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