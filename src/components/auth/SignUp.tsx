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
          <Typography className={classes.h3} variant="h3" gutterBottom>Register</Typography>
          <TextField
            id="email"
            type="email"
            label="email"
            style={{ margin: 8 }}
            placeholder="email"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            id="userName"
            type="string"
            label="userName"
            style={{ margin: 8 }}
            placeholder="userName"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            id="password"
            type="password"
            label="password"
            style={{ margin: 8 }}
            placeholder="password"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />
          <Button variant="outlined" className={classes.button} type="submit" >Register</Button>
        </form>
    )
  }
}

export default SignUp
