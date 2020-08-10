import React , { useState } from "react";

import { TablePagination , Accordion , AccordionSummary , AccordionDetails } from '@material-ui/core';
import { Chip , Table , TableBody , TableCell , TableContainer , TableHead , TableRow ,Paper } from '@material-ui/core';
import { Card , CardActions , CardContent , Button , Typography , TextField , Dialog , DialogActions ,DialogContent , DialogContentText , DialogTitle , Radio , RadioGroup , FormControlLabel } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Doctoritem = (props) => {


    const patients = [{name:'Priya Kashyap', age:39, sex:'Female',  number:9786575778, time: "01:00 PM"}]
    const [open, setOpen] = useState(false);
    const doctor = props.data;







    
    return (
    <>
        <Card >
        
      <CardContent>
        <img src="profile.png"/>
        <div className="content">
        
        
        <Typography>{doctor.doctorname}</Typography><br/>
        <Typography>{doctor.designation}</Typography>
        <br/>
        <Typography>{/*EXPERIENCE*/}</Typography>
        </div>

        <Accordion>
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
          {patients.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.sex}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
      
      
      
      </CardContent>
      
      <CardActions>
      <Button variant="contained" color="primary" onClick={null}>
        +Book Appointment
      </Button>
        <Dialog open={open} onClose={null} aria-labelledby="form-dialog-title">
        <form onSubmit={null} >
        <DialogTitle id="form-dialog-title">Patient Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide patient details to proceed for the appointment with DR.PRITTY PAWAREKAR

          </DialogContentText>
          
          <b>Select your Appointment Date</b><span className="require">*</span>
         
          
          <TextField  type="date" name="date" value={null} id="outlined-basic"  label="Select Date" variant="outlined"  onChange={null}/>
          <RadioGroup  aria-label="mode" name="mode" value={null} onChange={null}>
        <FormControlLabel value="Online" control={<Radio />} label="Online" />
        <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
    </RadioGroup>
    
     <p>Age</p>
    <TextField id="outlined-basic" name="age" value={null} label="Type patient Age" variant="outlined"  onChange={null}/>
    
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
    <TextField id="outlined-basic" name="fname" value={"TEST"}label="Type patient first name" variant="outlined"  onChange={null}/>
    <p>Patient Last Name</p>
    <TextField id="outlined-basic" value={"TEST"} name="lname"label="Type patient last name" variant="outlined"  onChange={null}/>
    <p>Phone</p>
    <TextField id="outlined-basic"  value={"TEST"}name="phone" label="Type patient contact" variant="outlined"  onChange={null}/>
    
    <p>Address</p>
    <TextField id="outlined-basic"  value={"TEST"}name="address"label="Type patient Address" variant="outlined"  onChange={null}/>
    <p>Email</p>
    <TextField id="outlined-basic" value={"TEST"} name="email" label="Type patient email address" variant="outlined"  onChange={null}/>

    </DialogContent>
        <DialogActions>
          <Button onClick={null} color="primary">
            Cancel
          </Button>
          <Button  variant="contained" type="submit"  onClick={null} color="primary">
            +Book Appointment
          </Button>
        </DialogActions>
        </form>
      </Dialog>
      </CardActions>
    </Card>

    <Dialog open={false}>
      <DialogContent>
        Patient Added
      </DialogContent>
      <DialogActions>
      <Button onClick={null} color="primary">
            OK
          </Button>

      </DialogActions>
    </Dialog>

    <Dialog open={null}>
    <form onSubmit={null} >
      <DialogContent>
        <p>SELECT NEW DATE:</p>
        <TextField  type="date" name="redate" value={"TEST"} id="redate"  label="Select Date" variant="outlined"  onChange={null}/>
        <p>SELECT NEW SLOTS</p>
        <div onChange={null}>
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
      <Button  type="submit"  color="primary">
            OK
          </Button>

      </DialogActions>
      </form>
    </Dialog>
    </>
    );

}

export default Doctoritem;