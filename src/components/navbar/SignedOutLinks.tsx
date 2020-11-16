import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    navLink: {
      color: 'white',
      textDecoration:'none'
    },
    button: {
      background: 'inherit',
      marginRight: theme.spacing(2),
      color: 'white',
      border:'none'
    },
  })
);

export const SignedOutLinks = () => {

  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" component="p" className={classes.button}><NavLink to='/register' className={classes.navLink} >Register</NavLink></Button>
      <Button variant="contained" color="primary" component="p" className={classes.button}><NavLink to='/signin' className={classes.navLink} >Login</NavLink></Button>
    </div>

  )
}

// export default SingedOutLinks;