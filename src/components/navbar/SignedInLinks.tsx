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
import NoteSwitch from '../notes/NoteSwitch';
import { FirebaseReducer } from 'react-redux-firebase';
import { signOut } from '../../store/actions/authActions';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    navLink: {
      color: 'white',
      textDecoration:'none'
    },
    button: {
      background: 'inherit',
      marginRight: theme.spacing(2),
      color: 'white',
      border:'none'
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

const SingedInLinks = (props:{profile:FirebaseReducer.Profile<Record<string, any>>}) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOut());
  }

  const handleLocation = () => {
    dispatch(getCurrentLocation())
  }

  return (
    <div>
      <Button variant="contained" color="primary" component="p" className={classes.button}><NavLink to='/create' className={classes.navLink} >New Note</NavLink></Button>
      <Button variant="contained" color="primary" component="p" className={classes.button} onClick={handleClick}>Log Out</Button>
      <NoteSwitch />
      {/* <AccountCircleIcon /> */}
      <AccountCircle className={classes.circle} />
      <Button disableElevation className={classes.disabledButton} variant="contained" color="primary" component="p">{props.profile.userName && props.profile.userName.toUpperCase()}</Button>
      {/* <p>{props.profile.userName && props.profile.userName.toUpperCase()}</p> */}
    </div>
  )
}

export default SingedInLinks;