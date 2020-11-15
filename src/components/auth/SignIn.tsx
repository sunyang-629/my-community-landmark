import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { RootState } from '../../store/reducers/rootReducer';
import { Redirect } from 'react-router-dom'; 

const SignIn = () => {
  
  const [user, setUser] = useState({ email: '', password: '' });
  // @ts-ignore: Unreachable code error
  const authError = useSelector((state: RootState) => state.auth.authError);
  // @ts-ignore: Unreachable code error
  const auth = useSelector((state: RootState) => state.firebase.auth);
  

  const dispatch = useDispatch()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(signIn(user));
  };

  if (auth.uid) {
    return <Redirect to='/' />
  } else {
    return (
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;