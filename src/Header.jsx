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

import Badge from '@material-ui/core/Badge';


    
   

    
    
  
function Header(){
   

    
return(
<>

 
     
      <Card  variant="outlined" className="card">
    <CardContent>

           <img src="logo.png" className="logo"/>
              
               <SearchIcon />
               <InputBase placeholder="Search..."/>
       
       <IconButton  color="inherit" className="notify">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <img src="profile.png" className="profile"/>
            </CardContent>
 </Card>

   

         
  
  
</>);
}
export default Header;