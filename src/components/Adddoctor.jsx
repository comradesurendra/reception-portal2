import React, { useState, useContext , useEffect} from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Header from './Header';
import Link from '@material-ui/core/Link';
import Registerdoctor from './Registerdoctor';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  const [{ fname,lname, designation,hospital,regno,department,phone,pic}, setForm] = useState({
   fname: "",
    lname:"",
  designation: "",
    hospital: "",
    regno: "",
    department: "",
   phone : "",
   pic:"",
    

})
  const handleChange = (e) => {
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
  jsonObj["fname"]=fname
  jsonObj["lname"]=lname
  jsonObj["designation"]=designation
  jsonObj["hospital"]=hospital
  jsonObj["regno"]=regno
  jsonObj["phone"]=phone
  jsonObj["pic"]=pic
  console.log(jsonObj)

  
  
}

  return (
    <>
   
    <div className={classes.root}>
      
       <Header/>
      <AppBar position="static">

        <Tabs value={value} onChange={handleChanges} aria-label="simple tabs example">
          <Tab label="Add Doctor" {...a11yProps(0)} />
          <Tab label="Update Doctor" {...a11yProps(1)} />
          <Link href="/listdoctor"><p style={{color:"white",float:"right"}}>Back</p></Link>
          
        </Tabs>
      </AppBar>
      </div>
      <div className="back">
      <TabPanel value={value} index={0}>
      <form   onSubmit={onsubmits} Validate className="container form-pat">
						
							
							
							<Grid container spacing={3}>
							
							<Grid xs={6}>
							<div className="pre-text">First Name<span className="asterisk">*</span></div>
              <TextField id="outlined-basic"name="fname" value={fname} label="Type patient first name" variant="outlined"  onChange={handleChange}/>
							</Grid>
							
							<Grid xs={6}>
							<div className="pre-text pre-lname">Last Name</div>
              <TextField id="outlined-basic" name="lname"  value={lname}label="Type patient last name" variant="outlined"  onChange={handleChange}/>
							</Grid>


              <Grid xs={6}>
							<div className="pre-text">Designation <span className="asterisk">*</span></div>
              <TextField id="outlined-basic"name="designation" value={designation} label="Select Designation" variant="outlined"  onChange={handleChange}/>
							</Grid>


              <Grid xs={6}>
							<div className="pre-text">Hospital<span className="asterisk">*</span></div>
              <TextField id="outlined-basic" value={hospital} name= "hospital"label="Select Hospital" variant="outlined"  onChange={handleChange}/>
							</Grid>


							<Grid xs={6}>
							<div className="pre-text">Registration Number<span className="asterisk">*</span></div>
              <TextField id="outlined-basic"  value={regno} name="regno"label="Type registration number" variant="outlined"  onChange={handleChange}/>
							</Grid>
              <Grid xs={6}>
							<div className="pre-text">Department<span className="asterisk">*</span></div>
              <TextField id="outlined-basic" value={department} name="department" label="Select Department" variant="outlined"  onChange={handleChange}/>
							</Grid>


              <Grid xs={6}>
							<div className="pre-text">Phone Number<span className="asterisk">*</span></div>
              <TextField id="outlined-basic" value={phone} name="phone" label="Type phone name" variant="outlined"  onChange={handleChange}/>
							</Grid>
              <Grid xs={6}>
							<div className="pre-text">Profile Picture<span className="asterisk">*</span></div>
              <Card>
                <CardActions>
							<TextField  type="file" value={pic} id="outlined-basic"  name="pic" variant="outlined"  onChange={handleChange}/>
						
              </CardActions>
              </Card>
              	</Grid>
              
							
							
							

							
							
					

							
						
						<Grid item xs={12} sm={6}>
              
               <Button  variant="contained" type="submit"  color="primary">
            +Add Doctor
                 </Button>
					  
              </Grid>
      </Grid>
					</form>
				
      </TabPanel>
      </div>
      <div className="back">
      <TabPanel value={value} index={1}>
        Update profile Coming SOON....
      </TabPanel>
      
    </div>
  </>);
}