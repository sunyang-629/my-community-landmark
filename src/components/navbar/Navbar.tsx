import React from 'react'
import { useDispatch } from 'react-redux';
import { getCurrentLocation } from '../../store/actions/locationAction';
// import { RootState } from '../store/reducers/rootReducer';
import { Link,NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getCurrentLocation())
  }

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'> My Community Landmark </Link>
        <SignedInLinks />
        <SignedOutLinks />
        {/* <div className="navbar">
          <IconButton onClick={handleClick} >
            <PersonPinCircleIcon />
          </IconButton>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
