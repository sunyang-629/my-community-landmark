import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import IconButton from '@material-ui/core/IconButton';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';



const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  content: {
    color: 'white',
  },
  avatar: {
    color: 'white',
    cursor: 'cursor',
  }
});

const NoteIcon = (props: any) => {
  
  const [isShown, setisShown] = useState(false)
  // const [state, setstate] = useState(initialState)

  const classes = useStyles();
  // @ts-ignore: Unreachable code error
  const profile = useSelector((state: RootState) => state.firebase.profile);
  const avatarColor = (props.author === profile.userName) ? '#0176BE' : '#D14905'
  const contentColor = (props.author === profile.userName) ? '#90A7FF' : '#EEBD9F'

  return (
    <ClickAwayListener onClickAway={()=>{setisShown(false)}}>
      <div>
        <IconButton aria-label="show note details" style={{cursor: 'cursor'}} onClick={()=>{setisShown(true)}} >
          {/* <SpeakerNotesIcon color={color} /> */}
          <Avatar alt={props.author} src="/broken-image.jpg" className={classes.avatar} style={{background:avatarColor}} onClick={()=>{setisShown(true)}} />
        </IconButton>
        {isShown && <Card className={classes.root} variant="outlined" style={{background:contentColor}}>
          <CardContent className={classes.content} >
            <Typography variant="body1" component="p">
              {props.author}:{props.text}
            </Typography>
            <Typography variant="body2" component="p">
              <br/>
              @{props.lat} {props.lng}
            </Typography>
          </CardContent>
        </Card>}
      </div>
    </ClickAwayListener>
    
  )
}

export default NoteIcon