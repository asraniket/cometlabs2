import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CircleIcon from '@mui/icons-material/Circle';
import { useStyles } from './HeaderStyles';

export default function SidenavData() {
	const classes = useStyles()
	const listItemData = [
		{label: "Profile", link:"/profile", icon: <PermIdentityIcon/>},
		{label: "Turing Test", link:"/turing_test", icon: <CircleIcon/>},
	];
  return (
	<List>
		{listItemData.map((item,i) => (
			<ListItem exact component={ NavLink } to={item.link} className={classes.navlinks} activeClassName={classes.activeNavlinks} key={i}>
			<ListItemIcon>
				{item.icon}
			</ListItemIcon>
			<ListItemText>
				{item.label}
			</ListItemText>
		</ListItem>
		) )}
	  
	</List>
  )
}
