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
    h3: {
      marginLeft:'auto',
      marginRight:'auto',
      paddingTop: theme.spacing(5),
      color: 'white',
      width: '80%'
    },
  }),
);

const NotFound = () => {
  
  const classes = useStyles();

    return (
    <div>
      <Typography className={classes.h3} variant="h3" gutterBottom>
        We tried to locate the page you were looking for and couldn't find it!
      </Typography>
    </div>
    )
}

export default NotFound;