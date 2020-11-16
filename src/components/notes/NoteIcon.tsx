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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';



const useStyles = makeStyles({
  root: {
    minWidth: 200,
    background: '#EEBD9F'
  },
  content: {
    color: 'white',
  }
});

const NoteIcon = (props: any) => {
  
  const [isShown, setisShown] = useState(false)
  // const [state, setstate] = useState(initialState)

  const classes = useStyles();
  // @ts-ignore: Unreachable code error
  const profile = useSelector((state: RootState) => state.firebase.profile);
  const color = (props.author === profile.userName) ? 'primary' : 'secondary'

  return (
    <ClickAwayListener onClickAway={()=>{setisShown(false)}}>
      <div>
        <IconButton aria-label="show note details" style={{cursor: 'cursor'}} onClick={()=>{setisShown(true)}} >
          <SpeakerNotesIcon color={color} />
        </IconButton>
        {isShown && <Card className={classes.root} variant="outlined">
          <CardContent className={classes.content}>
            <Typography variant="body1" component="p">
              {props.author}:{props.text}
            </Typography>
            <Typography variant="body2" component="p">
              <br/>
              @{props.lat} {props.lng}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small" onClick={()=>{setisShown(false)}}>Close</Button>
          </CardActions> */}
        </Card>}
      </div>
    </ClickAwayListener>
    
  )
}

export default NoteIcon