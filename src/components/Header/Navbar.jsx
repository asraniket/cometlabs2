import React from 'react';
import { AppBar, Toolbar, Typography, Box, Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './HeaderStyles';


export default function Navbar({ handleDrawerOpen }) {
	const classes = useStyles();
  return (
	<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.logo} color="inherit" component="div">
      CometLabs
    </Typography>
	<Hidden smDown>
	<Box ></Box>
	</Hidden>
	<Hidden mdUP>
	<IconButton color="inherit" onClick={handleDrawerOpen}>
		<MenuIcon />
	</IconButton>
	</Hidden>
  </Toolbar>
</AppBar>
  )
}
