import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { signOut } from '../../store/actions/authorAction';

const SingedInLinks = () => {

  // const dispatch = useDispatch();
  // const firebase = useSelector(state => state.firebase);
  // console.log('firebase:', firebase);
  // const handleClick = e => {
  //   dispatch(signOut());
  // }

  return (
    <ul className="right">
      <li><NavLink to='/create'>New Note</NavLink></li>
      <li><a>Log Out</a></li>
    </ul>
  )
}

export default SingedInLinks;