import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography, } from '@mui/material';

const useStyles = makeStyles((theme) => ({
	logo:{
		color: "red",
	}
}))

export default function Navbar() {
	const classes = useStyles();
  return (
	<AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" className={classes.logo}>
      Photos
    </Typography>
	{/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
  </IconButton>*/}
  </Toolbar>
</AppBar>
  )
}
