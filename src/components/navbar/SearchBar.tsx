import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import { getAllNotes, searchNotesByUser,searchNotesByContent,searchLoginNotes } from '../../store/actions/noteAction';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
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
      // paddingLeft: `calc(0.1em + ${theme.spacing(1)}px)`,
    },
    inputRoot: {
      color: 'inherit',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },

    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
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
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('username');
  const [displayMyNotes, setDisplayMyNotes] = useState(false);

  // @ts-ignore: Unreachable code error
  const notes = useSelector((state: RootState) => state.firestore.ordered.notes);
  // @ts-ignore: Unreachable code error
  const profile = useSelector((state: RootState) => state.firebase.profile);
  // @ts-ignore: Unreachable code error
  const isLoading = useSelector((state: RootState) => state.note.isLoading);
  // @ts-ignore: Unreachable code error
  const isSearching = useSelector((state: RootState) => state.note.isSearching);
  // @ts-ignore: Unreachable code error
  const searchString = useSelector((state: RootState) => state.note.searchString);
  // @ts-ignore: Unreachable code error
  const isMynotes:boolean = useSelector((state: RootState) => state.note.isMyNotes);


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    !isLoading && setSearchValue(e.target.value);
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const type = searchType === 'username' ? 'content' : 'username';
    setDisplayMyNotes(false);
    setSearchType(type);
    dispatch(getAllNotes())
  }

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    !isMynotes ? dispatch(searchLoginNotes(profile.userName.toLocaleLowerCase())) : dispatch(getAllNotes())
    setSearchType('username');
  }
  // const handleSearch = (event: React.MouseEvent<HTMLElement>) => {
  //   dispatch(searchNotesByUser(searchValue.toLocaleLowerCase()))
  // }

  // const handleClearSearch = (event: React.MouseEvent<HTMLElement>) => {
  //   setSearchValue('');
  //   dispatch(getAllNotes())
  // }

  useEffect(() => {
    searchValue ? ( (searchType === 'username')
      ? dispatch(searchNotesByUser(searchValue.toLocaleLowerCase()))
      : dispatch(searchNotesByContent(searchValue.toLocaleLowerCase())))
     : dispatch(getAllNotes())
  }, [searchValue])

  // useEffect(() => {
  //   displayMyNotes ? dispatch(searchLoginNotes(profile.userName.toLocaleLowerCase())) : dispatch(getAllNotes())
  // },[displayMyNotes])


  return (
    <div>
      <div className={classes.search}>
        {/* <div className={classes.searchIcon}>
          <SearchIcon />
        </div> */}
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
          value={searchString}
        />
        <IconButton className={classes.searchIcon} aria-label="toggle search type" onClick={handleClick}>
         { searchType === 'username' ? <PersonIcon /> : <NoteIcon />}
        </IconButton> 
        <Switch
        checked={isMynotes}
        onChange={handleSwitch}
        color="primary"
        // name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </div>
      {(isSearching && !isLoading) && <Typography className={classes.searchResult} variant="subtitle2"> {notes ? notes.length : 0} results found</Typography>}
    </div>

  )
}

export default SearchBar
