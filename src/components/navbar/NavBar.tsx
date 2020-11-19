import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RootState } from '../../store/reducers/rootReducer';
import { getCurrentLocation } from '../../store/actions/locationActions';
import { getAllNotes } from '../../store/actions/noteActions';

import { SignedInLinks, SignedInMenuItems } from './SignedInLinks';
import { SignedOutLinks, SignedOutMenuItems } from './SignedOutLinks';
import SearchBar from './SearchBar';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    locationButton: {
      marginRight: theme.spacing(2),
      color:'#fff',
      fontSize:"2.5rem",
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      color:'white'
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // @ts-ignore: Unreachable code error
  const auth = useSelector((state: RootState) => state.firebase.auth);
  // @ts-ignore: Unreachable code error
  const profile = useSelector((state: RootState) => state.firebase.profile);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  const menuItems = auth.uid ? <SignedInMenuItems /> : <SignedOutMenuItems />

  
  const handleLocation = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(getAllNotes())
    dispatch(getCurrentLocation())
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {menuItems}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to='/' exact>
            <IconButton
              edge="start"
              className={classes.locationButton}
              color="inherit"
              aria-label="get current location"
              onClick={handleLocation}
            >
              <PersonPinCircleIcon />
            </IconButton>
          </NavLink>
          <Typography className={classes.title} variant="subtitle1" noWrap>
            My Community Landmark
          </Typography>
          {auth.uid && <SearchBar />}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {links}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default NavBar;