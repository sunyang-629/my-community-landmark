import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store/reducers/rootReducer'; 
import { signUp } from '../../store/actions/authActions';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '500px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(7),
    },
    h3: {
      marginLeft: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    button: {
      marginTop: theme.spacing(3),
      float:'right',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }),
);

const SignUp = () => {
  
  const [user, setUser] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const classes = useStyles();

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
      <form className={classes.root} onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Register with your email</h5>
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
            <button className="btn pink lighten-1 z-depth-0">Register</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
    )
  }
}

export default SignUp
