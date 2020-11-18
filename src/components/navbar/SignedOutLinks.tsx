import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    navLink: {
      color: 'white',
      textDecoration:'none'
    },
    itemNavLink: {
      textDecoration: 'none',
    },
    button: {
      background: 'inherit',
      marginRight: theme.spacing(2),
      color: 'white',
      border:'none'
    },
    itemButton: {
      background: 'white',
      border: 'none',
    },
  })
);

export const SignedOutLinks = () => {

  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" component="p" className={classes.button}><NavLink to='/register' className={classes.navLink} >Register</NavLink></Button>
      <Button variant="contained" color="primary" component="p" className={classes.button}><NavLink to='/signin' className={classes.navLink} >Login</NavLink></Button>
    </div>

  )
}

export const SignedOutMenuItems = () => { 
  const classes = useStyles();

  return (
    <div>
      <MenuItem>
        <Button variant="contained" component="p" className={classes.itemButton}><NavLink to='/register' className={classes.itemNavLink} >Register</NavLink></Button>
      </MenuItem>
      <MenuItem>
        <Button variant="contained" component="p" className={classes.itemButton}><NavLink to='/signin' className={classes.itemNavLink} >Login</NavLink></Button>
      </MenuItem>
    </div>
  )
}