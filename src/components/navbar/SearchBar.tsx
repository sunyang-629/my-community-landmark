import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/reducers/rootReducer';
import { getAllNotes, searchNotesByUser,searchNotesByContent,searchLoginNotes } from '../../store/actions/noteAction';

import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import NoteIcon from '@material-ui/icons/Note';
import Switch from '@material-ui/core/Switch';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(1),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      height: '100%',
      color:'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },

    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '18ch',
      },
    },
    searchResult: {
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    },
  }),
);

const SearchBar = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchType, setSearchType] = useState<string>('username');
  // const [displayMyNotes, setDisplayMyNotes] = useState(false);

  // @ts-ignore: Unreachable code error
  const notes = useSelector((state: RootState) => state.firestore.ordered.notes);
  // @ts-ignore: Unreachable code error
  const profile = useSelector((state: RootState) => state.firebase.profile);
  const note = useSelector((state: RootState) => state.note);


  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    !note.isLoading && setSearchValue(event.target.value);
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const type = searchType === 'username' ? 'content' : 'username';
    setSearchType(type);
    dispatch(getAllNotes())
  }

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    !note.isMyNotes ? dispatch(searchLoginNotes(profile.userName.toLocaleLowerCase())) : dispatch(getAllNotes())
    setSearchType('username');
  }

  useEffect(() => {
    searchValue ? ( (searchType === 'username')
      ? dispatch(searchNotesByUser(searchValue.toLocaleLowerCase()))
      : dispatch(searchNotesByContent(searchValue.toLocaleLowerCase())))
     : dispatch(getAllNotes())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  return (
    <div>
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
          value={note.searchString}
        />
        <IconButton className={classes.searchIcon} aria-label="toggle search type" onClick={handleClick}>
         { searchType === 'username' ? <PersonIcon /> : <NoteIcon />}
        </IconButton> 
        <Switch
        checked={note.isMyNotes}
        onChange={handleSwitch}
        color="primary"
        inputProps={{ 'aria-label': 'toggle search type' }}
      />
      </div>
      {(note.isSearching && !note.isLoading) && <Typography className={classes.searchResult} variant="subtitle2"> {notes ? notes.length : 0} results found</Typography>}
    </div>
  )
}

export default SearchBar
