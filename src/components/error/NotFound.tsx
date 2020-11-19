import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    warningTitle: {
      marginLeft:'auto',
      marginRight:'auto',
      paddingTop: theme.spacing(7),
      color: 'white',
      width: '80%'
    },
  }),
);

const NotFound = () => {
  
  const classes = useStyles();

    return (
    <div>
      <Typography className={classes.warningTitle} variant="h3" gutterBottom>
        We tried to locate the page you were looking for and couldn't find it!
      </Typography>
    </div>
    )
}

export default NotFound;