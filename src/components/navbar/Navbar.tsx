import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/reducers/rootReducer';
import { SignedInLinks } from './SignedInLinks';
import { SignedOutLinks } from './SignedOutLinks';



const Navbar = () => {
  // @ts-ignore: Unreachable code error
  const auth = useSelector((state: RootState) => state.firebase.auth);
  // @ts-ignore: Unreachable code error
  const profile = useSelector((state: RootState) => state.firebase.profile);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'> My Community Landmark </Link>
        {links}
      </div>
    </nav>
  )
}

export default Navbar
