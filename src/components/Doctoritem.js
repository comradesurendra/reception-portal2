import React , { useState } from "react";

import { TablePagination , Accordion , AccordionSummary , AccordionDetails } from '@material-ui/core';
import { Chip , Table , TableBody , TableCell , TableContainer , TableHead , TableRow ,Paper } from '@material-ui/core';
import { Card , CardActions , CardContent , Button , Typography , TextField , Dialog , DialogActions ,DialogContent , DialogContentText , DialogTitle , Radio , RadioGroup , FormControlLabel } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Doctoritem = (props) => {


    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};
    const [appoint,setAppoint]=useState(false);
    const handleappointment = ()=>{setAppoint(true);
    localStorage.setItem("doctorsId","9SFyspJvZGSUUpzZNh7751z0IHL2");
    }
    const handleCloseappoint=()=>{setAppoint(false)}
    const [reschedule,setreschedule]=useState(false)
    const handlereschedule=()=>{setreschedule(true)}
    const [{redate,reslots}, setreForm]=useState({
    redate:"",
    reslots:""
  })
  const handlerescheduleappoint=()=>{
    setreschedule(false)
  }
  const [{ date,age,fname,lname,phone,address,email,doctorId}, setForm] = useState({
    
    date:"",
     
     age:"",
     fname:"",
     lname:"",
     phone:"",
     address:"",
     email:"",
     doctorId:"",
    })
  
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
      let doctorsId=localStorage.getItem(doctorId)
      jsonObj["doctorId"]=doctorsId
      console.log(jsonObj)
      const addpatient=firebase.database().ref("patients_data");
          addpatient.push(jsonObj);

      
    
    }
    
    
    const onreschedulesubmits=(event)=>{
      event.preventDefault();
     
      let  jsonObj={};
      jsonObj["redate"]=redate
      jsonObj["reslots"]=reslots
      console.log(jsonObj)
    }
    const handleinput = (e) => {
      e.persist()
      
      setForm((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
          
      }))
      console.log(e.target.value)
    }
    const handlerescheduleinput = (e)=>{
      e.persist()
      setreForm((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value,
       
   }))
   console.log(e.target.value)
   }
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    function createData(name,age, sex, contact, slot,Action) {
      return { name,age, sex, contact, slot,Action };
    }

    const rows = [
      createData('Priya Kashyap', 39, 'Female',  9786575778, "01:00 PM",<div><Button variant="contained"  color="primary">Cancel</Button><Button variant="contained"  onClick={handlereschedule} color="primary">Reschedule</Button></div> ),]
    const doctor = props.data;

    return (
    <>
        <Card >
        
      <CardContent>
        <img style= {{float : "left"}}src="profile.png"/>
        <div className="content">
        
        
        <Typography>{null}</Typography><br/>
        <Typography>{null}</Typography>
        <br/>
        <Typography>{/*EXPERIENCE*/}</Typography>
        </div>

        <Accordion style={{width : '90%'}}>
        <div className="view">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panelheader"
        >
        
          <Typography >View Booking</Typography>
         
        </AccordionSummary>
        </div>
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
    <div onChange={null}>
              <select id="slots" name="slots">
                <option  value="9:00am-10:00am" >9:00am-10:00am</option>
                <option  value="10:00am-12:00pm" >10:00am-12:00pm</option>
                <option  value="12:00pm-2:00pm" >12:00pm-2:00pm</option>
                <option  value="2:00pm-4:00pm" >2:00pm-4:00pm</option>
                <option  value="4:00pm-6:00pm" >4:00pm-6:00pm</option>
             
              </select>
                   </div>
    
    <p>Patient First Name</p>
    <TextField id="outlined-basic" name="fname" value={fname}label="Type patient first name" variant="outlined"  onChange={handleinput}/>
    <p>Patient Last Name</p>
    <TextField id="outlined-basic" value={lname} name="lname"label="Type patient last name" variant="outlined"  onChange={handleinput}/>
    <p>Phone</p>
    <TextField id="outlined-basic"  value={phone}name="phone" label="Type patient contact" variant="outlined"  onChange={handleinput}/>
    
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

    <Dialog open={reschedule}>
    <form onSubmit={onreschedulesubmits} >
      <DialogContent>
        <p>SELECT NEW DATE:</p>
        <TextField  type="date" name="redate" value={redate} id="redate"  label="Select Date" variant="outlined"  onChange={handlerescheduleinput}/>
        <p>SELECT NEW SLOTS</p>
        <div onChange={handlerescheduleinput}>
              <select id="slots" name="reslots">
                <option  value="9:00am-10:00am" >9:00am-10:00am</option>
                <option  value="10:00am-12:00pm" >10:00am-12:00pm</option>
                <option  value="12:00pm-2:00pm" >12:00pm-2:00pm</option>
                <option  value="2:00pm-4:00pm" >2:00pm-4:00pm</option>
                <option  value="4:00pm-6:00pm" >4:00pm-6:00pm</option>
             
              </select>
                   </div>
                   

      </DialogContent>
      <DialogActions>
      <Button   onClick={handlerescheduleappoint} type="submit"  color="primary">
            OK
          </Button>

      </DialogActions>
      </form>
    </Dialog>
    </>
    );

}

export default Doctoritem;