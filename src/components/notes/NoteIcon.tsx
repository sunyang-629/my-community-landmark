import React from 'react';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

const NoteIcon = (props:any) => {
  return (
    <div>
      <SpeakerNotesIcon fontSize='large' color='secondary' />
      {props.text}-{props.author}
    </div>
  )
}

export default NoteIcon