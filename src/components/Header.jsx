import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { AppBar , Toolbar , Button, Box} from '@material-ui/core'
import "../styles/Header.css";

import Badge from '@material-ui/core/Badge';


    
   

    
    
  
function Header(){
   

    
return(
<>

 

<AppBar position="static"style={{ background: '#ffffff' ,boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)` , transition: `0.3`}}>
  <Toolbar>
   <Box display = 'flex' flexGrow = {1}>
  <img src="logo.png" className="logo"/>
  <Typography variant="h6" style={{color : "#0204B8"  , marginLeft: "10px"}}>
      Prescribe
  </Typography>
  </Box>
  <SearchIcon />
  <InputBase placeholder="Search..."/>
  <IconButton  color="inherit" className="notify">
  <Badge badgeContent={17} color="secondary">
  <NotificationsIcon />
  </Badge>
  </IconButton>
  <img src="profile.png" className="profile"/>
  </Toolbar>
</AppBar>
{/*      
      <Card  variant="outlined" className="card">
    <CardContent>

           
              
               
       
       
            </CardContent>
 </Card> */}

   

         
  
  
</>);
}
export default Header;