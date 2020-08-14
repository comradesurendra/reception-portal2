import React from 'react';
import Header from './Header';
import "../styles/Doctor.css";
import { useState , useEffect, useRef }from 'react';
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

const convertdate = (selectedDate) => {
  var dd = selectedDate.getDate();
  var mm = selectedDate.getMonth()+1;
  var yyyy = selectedDate.getFullYear();
  if(dd<10){dd='0'+dd}
  if(mm<10){mm='0'+mm}
  const today = dd+'-'+mm+'-'+yyyy;
  return today;
}

export default (props) => {
  const { current: redb } = useRef(firebase.database());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datewisedoctors , setdatewisedoctors] = useState([]);//DOC_ID ARRAY WHEN USER CHOOSES DATE from schedule list
  const [alldoctors , setalldoctors] = useState(null); //ALL DOCTORS FROM USERLIST
  const [todaydoctors , settodaydoctors] = useState([]);//DOCTOR DETAILS OBTAINED USING datewisedoctors & alldoctors
  const [depart,setdepart]=useState("All departments");
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [{redate,reslots}, setreForm]=useState({
    redate:"",
    reslots:""
  })

 



  useEffect(() => {
    const today = convertdate(selectedDate);
   
    redb.ref('schedule/DEMO/' + today).once('value' , (snapshot) => {
      const temp = []
      snapshot.forEach((v) => {
        temp.push(v.val().doctorId);
      });//temp.push(v.val().doctorId));
      setdatewisedoctors(temp); 
    });
  }, [selectedDate]);

  useEffect(() => {
    const alldoc = {};
    redb.ref('userlist').once('value' ,(snapshot) => {
      snapshot.forEach((entry) => {
        alldoc[entry.val().user_id] = entry.val()
      });
      setalldoctors(alldoc);
    })
  }, [])

  useEffect(() => {
    if (alldoctors) {
      //GET DOCTOR DETAILS USING THE OBTAINED doc_id array from userlistcollection
      const newTodayDoctors = []
      datewisedoctors.forEach((doc) => {
        newTodayDoctors.push(alldoctors[doc])
      })
      settodaydoctors(newTodayDoctors)
    }
  }, [datewisedoctors, alldoctors])




 const handledepart =(event) =>{
   setdepart(event.target.value)
 }
 
 const handlerescheduleinput = (e)=>{
   e.persist()
   setreForm((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  console.log(todaydoctors)

  //DISPLAY ONLY DOCTORS FROM CHOSEN DEPARTMENTS
  const elements=[];
        for(let i=0;i<todaydoctors.length;i++){
              if(depart == "All departments"){
                  elements.push(<Doctoritem data = {todaydoctors[i]}/>);
              } else {
                if(todaydoctors[i].department == depart){
                  elements.push(<Doctoritem data = {todaydoctors[i]}/>);              
              }
            }
      }


  //DISPLAY ONLY DOCTORS FROM CHOSEN DEPARTMENTS
    return(
        <>
        <Header/>
         
        <Card className="blueback">
            <CardContent>
              
              <div onChange={handledepart}>
              <select id="department" name="department">
                <option  value="All departments" >All Department</option>
                <option  value="GENERAL" >General</option>
                <option  value="DENTAL" >Dental</option>
                <option  value="CARDIOLOGY" >Cardiology</option>
                <option  value="Orthopaedic" >Orthopaedic</option>

             
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

    <div>
      {elements}
    </div>


    </>
    )

}
