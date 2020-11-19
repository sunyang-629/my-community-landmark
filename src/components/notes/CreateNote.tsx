import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, Redirect } from 'react-router-dom'

import { createNote, NoteState } from '../../store/actions/noteActions';
import { RootState } from '../../store/reducers/rootReducer';

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
      height:'100%',
      backgroundColor:'#F5F5F5'
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

const CreateNote = (props: RouteComponentProps) => {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const location = useSelector((state: RootState) => state.location);
  // @ts-ignore: Unreachable code error
  const profile = useSelector((state: RootState) => state.firebase.profile);
  // @ts-ignore: Unreachable code error
  const auth = useSelector((state: RootState) => state.firebase.auth);

  const [note, setNote] = useState<NoteState>({
    note: '',
    location: {
      lat: location.lat,
      lng: location.lng,
    },
    author: profile.userName
  });

  const currentLocationString = location.lat + ' ' + location.lng

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.target && setNote({ ...note, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(createNote(note));
    props.history.push('/');
  }

  if (!auth.uid) {
    return <Redirect to="/login" />
  } else {
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography className={classes.h3} variant="h3" gutterBottom>Create New Note</Typography>
        <TextField
          id="note"
          type="string"
          label="note"
          style={{ margin: 8 }}
          placeholder="new note"
          fullWidth
          margin="normal"
          required
          onChange={handleChange}
          inputProps={{ maxLength: 32 }}
        />
        <TextField
          id="location"
          type="string"
          label="location"
          style={{ margin: 8 }}
          defaultValue={currentLocationString}
          fullWidth
          margin="normal"
          disabled
        />
        <Button variant="outlined" className={classes.button} type="submit" >Create</Button>
      </form>
    )
  }
}

export default CreateNote;
