import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation } from '../../store/actions/locationAction';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import { FirebaseReducer } from 'react-redux-firebase';
import { signOut } from '../../store/actions/authActions';

const SingedInLinks = (props:{profile:FirebaseReducer.Profile<Record<string, any>>}) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOut());
  }

  const handleLocation = () => {
    console.log('location');
    dispatch(getCurrentLocation())
  }

  return (
    <ul className="right">
      <li><NavLink to='/' exact><a onClick={handleLocation} ><PersonPinCircleIcon fontSize="large" /></a></NavLink></li>
      <li><NavLink to='/create'>New Note</NavLink></li>
      <li><a onClick={handleClick}>Log Out</a></li>
      <li> WELCOME { props.profile.userName && props.profile.userName.toUpperCase() }</li>
    </ul>
  )
}

export default SingedInLinks;