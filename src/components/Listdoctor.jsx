import React from 'react';
import Header from './Header';
import "../styles/Doctor.css";
import { useState , useEffect }from 'react';
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
import Doctoritem from './Doctoritem';
import firebase from "./firebase";


function Listdoctor(props){

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  var [datewisedoctors , setdatewisedoctors] = useState([]);
  var [doctordetails , setdoctordetails] = useState({});
  const convertdate = (selectedDate) => {
    var dd = selectedDate.getDate();
    var mm = selectedDate.getMonth()+1;
    var yyyy = selectedDate.getFullYear();
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    var today = dd+'-'+mm+'-'+yyyy;
    return today;
  }


  useEffect(() => {

    var redb = firebase.database();
    var today = convertdate(selectedDate);
    
    redb.ref('schedule/DEMO/' + today).once('value' , (snapshot) => {
      const temp = []
      snapshot.forEach((v) => {
        temp.push(v.val().doctorId);
      });//temp.push(v.val().doctorId));
      setdatewisedoctors(temp); 
    });

},[]);

 const [depart,setdepart]=useState("all department");


 const handledepart =(event) =>{
   setdepart(event.target.value)
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
    <Doctoritem  />
    <Doctoritem  />
    <Doctoritem  />

        </>
    )

}
export default Listdoctor;