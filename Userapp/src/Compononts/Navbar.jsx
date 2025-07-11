import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            // aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            USER APP
          </Typography>
         <Link to="/"> <Button  style={{color:"white"}}color="inherit">Home</Button></Link>
         <Link to="/add"> <Button style={{color:"white"}} color="inherit">Add</Button></Link>
         {/* <Link to="/view"> <Button style={{color:"white"}} color="inherit">View</Button></Link> */}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar