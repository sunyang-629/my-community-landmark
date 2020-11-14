import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLocation } from '../store/actions/locationAction';
import { RootState } from '../store/reducers/rootReducer';
import { IconButton } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

const Navbar = () => {
  const dispatch = useDispatch();
  // const location = useSelector((state:RootState) => state.location);
  // console.log('navbar:',location);

  const handleClick = () => {
    dispatch(getCurrentLocation())
  }

  return (
    <div className="navbar">
      <IconButton onClick={handleClick}>
        <PersonPinCircleIcon />
      </IconButton>
    </div>
  )
}

export default Navbar
