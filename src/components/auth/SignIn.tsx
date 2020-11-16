import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { RootState } from '../../store/reducers/rootReducer';
import { Redirect } from 'react-router-dom'; 

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

const SignIn = () => {
  
  const [user, setUser] = useState({ email: '', password: '' });
  const classes = useStyles();
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
        <form className={classes.root} onSubmit={handleSubmit}>
          <Typography className={classes.h3} variant="h3" gutterBottom>Login</Typography>
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
          <Button variant="outlined" className={classes.button} type="submit" >Login</Button>
              {/* {authError ? <p>{authError}</p> : null} */}
        </form>
   
    )
  }
}

export default SignIn;