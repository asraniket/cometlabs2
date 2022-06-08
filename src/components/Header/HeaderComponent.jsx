import { Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Profile from '../BodyComponents/Profile/Profile';
import TuringTest from '../BodyComponents/TuringTest/TuringTest';
import { Box } from '@mui/system';
import { useStyles } from './HeaderStyles';

export default function HeaderComponent() {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerOpen = () => {
		setMobileOpen(!mobileOpen);
	};
  return (
	<div>
	  <Navbar handleDrawerOpen={handleDrawerOpen} />
	  <Sidenav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen} />
	  {/* registering our routes*/}
	  <Box className={classes.wrapper}>
	  <Route>
		<Route exact path="/profile" render={() => <Profile/>} />
		<Route exact path="/turing_test" render={() => <TuringTest/>} />
	  </Route>
	  </Box>
	</div>
  )
}
