import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation } from '../../store/actions/locationAction';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import NoteSwitch from '../notes/NoteSwitch';
import { FirebaseReducer } from 'react-redux-firebase';
import { signOut } from '../../store/actions/authActions';
import { getAllNotes } from '../../store/actions/noteAction';

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
    disabledButton: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'inline',
      },
      background: 'inherit',
      marginRight: theme.spacing(2),
      color: 'white',
      border:'none'
    },
    circle: {
      verticalAlign: 'middle'
    }
  })
);

export const SignedInLinks = (props:{profile:FirebaseReducer.Profile<Record<string, any>>}) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOut());
  }

  const handleClearSearch = () => {
    dispatch(getAllNotes())
  }

  return (
    <div>
      <Button variant="contained" color="primary" component="p" className={classes.button} onClick={handleClearSearch}><NavLink to='/create' className={classes.navLink} >New Note</NavLink></Button>
      <Button variant="contained" color="primary" component="p" className={classes.button} onClick={handleClick}>Log Out</Button>
      {/* <NoteSwitch /> */}
      {/* <AccountCircleIcon /> */}
      <AccountCircle className={classes.circle} />
      <Button disableElevation className={classes.disabledButton} variant="contained" color="primary" component="p">{props.profile.userName && props.profile.userName.toUpperCase()}</Button>
      {/* <p>{props.profile.userName && props.profile.userName.toUpperCase()}</p> */}
    </div>
  )
}

export const SignedInMenuItems = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = () => {
    dispatch(signOut());
  }
  
  const handleClearSearch = () => {
    dispatch(getAllNotes())
  }

  return (
    <div>
      <MenuItem>
        <Button variant="contained"  component="p" className={classes.itemButton} onClick={handleClearSearch}><NavLink to='/create' className={classes.itemNavLink} >New Note</NavLink></Button>
      </MenuItem>
      <MenuItem>
        <Button variant="contained"  component="p" className={classes.itemButton} onClick={handleClick}>Log Out</Button>
      </MenuItem>
    </div>
  )
}