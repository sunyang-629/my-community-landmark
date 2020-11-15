import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation } from '../../store/actions/locationAction';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
// import { signOut } from '../../store/actions/authorAction';

const SingedInLinks = () => {

  const dispatch = useDispatch();
  // const firebase = useSelector(state => state.firebase);
  // console.log('firebase:', firebase);
  // const handleClick = e => {
  //   dispatch(signOut());
  // }
  const handleLocation = () => {
    dispatch(getCurrentLocation())
  }

  return (
    <ul className="right">
      <li><NavLink to='/' exact><a onClick={handleLocation} ><PersonPinCircleIcon fontSize="large" /></a></NavLink></li>
      <li><NavLink to='/create'>New Note</NavLink></li>
      <li><a>Log Out</a></li>
    </ul>
  )
}

export default SingedInLinks;