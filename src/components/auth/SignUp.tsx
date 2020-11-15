import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store/reducers/rootReducer'; 
import { signUp } from '../../store/actions/authActions';

const SignUp = () => {
  
  const [user, setUser] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const dispatch = useDispatch();
  
 // @ts-ignore: Unreachable code error
  const auth = useSelector(state => state.firebase.auth);
   // @ts-ignore: Unreachable code error
  const authError = useSelector((state: RootState) => state.auth.authError);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(signUp(user));
  }

  if (auth.uid) {
    return <Redirect to='/' />
  } else {
    return (
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" onChange={handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} required />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
